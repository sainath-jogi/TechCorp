import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '@services/auth.service';
import { User } from '@models/index';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly destroy$ = new Subject<void>();

  currentUser: User | null = null;
  isAuthenticated = false;
  isMenuOpen = false;
  cartItemCount = 2; // Mock cart count

  readonly navLinks = [
    { path: '/dashboard', label: 'Dashboard', icon: 'bi-speedometer2' },
    { path: '/products', label: 'Products', icon: 'bi-box-seam' },
    { path: '/orders', label: 'Orders', icon: 'bi-receipt' }
  ];

  ngOnInit(): void {
    this.authService.getCurrentUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => this.currentUser = user);

    this.authService.isAuthenticated()
      .pipe(takeUntil(this.destroy$))
      .subscribe(isAuth => this.isAuthenticated = isAuth);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  getUserInitials(): string {
    if (!this.currentUser) return 'U';
    const first = this.currentUser.firstName?.charAt(0) || '';
    const last = this.currentUser.lastName?.charAt(0) || '';
    return (first + last).toUpperCase() || 'U';
  }

  getRoleBadgeClass(): string {
    const role = this.currentUser?.role || 'customer';
    const classes: Record<string, string> = {
      admin: 'bg-danger',
      developer: 'bg-info',
      customer: 'bg-success',
      qa: 'bg-warning',
      devops: 'bg-primary'
    };
    return classes[role] || 'bg-secondary';
  }
}
