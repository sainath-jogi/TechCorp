import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout, retry } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { ApiResponse } from '@models/index';
import { LoggerService } from './logger.service';

interface RequestOptions {
  params?: Record<string, any>;
  timeout?: number;
  retries?: number;
  headers?: Record<string, string>;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly logger = inject(LoggerService);
  private readonly apiBaseUrl = environment.apiBaseUrl;
  private readonly defaultTimeout = environment.requestTimeout;
  private readonly defaultRetries = environment.retryAttempts;

  public get<T>(endpoint: string, options?: RequestOptions): Observable<ApiResponse<T>> {
    const url = this.buildUrl(endpoint);
    const httpParams = this.buildHttpParams(options?.params);

    this.logger.debug(`GET ${endpoint}`, { params: options?.params });

    return this.http.get<ApiResponse<T>>(url, { params: httpParams }).pipe(
      timeout(options?.timeout || this.defaultTimeout),
      retry({
        count: options?.retries !== undefined ? options.retries : this.defaultRetries,
        delay: environment.retryDelay
      })
    );
  }

  public post<T>(
    endpoint: string,
    payload: any,
    options?: RequestOptions
  ): Observable<ApiResponse<T>> {
    const url = this.buildUrl(endpoint);

    this.logger.debug(`POST ${endpoint}`, { payload });

    return this.http.post<ApiResponse<T>>(url, payload).pipe(
      timeout(options?.timeout || this.defaultTimeout),
      retry({
        count: options?.retries !== undefined ? options.retries : this.defaultRetries,
        delay: environment.retryDelay
      })
    );
  }

  public put<T>(
    endpoint: string,
    payload: any,
    options?: RequestOptions
  ): Observable<ApiResponse<T>> {
    const url = this.buildUrl(endpoint);

    this.logger.debug(`PUT ${endpoint}`, { payload });

    return this.http.put<ApiResponse<T>>(url, payload).pipe(
      timeout(options?.timeout || this.defaultTimeout),
      retry({
        count: options?.retries !== undefined ? options.retries : this.defaultRetries,
        delay: environment.retryDelay
      })
    );
  }

  public patch<T>(
    endpoint: string,
    payload: any,
    options?: RequestOptions
  ): Observable<ApiResponse<T>> {
    const url = this.buildUrl(endpoint);

    this.logger.debug(`PATCH ${endpoint}`, { payload });

    return this.http.patch<ApiResponse<T>>(url, payload).pipe(
      timeout(options?.timeout || this.defaultTimeout),
      retry({
        count: options?.retries !== undefined ? options.retries : this.defaultRetries,
        delay: environment.retryDelay
      })
    );
  }

  public delete<T>(endpoint: string, options?: RequestOptions): Observable<ApiResponse<T>> {
    const url = this.buildUrl(endpoint);

    this.logger.debug(`DELETE ${endpoint}`);

    return this.http.delete<ApiResponse<T>>(url).pipe(
      timeout(options?.timeout || this.defaultTimeout),
      retry({
        count: options?.retries !== undefined ? options.retries : this.defaultRetries,
        delay: environment.retryDelay
      })
    );
  }

  private buildUrl(endpoint: string): string {
    // Remove leading slash if present
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    return `${this.apiBaseUrl}/${cleanEndpoint}`;
  }

  private buildHttpParams(params?: Record<string, any>): HttpParams {
    let httpParams = new HttpParams();

    if (!params) {
      return httpParams;
    }

    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        if (Array.isArray(value)) {
          value.forEach(v => {
            httpParams = httpParams.append(key, v.toString());
          });
        } else {
          httpParams = httpParams.set(key, value.toString());
        }
      }
    });

    return httpParams;
  }
}
