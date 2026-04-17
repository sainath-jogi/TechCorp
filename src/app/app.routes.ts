import { Routes } from '@angular/router';
import { authGuard } from '@guards/auth.guard';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('@features/auth/pages/login/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () =>
          import('@features/auth/pages/register/register.component').then(m => m.RegisterComponent)
      }
    ]
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@features/dashboard/pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'products',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@features/products/pages/product-list/product-list.component').then(
            m => m.ProductListComponent
          )
      },
      {
        path: ':id',
        loadComponent: () =>
          import('@features/products/pages/product-detail/product-detail.component').then(
            m => m.ProductDetailComponent
          )
      }
    ]
  },
  {
    path: 'cart',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@features/cart/pages/cart/cart.component').then(m => m.CartComponent)
  },
  {
    path: 'checkout',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@features/checkout/pages/checkout/checkout.component').then(m => m.CheckoutComponent)
  },
  {
    path: 'orders',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@features/orders/pages/orders-list/orders-list.component').then(
            m => m.OrdersListComponent
          )
      },
      {
        path: ':id',
        loadComponent: () =>
          import('@features/orders/pages/order-detail/order-detail.component').then(
            m => m.OrderDetailComponent
          )
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
