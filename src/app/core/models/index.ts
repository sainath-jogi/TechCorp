/**
 * Core Domain Models
 * @enterprise-grade TypeScript interfaces for the UKStore application
 */

// =============================================================================
// USER & AUTH MODELS
// =============================================================================

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  role: UserRole;
  isActive?: boolean;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export type UserRole = 'customer' | 'admin' | 'developer' | 'qa' | 'devops' | 'vendor';

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role?: UserRole;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
}

// =============================================================================
// PRODUCT MODELS
// =============================================================================

export interface Product {
  id: string;
  name: string;
  slug?: string;
  description: string;
  shortDescription?: string;
  sku?: string;
  category?: string;
  categoryId?: string;
  price: number;
  compareAtPrice?: number;
  currency?: string;
  images?: string[];
  thumbnail?: string;
  stock?: number;
  isActive?: boolean;
  isFeatured?: boolean;
  rating?: number;
  reviewCount?: number;
  tags?: string[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  productCount?: number;
  parentId?: string;
}

// =============================================================================
// CART MODELS
// =============================================================================

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  tax: number;
  shipping: number;
  discount?: number;
  total: number;
}

// =============================================================================
// ORDER MODELS
// =============================================================================

export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  subtotal: number;
  tax: number;
  shipping: number;
  discount?: number;
  total: number;
  currency?: string;
  items: OrderItem[];
  shippingAddress?: Address;
  billingAddress?: Address;
  paymentMethod?: PaymentMethod;
  trackingNumber?: string;
  notes?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  shippedAt?: Date | string;
  deliveredAt?: Date | string;
}

export interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  productImage?: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'returned';
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';
export type PaymentMethod = 'card' | 'paypal' | 'bank-transfer' | 'apple-pay' | 'google-pay';

// =============================================================================
// ADDRESS MODELS
// =============================================================================

export interface Address {
  id?: string;
  userId?: string;
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  county?: string;
  postcode: string;
  country: string;
  phone?: string;
  isDefault?: boolean;
  type?: 'shipping' | 'billing';
}

// =============================================================================
// REVIEW MODELS
// =============================================================================

export interface Review {
  id: string;
  productId: string;
  userId: string;
  user?: User;
  rating: number;
  title: string;
  comment: string;
  helpful?: number;
  verified?: boolean;
  createdAt?: Date | string;
}

// =============================================================================
// API RESPONSE MODELS
// =============================================================================

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  timestamp?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface FilterOptions {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  sort?: 'price-asc' | 'price-desc' | 'rating' | 'newest' | 'bestseller';
  search?: string;
  featured?: boolean;
}

// =============================================================================
// ERROR MODELS
// =============================================================================

export interface HttpErrorResponse {
  statusCode: number;
  message: string;
  error?: string;
  timestamp?: string;
}
