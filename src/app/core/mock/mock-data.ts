/**
 * Mock Data for TechCorp Application
 * Contains all mock data for development and testing
 * Uses local placeholder images for instant loading
 */

import { Product, Category, User, Order, CartItem, Address } from '../models';

// ============================================================================
// PLACEHOLDER IMAGE GENERATOR (Instant Loading - No External APIs)
// ============================================================================
const createPlaceholder = (text: string, bgColor: string, textColor: string = 'white'): string => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
    <rect fill="${bgColor}" width="400" height="400"/>
    <text fill="${textColor}" font-family="Arial,sans-serif" font-size="24" font-weight="bold" 
          text-anchor="middle" x="200" y="200" dy=".3em">${text}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

// Product category placeholders
const PLACEHOLDERS = {
  electronics: createPlaceholder('Electronics', '#3498db'),
  fashion: createPlaceholder('Fashion', '#9b59b6'),
  home: createPlaceholder('Home & Garden', '#27ae60'),
  sports: createPlaceholder('Sports', '#e74c3c'),
  books: createPlaceholder('Books', '#f39c12'),
  beauty: createPlaceholder('Beauty', '#e91e63'),
  avatar: createPlaceholder('User', '#34495e')
};

// ============================================================================
// MOCK USERS
// ============================================================================
export const MOCK_USERS: User[] = [
  {
    id: 'usr-001',
    email: 'admin@techcorp.com',
    firstName: 'James',
    lastName: 'Wilson',
    role: 'admin',
    avatar: PLACEHOLDERS.avatar,
    phone: '+44 20 7946 0958',
    isActive: true,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2026-04-01')
  },
  {
    id: 'usr-002',
    email: 'user@techcorp.com',
    firstName: 'Emma',
    lastName: 'Thompson',
    role: 'customer',
    avatar: PLACEHOLDERS.avatar,
    phone: '+44 20 7946 1234',
    isActive: true,
    createdAt: new Date('2024-03-20'),
    updatedAt: new Date('2026-04-10')
  },
  {
    id: 'usr-003',
    email: 'developer@techcorp.com',
    firstName: 'Oliver',
    lastName: 'Brown',
    role: 'developer',
    avatar: PLACEHOLDERS.avatar,
    phone: '+44 20 7946 5678',
    isActive: true,
    createdAt: new Date('2024-06-10'),
    updatedAt: new Date('2026-04-15')
  }
];

// ============================================================================
// MOCK CATEGORIES
// ============================================================================
export const MOCK_CATEGORIES: Category[] = [
  { id: 'cat-001', name: 'Electronics', slug: 'electronics', description: 'Latest gadgets and electronics', icon: 'bi-cpu', productCount: 45 },
  { id: 'cat-002', name: 'Fashion', slug: 'fashion', description: 'Trendy clothing and accessories', icon: 'bi-handbag', productCount: 120 },
  { id: 'cat-003', name: 'Home & Garden', slug: 'home-garden', description: 'Home decor and garden essentials', icon: 'bi-house', productCount: 85 },
  { id: 'cat-004', name: 'Sports', slug: 'sports', description: 'Sports equipment and activewear', icon: 'bi-trophy', productCount: 60 },
  { id: 'cat-005', name: 'Books', slug: 'books', description: 'Books, eBooks and audiobooks', icon: 'bi-book', productCount: 200 },
  { id: 'cat-006', name: 'Beauty', slug: 'beauty', description: 'Beauty and personal care products', icon: 'bi-stars', productCount: 95 }
];

// ============================================================================
// MOCK PRODUCTS (Using instant-loading placeholders)
// ============================================================================
export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-001',
    name: 'Premium Wireless Headphones',
    slug: 'premium-wireless-headphones',
    description: 'Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation, 30-hour battery life, and premium comfort ear cushions.',
    shortDescription: 'Premium ANC headphones with 30hr battery',
    sku: 'TC-ELEC-001',
    price: 249.99,
    compareAtPrice: 299.99,
    currency: 'GBP',
    images: [PLACEHOLDERS.electronics, PLACEHOLDERS.electronics],
    thumbnail: PLACEHOLDERS.electronics,
    categoryId: 'cat-001',
    category: 'Electronics',
    stock: 150,
    isActive: true,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 245,
    tags: ['wireless', 'bluetooth', 'noise-cancellation', 'premium'],
    createdAt: new Date('2025-08-15'),
    updatedAt: new Date('2026-04-01')
  },
  {
    id: 'prod-002',
    name: 'Smart Fitness Watch Pro',
    slug: 'smart-fitness-watch-pro',
    description: 'Track your fitness journey with our advanced Smart Fitness Watch Pro. Features include heart rate monitoring, GPS tracking, sleep analysis, and 100+ workout modes.',
    shortDescription: 'Advanced fitness tracking smartwatch',
    sku: 'TC-ELEC-002',
    price: 179.99,
    compareAtPrice: 219.99,
    currency: 'GBP',
    images: [PLACEHOLDERS.electronics, PLACEHOLDERS.electronics],
    thumbnail: PLACEHOLDERS.electronics,
    categoryId: 'cat-001',
    category: 'Electronics',
    stock: 200,
    isActive: true,
    isFeatured: true,
    rating: 4.6,
    reviewCount: 189,
    tags: ['smartwatch', 'fitness', 'gps', 'health'],
    createdAt: new Date('2025-09-20'),
    updatedAt: new Date('2026-04-05')
  },
  {
    id: 'prod-003',
    name: 'Classic Oxford Shirt - Navy',
    slug: 'classic-oxford-shirt-navy',
    description: 'Timeless elegance meets modern comfort. Our Classic Oxford Shirt is crafted from 100% premium cotton with a slim fit design.',
    shortDescription: '100% cotton premium oxford shirt',
    sku: 'TC-FASH-001',
    price: 59.99,
    compareAtPrice: 79.99,
    currency: 'GBP',
    images: [PLACEHOLDERS.fashion, PLACEHOLDERS.fashion],
    thumbnail: PLACEHOLDERS.fashion,
    categoryId: 'cat-002',
    category: 'Fashion',
    stock: 500,
    isActive: true,
    isFeatured: false,
    rating: 4.5,
    reviewCount: 312,
    tags: ['shirt', 'oxford', 'formal', 'cotton'],
    createdAt: new Date('2025-07-10'),
    updatedAt: new Date('2026-03-28')
  },
  {
    id: 'prod-004',
    name: 'Leather Weekend Bag',
    slug: 'leather-weekend-bag',
    description: 'Crafted from genuine full-grain leather, this weekend bag combines style with functionality. Features multiple compartments and adjustable shoulder strap.',
    shortDescription: 'Full-grain leather travel bag',
    sku: 'TC-FASH-002',
    price: 189.99,
    compareAtPrice: 249.99,
    currency: 'GBP',
    images: [PLACEHOLDERS.fashion, PLACEHOLDERS.fashion],
    thumbnail: PLACEHOLDERS.fashion,
    categoryId: 'cat-002',
    category: 'Fashion',
    stock: 75,
    isActive: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 156,
    tags: ['leather', 'bag', 'travel', 'premium'],
    createdAt: new Date('2025-06-25'),
    updatedAt: new Date('2026-04-10')
  },
  {
    id: 'prod-005',
    name: 'Modern Floor Lamp',
    slug: 'modern-floor-lamp',
    description: 'Illuminate your space with our Modern Floor Lamp featuring adjustable brightness, warm LED technology, and a sleek minimalist design.',
    shortDescription: 'Adjustable LED floor lamp',
    sku: 'TC-HOME-001',
    price: 129.99,
    compareAtPrice: 159.99,
    currency: 'GBP',
    images: [PLACEHOLDERS.home, PLACEHOLDERS.home],
    thumbnail: PLACEHOLDERS.home,
    categoryId: 'cat-003',
    category: 'Home & Garden',
    stock: 120,
    isActive: true,
    isFeatured: false,
    rating: 4.4,
    reviewCount: 98,
    tags: ['lamp', 'lighting', 'modern', 'led'],
    createdAt: new Date('2025-10-05'),
    updatedAt: new Date('2026-04-08')
  },
  {
    id: 'prod-006',
    name: 'Professional Running Shoes',
    slug: 'professional-running-shoes',
    description: 'Engineered for performance with responsive cushioning, breathable mesh upper, and excellent traction. Ideal for training and marathon running.',
    shortDescription: 'High-performance running shoes',
    sku: 'TC-SPRT-001',
    price: 139.99,
    compareAtPrice: 169.99,
    currency: 'GBP',
    images: [PLACEHOLDERS.sports, PLACEHOLDERS.sports],
    thumbnail: PLACEHOLDERS.sports,
    categoryId: 'cat-004',
    category: 'Sports',
    stock: 300,
    isActive: true,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 423,
    tags: ['running', 'shoes', 'sports', 'fitness'],
    createdAt: new Date('2025-11-15'),
    updatedAt: new Date('2026-04-12')
  },
  {
    id: 'prod-007',
    name: 'Yoga Mat Premium',
    slug: 'yoga-mat-premium',
    description: 'Our Premium Yoga Mat offers superior grip, optimal cushioning, and eco-friendly materials. Features alignment markings and carrying strap.',
    shortDescription: 'Eco-friendly premium yoga mat',
    sku: 'TC-SPRT-002',
    price: 49.99,
    compareAtPrice: 64.99,
    currency: 'GBP',
    images: [PLACEHOLDERS.sports, PLACEHOLDERS.sports],
    thumbnail: PLACEHOLDERS.sports,
    categoryId: 'cat-004',
    category: 'Sports',
    stock: 250,
    isActive: true,
    isFeatured: false,
    rating: 4.6,
    reviewCount: 178,
    tags: ['yoga', 'mat', 'fitness', 'eco-friendly'],
    createdAt: new Date('2025-09-01'),
    updatedAt: new Date('2026-04-05')
  },
  {
    id: 'prod-008',
    name: 'Bestseller Book Bundle',
    slug: 'bestseller-book-bundle',
    description: 'A curated collection of 5 bestselling fiction novels. Perfect gift for book lovers. Includes hardcover editions with premium binding.',
    shortDescription: '5 bestselling fiction novels',
    sku: 'TC-BOOK-001',
    price: 79.99,
    compareAtPrice: 99.99,
    currency: 'GBP',
    images: [PLACEHOLDERS.books, PLACEHOLDERS.books],
    thumbnail: PLACEHOLDERS.books,
    categoryId: 'cat-005',
    category: 'Books',
    stock: 100,
    isActive: true,
    isFeatured: false,
    rating: 4.8,
    reviewCount: 89,
    tags: ['books', 'fiction', 'bestseller', 'gift'],
    createdAt: new Date('2025-12-01'),
    updatedAt: new Date('2026-04-02')
  },
  {
    id: 'prod-009',
    name: 'Luxury Skincare Set',
    slug: 'luxury-skincare-set',
    description: 'Complete skincare routine in one box. Includes cleanser, toner, serum, moisturizer, and eye cream. Made with natural ingredients.',
    shortDescription: 'Complete luxury skincare routine',
    sku: 'TC-BEAU-001',
    price: 149.99,
    compareAtPrice: 199.99,
    currency: 'GBP',
    images: [PLACEHOLDERS.beauty, PLACEHOLDERS.beauty],
    thumbnail: PLACEHOLDERS.beauty,
    categoryId: 'cat-006',
    category: 'Beauty',
    stock: 80,
    isActive: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 267,
    tags: ['skincare', 'beauty', 'luxury', 'natural'],
    createdAt: new Date('2025-10-20'),
    updatedAt: new Date('2026-04-14')
  },
  {
    id: 'prod-010',
    name: 'Wireless Earbuds Pro',
    slug: 'wireless-earbuds-pro',
    description: 'Compact wireless earbuds with premium sound quality, active noise cancellation, and 24-hour total battery life with charging case.',
    shortDescription: 'Premium wireless earbuds with ANC',
    sku: 'TC-ELEC-003',
    price: 129.99,
    compareAtPrice: 159.99,
    currency: 'GBP',
    images: [PLACEHOLDERS.electronics, PLACEHOLDERS.electronics],
    thumbnail: PLACEHOLDERS.electronics,
    categoryId: 'cat-001',
    category: 'Electronics',
    stock: 180,
    isActive: true,
    isFeatured: false,
    rating: 4.5,
    reviewCount: 334,
    tags: ['earbuds', 'wireless', 'bluetooth', 'anc'],
    createdAt: new Date('2025-11-10'),
    updatedAt: new Date('2026-04-11')
  },
  {
    id: 'prod-011',
    name: 'Smart Home Hub',
    slug: 'smart-home-hub',
    description: 'Control all your smart devices from one central hub. Compatible with Alexa, Google Home, and Apple HomeKit.',
    shortDescription: 'Universal smart home controller',
    sku: 'TC-ELEC-004',
    price: 99.99,
    compareAtPrice: 129.99,
    currency: 'GBP',
    images: [PLACEHOLDERS.electronics, PLACEHOLDERS.electronics],
    thumbnail: PLACEHOLDERS.electronics,
    categoryId: 'cat-001',
    category: 'Electronics',
    stock: 95,
    isActive: true,
    isFeatured: false,
    rating: 4.3,
    reviewCount: 156,
    tags: ['smart-home', 'iot', 'automation', 'hub'],
    createdAt: new Date('2025-08-25'),
    updatedAt: new Date('2026-04-06')
  },
  {
    id: 'prod-012',
    name: 'Designer Sunglasses',
    slug: 'designer-sunglasses',
    description: 'Premium polarized sunglasses with UV400 protection. Lightweight titanium frame with scratch-resistant lenses.',
    shortDescription: 'Premium polarized sunglasses',
    sku: 'TC-FASH-003',
    price: 199.99,
    compareAtPrice: 249.99,
    currency: 'GBP',
    images: [PLACEHOLDERS.fashion, PLACEHOLDERS.fashion],
    thumbnail: PLACEHOLDERS.fashion,
    categoryId: 'cat-002',
    category: 'Fashion',
    stock: 60,
    isActive: true,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 203,
    tags: ['sunglasses', 'fashion', 'premium', 'uv-protection'],
    createdAt: new Date('2025-07-30'),
    updatedAt: new Date('2026-04-09')
  }
];

// ============================================================================
// MOCK ADDRESSES
// ============================================================================
export const MOCK_ADDRESSES: Address[] = [
  {
    id: 'addr-001',
    userId: 'usr-002',
    firstName: 'Emma',
    lastName: 'Thompson',
    addressLine1: '45 Baker Street',
    addressLine2: 'Flat 3B',
    city: 'London',
    county: 'Greater London',
    postcode: 'W1U 8EW',
    country: 'United Kingdom',
    phone: '+44 20 7946 1234',
    isDefault: true,
    type: 'shipping'
  },
  {
    id: 'addr-002',
    userId: 'usr-002',
    firstName: 'Emma',
    lastName: 'Thompson',
    addressLine1: '123 Oxford Street',
    city: 'London',
    county: 'Greater London',
    postcode: 'W1D 2LG',
    country: 'United Kingdom',
    phone: '+44 20 7946 1234',
    isDefault: false,
    type: 'billing'
  }
];

// ============================================================================
// MOCK ORDERS
// ============================================================================
export const MOCK_ORDERS: Order[] = [
  {
    id: 'ord-001',
    orderNumber: 'TC-2026-00001',
    userId: 'usr-002',
    status: 'delivered',
    paymentStatus: 'paid',
    subtotal: 429.98,
    tax: 86.00,
    shipping: 0,
    discount: 50.00,
    total: 465.98,
    currency: 'GBP',
    items: [
      {
        id: 'item-001',
        productId: 'prod-001',
        productName: 'Premium Wireless Headphones',
        productImage: PLACEHOLDERS.electronics,
        quantity: 1,
        unitPrice: 249.99,
        totalPrice: 249.99
      },
      {
        id: 'item-002',
        productId: 'prod-002',
        productName: 'Smart Fitness Watch Pro',
        productImage: PLACEHOLDERS.electronics,
        quantity: 1,
        unitPrice: 179.99,
        totalPrice: 179.99
      }
    ],
    shippingAddress: MOCK_ADDRESSES[0],
    billingAddress: MOCK_ADDRESSES[1],
    paymentMethod: 'card',
    notes: 'Please leave at the door if not home',
    createdAt: new Date('2026-03-15'),
    updatedAt: new Date('2026-03-20'),
    deliveredAt: new Date('2026-03-20')
  },
  {
    id: 'ord-002',
    orderNumber: 'TC-2026-00002',
    userId: 'usr-002',
    status: 'shipped',
    paymentStatus: 'paid',
    subtotal: 189.99,
    tax: 38.00,
    shipping: 5.99,
    discount: 0,
    total: 233.98,
    currency: 'GBP',
    items: [
      {
        id: 'item-003',
        productId: 'prod-004',
        productName: 'Leather Weekend Bag',
        productImage: PLACEHOLDERS.fashion,
        quantity: 1,
        unitPrice: 189.99,
        totalPrice: 189.99
      }
    ],
    shippingAddress: MOCK_ADDRESSES[0],
    billingAddress: MOCK_ADDRESSES[0],
    paymentMethod: 'paypal',
    trackingNumber: 'RM123456789GB',
    createdAt: new Date('2026-04-10'),
    updatedAt: new Date('2026-04-12'),
    shippedAt: new Date('2026-04-12')
  },
  {
    id: 'ord-003',
    orderNumber: 'TC-2026-00003',
    userId: 'usr-002',
    status: 'processing',
    paymentStatus: 'paid',
    subtotal: 149.99,
    tax: 30.00,
    shipping: 0,
    discount: 15.00,
    total: 164.99,
    currency: 'GBP',
    items: [
      {
        id: 'item-004',
        productId: 'prod-009',
        productName: 'Luxury Skincare Set',
        productImage: PLACEHOLDERS.beauty,
        quantity: 1,
        unitPrice: 149.99,
        totalPrice: 149.99
      }
    ],
    shippingAddress: MOCK_ADDRESSES[0],
    billingAddress: MOCK_ADDRESSES[0],
    paymentMethod: 'card',
    createdAt: new Date('2026-04-14'),
    updatedAt: new Date('2026-04-14')
  }
];

// ============================================================================
// MOCK CART ITEMS
// ============================================================================
export const MOCK_CART_ITEMS: CartItem[] = [
  {
    id: 'cart-001',
    productId: 'prod-006',
    product: MOCK_PRODUCTS.find(p => p.id === 'prod-006')!,
    quantity: 1
  },
  {
    id: 'cart-002',
    productId: 'prod-007',
    product: MOCK_PRODUCTS.find(p => p.id === 'prod-007')!,
    quantity: 2
  }
];

// ============================================================================
// DASHBOARD STATISTICS
// ============================================================================
export const MOCK_DASHBOARD_STATS = {
  totalRevenue: 125847.50,
  totalOrders: 1523,
  totalCustomers: 892,
  totalProducts: 156,
  revenueGrowth: 12.5,
  ordersGrowth: 8.3,
  customersGrowth: 15.2,
  conversionRate: 3.8,
  recentSales: [
    { date: '2026-04-10', amount: 4523.50 },
    { date: '2026-04-11', amount: 5102.00 },
    { date: '2026-04-12', amount: 3845.75 },
    { date: '2026-04-13', amount: 6234.25 },
    { date: '2026-04-14', amount: 4892.00 },
    { date: '2026-04-15', amount: 5567.50 },
    { date: '2026-04-16', amount: 3210.00 }
  ],
  topProducts: [
    { name: 'Premium Wireless Headphones', sales: 245, revenue: 61247.55 },
    { name: 'Smart Fitness Watch Pro', sales: 189, revenue: 34018.11 },
    { name: 'Professional Running Shoes', sales: 156, revenue: 21838.44 },
    { name: 'Luxury Skincare Set', sales: 134, revenue: 20098.66 },
    { name: 'Leather Weekend Bag', sales: 98, revenue: 18619.02 }
  ],
  ordersByStatus: {
    pending: 45,
    processing: 82,
    shipped: 156,
    delivered: 1198,
    cancelled: 42
  },
  salesByCategory: [
    { category: 'Electronics', percentage: 35, revenue: 44046.63 },
    { category: 'Fashion', percentage: 25, revenue: 31461.88 },
    { category: 'Beauty', percentage: 18, revenue: 22652.55 },
    { category: 'Sports', percentage: 12, revenue: 15101.70 },
    { category: 'Home & Garden', percentage: 7, revenue: 8809.33 },
    { category: 'Books', percentage: 3, revenue: 3775.43 }
  ]
};

// ============================================================================
// API RESPONSE HELPERS
// ============================================================================
export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  timestamp: string;
}

export function createApiResponse<T>(data: T, message?: string): ApiResponse<T> {
  return {
    success: true,
    data,
    message,
    timestamp: new Date().toISOString()
  };
}

export function createPaginatedResponse<T>(
  items: T[],
  page: number = 1,
  limit: number = 10
): PaginatedResponse<T> {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedItems = items.slice(startIndex, endIndex);
  
  return {
    data: paginatedItems,
    meta: {
      total: items.length,
      page,
      limit,
      totalPages: Math.ceil(items.length / limit)
    }
  };
}
