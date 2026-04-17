import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '@services/auth.service';
import { User } from '@models/index';

interface DashboardStats {
  totalRevenue: number;
  totalOrders: number;
  totalCustomers: number;
  totalProducts: number;
  revenueGrowth: number;
  ordersGrowth: number;
  customersGrowth: number;
  conversionRate: number;
  recentSales: { date: string; amount: number }[];
  topProducts: { name: string; sales: number; revenue: number }[];
  ordersByStatus: {
    pending: number;
    processing: number;
    shipped: number;
    delivered: number;
    cancelled: number;
  };
  salesByCategory: { category: string; percentage: number; revenue: number }[];
}

interface RecentOrder {
  id: string;
  orderNumber: string;
  status: string;
  total: number;
  createdAt: Date;
  items: { productName: string }[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, CurrencyPipe, DatePipe, DecimalPipe],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private readonly http = inject(HttpClient);
  private readonly authService = inject(AuthService);
  private readonly destroy$ = new Subject<void>();

  currentUser: User | null = null;
  stats: DashboardStats | null = null;
  recentOrders: RecentOrder[] = [];
  isLoading = true;
  currentTime = new Date();

  readonly quickLinks = [
    { icon: 'bi-box-seam', label: 'Products', route: '/products', color: 'primary' },
    { icon: 'bi-cart3', label: 'Cart', route: '/cart', color: 'success' },
    { icon: 'bi-receipt', label: 'Orders', route: '/orders', color: 'info' },
    { icon: 'bi-person-gear', label: 'Profile', route: '/profile', color: 'warning' }
  ];

  ngOnInit(): void {
    this.loadUserData();
    this.loadDashboardData();
    this.startClock();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadUserData(): void {
    this.authService.getCurrentUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => this.currentUser = user);
  }

  private loadDashboardData(): void {
    this.isLoading = true;

    // Load dashboard stats
    this.http.get<{ data: DashboardStats }>('/api/dashboard/stats')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.stats = response.data;
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
        }
      });

    // Load recent orders
    this.http.get<{ data: RecentOrder[] }>('/api/dashboard/recent-orders')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.recentOrders = response.data;
        }
      });
  }

  private startClock(): void {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  getGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  }

  getStatusBadgeClass(status: string): string {
    const classes: Record<string, string> = {
      pending: 'bg-warning text-dark',
      processing: 'bg-info',
      shipped: 'bg-primary',
      delivered: 'bg-success',
      cancelled: 'bg-danger'
    };
    return classes[status] || 'bg-secondary';
  }

  getMaxSalesAmount(): number {
    if (!this.stats?.recentSales) return 1;
    return Math.max(...this.stats.recentSales.map(s => s.amount));
  }

  getChartBarHeight(amount: number): number {
    const max = this.getMaxSalesAmount();
    return (amount / max) * 100;
  }

  formatShortDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', { weekday: 'short' });
  }
}
