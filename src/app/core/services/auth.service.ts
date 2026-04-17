import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { tap, catchError, shareReplay } from 'rxjs/operators';
import { ApiService } from './api.service';
import { LoggerService } from './logger.service';
import { User, AuthCredentials, RegisterCredentials, AuthResponse, ApiResponse } from '@models/index';

const TOKEN_KEY = 'authToken';
const REFRESH_TOKEN_KEY = 'refreshToken';
const USER_KEY = 'currentUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiService = inject(ApiService);
  private readonly logger = inject(LoggerService);
  private readonly router = inject(Router);

  private readonly currentUser$ = new BehaviorSubject<User | null>(null);
  private readonly isAuthenticated$ = new BehaviorSubject<boolean>(false);
  private readonly loading$ = new BehaviorSubject<boolean>(false);
  private readonly error$ = new BehaviorSubject<string | null>(null);

  public getCurrentUser(): Observable<User | null> {
    return this.currentUser$.asObservable();
  }

  public isAuthenticated(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }

  public getLoading(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  public getError(): Observable<string | null> {
    return this.error$.asObservable();
  }

  public login(credentials: AuthCredentials): Observable<ApiResponse<AuthResponse>> {
    if (!this.validateCredentials(credentials)) {
      return throwError(() => new Error('Invalid credentials'));
    }

    this.loading$.next(true);
    this.error$.next(null);

    return this.apiService.post<AuthResponse>('auth/login', credentials, { retries: 1 }).pipe(
      tap(response => {
        if (response.success && response.data) {
          this.setAuthData(response.data);
          this.loading$.next(false);
          this.logger.info('User logged in successfully');
        }
      }),
      catchError(error => {
        const message = 'Login failed. Please check your credentials.';
        this.error$.next(message);
        this.loading$.next(false);
        this.logger.error('Login failed', error);
        return throwError(() => error);
      }),
      shareReplay(1)
    );
  }

  public register(credentials: RegisterCredentials): Observable<ApiResponse<AuthResponse>> {
    if (!this.validateRegisterCredentials(credentials)) {
      return throwError(() => new Error('Invalid credentials'));
    }

    this.loading$.next(true);
    this.error$.next(null);

    return this.apiService.post<AuthResponse>('auth/register', credentials, { retries: 0 }).pipe(
      tap(response => {
        if (response.success && response.data) {
          this.setAuthData(response.data);
          this.loading$.next(false);
          this.logger.info('User registered successfully');
        }
      }),
      catchError(error => {
        const message = 'Registration failed. Please try again.';
        this.error$.next(message);
        this.loading$.next(false);
        this.logger.error('Registration failed', error);
        return throwError(() => error);
      }),
      shareReplay(1)
    );
  }

  public logout(): void {
    this.clearAuthData();
    this.currentUser$.next(null);
    this.isAuthenticated$.next(false);
    this.router.navigate(['/auth/login']);
    this.logger.info('User logged out');
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public refreshToken(): Observable<ApiResponse<AuthResponse>> {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

    if (!refreshToken) {
      return throwError(() => new Error('No refresh token available'));
    }

    return this.apiService.post<AuthResponse>('auth/refresh', { refreshToken }, { retries: 0 }).pipe(
      tap(response => {
        if (response.success && response.data) {
          this.setAuthData(response.data);
          this.logger.info('Token refreshed');
        }
      }),
      catchError(error => {
        this.logout();
        this.logger.error('Token refresh failed', error);
        return throwError(() => error);
      })
    );
  }

  public getProfile(): Observable<ApiResponse<User>> {
    return this.apiService.get<User>('auth/profile').pipe(
      tap(response => {
        if (response.success && response.data) {
          this.currentUser$.next(response.data);
          this.persistUser(response.data);
          this.logger.info('User profile loaded');
        }
      }),
      catchError(error => {
        this.logger.error('Failed to load profile', error);
        return throwError(() => error);
      })
    );
  }

  public updateProfile(data: Partial<User>): Observable<ApiResponse<User>> {
    return this.apiService.put<User>('auth/profile', data).pipe(
      tap(response => {
        if (response.success && response.data) {
          this.currentUser$.next(response.data);
          this.persistUser(response.data);
          this.logger.info('Profile updated');
        }
      }),
      catchError(error => {
        this.logger.error('Failed to update profile', error);
        return throwError(() => error);
      })
    );
  }

  public initialize(): void {
    this.loadAuthDataFromStorage();
  }

  private validateCredentials(credentials: AuthCredentials): boolean {
    return !!(credentials.email && credentials.password && credentials.email.includes('@'));
  }

  private validateRegisterCredentials(credentials: RegisterCredentials): boolean {
    return !!(
      credentials.email &&
      credentials.password &&
      credentials.firstName &&
      credentials.lastName &&
      credentials.email.includes('@') &&
      credentials.password.length >= 8
    );
  }

  private setAuthData(data: AuthResponse): void {
    localStorage.setItem(TOKEN_KEY, data.accessToken);
    if (data.refreshToken) {
      localStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken);
    }
    this.persistUser(data.user);
    this.currentUser$.next(data.user);
    this.isAuthenticated$.next(true);
  }

  private clearAuthData(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }

  private persistUser(user: User): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private loadAuthDataFromStorage(): void {
    try {
      const token = localStorage.getItem(TOKEN_KEY);
      const userStr = localStorage.getItem(USER_KEY);

      if (token && userStr) {
        const user = JSON.parse(userStr) as User;
        this.currentUser$.next(user);
        this.isAuthenticated$.next(true);
        this.logger.info('Auth data loaded from storage');
      }
    } catch (error) {
      this.logger.error('Failed to load auth data from storage', error);
      this.clearAuthData();
    }
  }
}
