import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subject, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs';
import { Product, Category } from '@models/index';
import { NotificationService } from '@services/notification.service';

interface ProductsResponse {
  data: Product[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  private readonly http = inject(HttpClient);
  private readonly notification = inject(NotificationService);
  private readonly destroy$ = new Subject<void>();
  private readonly searchSubject$ = new Subject<string>();

  products: Product[] = [];
  categories: Category[] = [];
  isLoading = true;
  
  // Pagination
  currentPage = 1;
  itemsPerPage = 8;
  totalItems = 0;
  totalPages = 0;

  // Filters
  searchTerm = '';
  selectedCategory = '';
  sortBy = 'newest';
  priceRange = { min: 0, max: 1000 };
  showFeaturedOnly = false;
  viewMode: 'grid' | 'list' = 'grid';

  readonly sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
    { value: 'name', label: 'Name A-Z' }
  ];

  ngOnInit(): void {
    this.loadCategories();
    this.setupSearchDebounce();
    this.loadProducts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setupSearchDebounce(): void {
    this.searchSubject$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.currentPage = 1;
        this.loadProducts();
      });
  }

  private loadCategories(): void {
    this.http.get<{ data: Category[] }>('/api/categories')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.categories = response.data;
        }
      });
  }

  loadProducts(): void {
    this.isLoading = true;
    
    let url = `/api/products?page=${this.currentPage}&limit=${this.itemsPerPage}`;
    
    if (this.searchTerm) {
      url += `&search=${encodeURIComponent(this.searchTerm)}`;
    }
    if (this.selectedCategory) {
      url += `&category=${this.selectedCategory}`;
    }
    if (this.showFeaturedOnly) {
      url += `&featured=true`;
    }

    this.http.get<ProductsResponse>(url)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          let products = response.data;
          
          // Client-side sorting (in real app, this would be server-side)
          products = this.sortProducts(products);
          
          this.products = products;
          this.totalItems = response.meta.total;
          this.totalPages = response.meta.totalPages;
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
          this.notification.error('Error', 'Failed to load products');
        }
      });
  }

  private sortProducts(products: Product[]): Product[] {
    switch (this.sortBy) {
      case 'price-asc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...products].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...products].sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case 'name':
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return products;
    }
  }

  onSearchChange(): void {
    this.searchSubject$.next(this.searchTerm);
  }

  onCategoryChange(): void {
    this.currentPage = 1;
    this.loadProducts();
  }

  onSortChange(): void {
    this.loadProducts();
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadProducts();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  toggleViewMode(): void {
    this.viewMode = this.viewMode === 'grid' ? 'list' : 'grid';
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = '';
    this.sortBy = 'newest';
    this.showFeaturedOnly = false;
    this.currentPage = 1;
    this.loadProducts();
  }

  addToCart(product: Product, event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    this.http.post('/api/cart/items', { 
      productId: product.id, 
      quantity: 1 
    })
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: () => {
        this.notification.success('Added to Cart', `${product.name} added to your cart`);
      },
      error: () => {
        this.notification.error('Error', 'Failed to add item to cart');
      }
    });
  }

  getDiscountPercentage(product: Product): number {
    if (!product.compareAtPrice || product.compareAtPrice <= product.price) {
      return 0;
    }
    return Math.round((1 - product.price / product.compareAtPrice) * 100);
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  }

  trackByProductId(_index: number, product: Product): string {
    return product.id;
  }
}
