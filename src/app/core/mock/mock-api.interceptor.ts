/**
 * Mock API Interceptor
 * Intercepts HTTP requests and returns mock responses for development
 * @enterprise-grade Mock API with realistic delays and error simulation
 */

import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import {
  MOCK_USERS,
  MOCK_PRODUCTS,
  MOCK_CATEGORIES,
  MOCK_ORDERS,
  MOCK_CART_ITEMS,
  MOCK_ADDRESSES,
  MOCK_DASHBOARD_STATS,
  createApiResponse,
  createPaginatedResponse
} from './mock-data';

// Enable/disable mock API
export const MOCK_API_ENABLED = true;

/**
 * Mock API Interceptor Function
 * Intercepts requests to /api/* and returns mock responses
 */
export const mockApiInterceptor: HttpInterceptorFn = (req, next) => {
  // Only intercept if mock API is enabled
  if (!MOCK_API_ENABLED) {
    return next(req);
  }

  // Only intercept API requests
  if (!req.url.includes('/api/')) {
    return next(req);
  }

  const url = req.url;
  const method = req.method;

  // Log for debugging (can be removed in production)
  console.log(`[Mock API] ${method} ${url}`);

  // Route matching and response generation
  const response = handleRequest(url, method, req.body);

  if (response.error) {
    return of(new HttpResponse({
      status: response.status || 500,
      body: { message: response.message }
    }));
  }

  return of(new HttpResponse({
    status: 200,
    body: response.body
  }));
};

interface MockResponse {
  body?: any;
  error?: boolean;
  status?: number;
  statusText?: string;
  message?: string;
}

function handleRequest(url: string, method: string, body: any): MockResponse {
  // ============================================================================
  // AUTH ENDPOINTS
  // ============================================================================
  
  // POST /api/auth/login
  if (url.includes('/api/auth/login') && method === 'POST') {
    const { email, password } = body;
    const user = MOCK_USERS.find(u => u.email === email);
    
    if (user && password === 'demo123') {
      return {
        body: createApiResponse({
          user: {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            avatar: user.avatar
          },
          accessToken: 'mock-jwt-token-' + Date.now(),
          refreshToken: 'mock-refresh-token-' + Date.now(),
          expiresIn: 3600
        }, 'Login successful')
      };
    }
    
    return {
      error: true,
      status: 401,
      statusText: 'Unauthorized',
      message: 'Invalid email or password'
    };
  }

  // POST /api/auth/register
  if (url.includes('/api/auth/register') && method === 'POST') {
    const { email, firstName, lastName, role } = body;
    
    if (MOCK_USERS.find(u => u.email === email)) {
      return {
        error: true,
        status: 409,
        statusText: 'Conflict',
        message: 'Email already registered'
      };
    }

    const newUser = {
      id: 'usr-' + Date.now(),
      email,
      firstName,
      lastName,
      role: role || 'customer',
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${firstName}`,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    return {
      body: createApiResponse({
        user: newUser,
        accessToken: 'mock-jwt-token-' + Date.now(),
        refreshToken: 'mock-refresh-token-' + Date.now(),
        expiresIn: 3600
      }, 'Registration successful')
    };
  }

  // POST /api/auth/logout
  if (url.includes('/api/auth/logout') && method === 'POST') {
    return {
      body: createApiResponse(null, 'Logout successful')
    };
  }

  // GET /api/auth/me
  if (url.includes('/api/auth/me') && method === 'GET') {
    return {
      body: createApiResponse(MOCK_USERS[1]) // Return customer user
    };
  }

  // POST /api/auth/refresh
  if (url.includes('/api/auth/refresh') && method === 'POST') {
    return {
      body: createApiResponse({
        accessToken: 'mock-jwt-token-refreshed-' + Date.now(),
        expiresIn: 3600
      })
    };
  }

  // ============================================================================
  // PRODUCTS ENDPOINTS
  // ============================================================================

  // GET /api/products
  if (url.match(/\/api\/products(\?|$)/) && method === 'GET') {
    const urlParams = new URL(url, 'http://localhost').searchParams;
    const page = parseInt(urlParams.get('page') || '1');
    const limit = parseInt(urlParams.get('limit') || '10');
    const category = urlParams.get('category');
    const search = urlParams.get('search');
    const featured = urlParams.get('featured');

    let filteredProducts = [...MOCK_PRODUCTS];

    if (category) {
      filteredProducts = filteredProducts.filter(p => 
        p.categoryId === category || p.category?.toLowerCase() === category.toLowerCase()
      );
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filteredProducts = filteredProducts.filter(p =>
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower)
      );
    }

    if (featured === 'true') {
      filteredProducts = filteredProducts.filter(p => p.isFeatured);
    }

    return {
      body: createPaginatedResponse(filteredProducts, page, limit)
    };
  }

  // GET /api/products/:id
  const productMatch = url.match(/\/api\/products\/(prod-[a-z0-9-]+)$/);
  if (productMatch && method === 'GET') {
    const product = MOCK_PRODUCTS.find(p => p.id === productMatch[1]);
    if (product) {
      return { body: createApiResponse(product) };
    }
    return {
      error: true,
      status: 404,
      statusText: 'Not Found',
      message: 'Product not found'
    };
  }

  // GET /api/products/slug/:slug
  const productSlugMatch = url.match(/\/api\/products\/slug\/([a-z0-9-]+)$/);
  if (productSlugMatch && method === 'GET') {
    const product = MOCK_PRODUCTS.find(p => p.slug === productSlugMatch[1]);
    if (product) {
      return { body: createApiResponse(product) };
    }
    return {
      error: true,
      status: 404,
      statusText: 'Not Found',
      message: 'Product not found'
    };
  }

  // ============================================================================
  // CATEGORIES ENDPOINTS
  // ============================================================================

  // GET /api/categories
  if (url.includes('/api/categories') && method === 'GET') {
    return {
      body: createApiResponse(MOCK_CATEGORIES)
    };
  }

  // ============================================================================
  // CART ENDPOINTS
  // ============================================================================

  // GET /api/cart
  if (url.includes('/api/cart') && method === 'GET') {
    const cartTotal = MOCK_CART_ITEMS.reduce((sum, item) => 
      sum + (item.product.price * item.quantity), 0
    );
    
    return {
      body: createApiResponse({
        items: MOCK_CART_ITEMS,
        itemCount: MOCK_CART_ITEMS.reduce((sum, item) => sum + item.quantity, 0),
        subtotal: cartTotal,
        tax: cartTotal * 0.20,
        shipping: cartTotal > 50 ? 0 : 5.99,
        total: cartTotal + (cartTotal * 0.20) + (cartTotal > 50 ? 0 : 5.99)
      })
    };
  }

  // POST /api/cart/items
  if (url.includes('/api/cart/items') && method === 'POST') {
    return {
      body: createApiResponse({
        message: 'Item added to cart',
        cartItemCount: MOCK_CART_ITEMS.length + 1
      })
    };
  }

  // PUT /api/cart/items/:id
  if (url.match(/\/api\/cart\/items\//) && method === 'PUT') {
    return {
      body: createApiResponse({
        message: 'Cart item updated'
      })
    };
  }

  // DELETE /api/cart/items/:id
  if (url.match(/\/api\/cart\/items\//) && method === 'DELETE') {
    return {
      body: createApiResponse({
        message: 'Item removed from cart'
      })
    };
  }

  // ============================================================================
  // ORDERS ENDPOINTS
  // ============================================================================

  // GET /api/orders
  if (url.match(/\/api\/orders(\?|$)/) && method === 'GET') {
    const urlParams = new URL(url, 'http://localhost').searchParams;
    const page = parseInt(urlParams.get('page') || '1');
    const limit = parseInt(urlParams.get('limit') || '10');
    const status = urlParams.get('status');

    let filteredOrders = [...MOCK_ORDERS];

    if (status) {
      filteredOrders = filteredOrders.filter(o => o.status === status);
    }

    return {
      body: createPaginatedResponse(filteredOrders, page, limit)
    };
  }

  // GET /api/orders/:id
  const orderMatch = url.match(/\/api\/orders\/(ord-[a-z0-9-]+)$/);
  if (orderMatch && method === 'GET') {
    const order = MOCK_ORDERS.find(o => o.id === orderMatch[1]);
    if (order) {
      return { body: createApiResponse(order) };
    }
    return {
      error: true,
      status: 404,
      statusText: 'Not Found',
      message: 'Order not found'
    };
  }

  // POST /api/orders
  if (url.includes('/api/orders') && method === 'POST') {
    const newOrder = {
      id: 'ord-' + Date.now(),
      orderNumber: 'UKS-2026-' + String(MOCK_ORDERS.length + 1).padStart(5, '0'),
      status: 'pending',
      paymentStatus: 'pending',
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    return {
      body: createApiResponse(newOrder, 'Order placed successfully')
    };
  }

  // ============================================================================
  // CHECKOUT ENDPOINTS
  // ============================================================================

  // POST /api/checkout/validate
  if (url.includes('/api/checkout/validate') && method === 'POST') {
    return {
      body: createApiResponse({
        valid: true,
        message: 'Cart is valid for checkout'
      })
    };
  }

  // POST /api/checkout/process
  if (url.includes('/api/checkout/process') && method === 'POST') {
    return {
      body: createApiResponse({
        orderId: 'ord-' + Date.now(),
        orderNumber: 'UKS-2026-' + String(Date.now()).slice(-5),
        paymentIntentId: 'pi_' + Date.now(),
        status: 'processing'
      }, 'Payment processed successfully')
    };
  }

  // ============================================================================
  // ADDRESSES ENDPOINTS
  // ============================================================================

  // GET /api/addresses
  if (url.includes('/api/addresses') && method === 'GET') {
    return {
      body: createApiResponse(MOCK_ADDRESSES)
    };
  }

  // POST /api/addresses
  if (url.includes('/api/addresses') && method === 'POST') {
    const newAddress = {
      id: 'addr-' + Date.now(),
      ...body,
      createdAt: new Date()
    };
    return {
      body: createApiResponse(newAddress, 'Address added successfully')
    };
  }

  // ============================================================================
  // DASHBOARD ENDPOINTS
  // ============================================================================

  // GET /api/dashboard/stats
  if (url.includes('/api/dashboard/stats') && method === 'GET') {
    return {
      body: createApiResponse(MOCK_DASHBOARD_STATS)
    };
  }

  // GET /api/dashboard/recent-orders
  if (url.includes('/api/dashboard/recent-orders') && method === 'GET') {
    return {
      body: createApiResponse(MOCK_ORDERS.slice(0, 5))
    };
  }

  // ============================================================================
  // USER ENDPOINTS
  // ============================================================================

  // GET /api/users/profile
  if (url.includes('/api/users/profile') && method === 'GET') {
    return {
      body: createApiResponse(MOCK_USERS[1])
    };
  }

  // PUT /api/users/profile
  if (url.includes('/api/users/profile') && method === 'PUT') {
    return {
      body: createApiResponse({
        ...MOCK_USERS[1],
        ...body,
        updatedAt: new Date()
      }, 'Profile updated successfully')
    };
  }

  // ============================================================================
  // DEFAULT - Pass through to real API
  // ============================================================================
  console.warn(`[Mock API] Unhandled request: ${method} ${url}`);
  
  return {
    error: true,
    status: 404,
    statusText: 'Not Found',
    message: `Mock endpoint not implemented: ${method} ${url}`
  };
}
