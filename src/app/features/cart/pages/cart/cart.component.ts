import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';
import { CartItem } from '@models/index';
import { NotificationService } from '@services/notification.service';

interface CartResponse {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly notification = inject(NotificationService);
  private readonly destroy$ = new Subject<void>();

  cartItems: CartItem[] = [];
  isLoading = true;
  isUpdating = false;

  // Cart totals
  subtotal = 0;
  tax = 0;
  shipping = 0;
  total = 0;
  itemCount = 0;

  // Promo code
  promoCode = '';
  promoDiscount = 0;
  promoApplied = false;
  promoError = '';

  readonly validPromoCodes: Record<string, number> = {
    'SAVE10': 10,
    'SAVE20': 20,
    'UKSTORE25': 25,
    'WELCOME': 15
  };

  ngOnInit(): void {
    this.loadCart();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadCart(): void {
    this.isLoading = true;

    this.http.get<{ data: CartResponse }>('/api/cart')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          const data = response.data;
          this.cartItems = data.items;
          this.subtotal = data.subtotal;
          this.tax = data.tax;
          this.shipping = data.shipping;
          this.total = data.total;
          this.itemCount = data.itemCount;
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
          this.notification.error('Error', 'Failed to load cart');
        }
      });
  }

  updateQuantity(item: CartItem, newQuantity: number): void {
    if (newQuantity < 1 || newQuantity > 99) return;

    this.isUpdating = true;
    
    this.http.put(`/api/cart/items/${item.id}`, { quantity: newQuantity })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          item.quantity = newQuantity;
          this.calculateTotals();
          this.isUpdating = false;
        },
        error: () => {
          this.isUpdating = false;
          this.notification.error('Error', 'Failed to update quantity');
        }
      });
  }

  incrementQuantity(item: CartItem): void {
    this.updateQuantity(item, item.quantity + 1);
  }

  decrementQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      this.updateQuantity(item, item.quantity - 1);
    }
  }

  removeItem(item: CartItem): void {
    if (!confirm('Remove this item from cart?')) return;

    this.isUpdating = true;

    this.http.delete(`/api/cart/items/${item.id}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.cartItems = this.cartItems.filter(i => i.id !== item.id);
          this.calculateTotals();
          this.isUpdating = false;
          this.notification.success('Removed', 'Item removed from cart');
        },
        error: () => {
          this.isUpdating = false;
          this.notification.error('Error', 'Failed to remove item');
        }
      });
  }

  clearCart(): void {
    if (!confirm('Clear all items from cart?')) return;

    this.cartItems = [];
    this.calculateTotals();
    this.notification.info('Cart Cleared', 'All items removed from cart');
  }

  applyPromoCode(): void {
    this.promoError = '';
    
    if (!this.promoCode.trim()) {
      this.promoError = 'Please enter a promo code';
      return;
    }

    const code = this.promoCode.trim().toUpperCase();
    const discount = this.validPromoCodes[code];

    if (discount) {
      this.promoDiscount = (this.subtotal * discount) / 100;
      this.promoApplied = true;
      this.calculateTotals();
      this.notification.success('Promo Applied', `${discount}% discount applied!`);
    } else {
      this.promoError = 'Invalid promo code';
      this.promoApplied = false;
      this.promoDiscount = 0;
    }
  }

  removePromoCode(): void {
    this.promoCode = '';
    this.promoDiscount = 0;
    this.promoApplied = false;
    this.calculateTotals();
  }

  private calculateTotals(): void {
    this.subtotal = this.cartItems.reduce((sum, item) => 
      sum + (item.product.price * item.quantity), 0
    );
    this.tax = this.subtotal * 0.20; // 20% VAT
    this.shipping = this.subtotal > 50 ? 0 : 5.99;
    this.itemCount = this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    this.total = this.subtotal + this.tax + this.shipping - this.promoDiscount;
  }

  proceedToCheckout(): void {
    if (this.cartItems.length === 0) {
      this.notification.warning('Empty Cart', 'Add items to cart before checkout');
      return;
    }

    this.router.navigate(['/checkout']);
  }

  getItemTotal(item: CartItem): number {
    return item.product.price * item.quantity;
  }

  trackByItemId(_index: number, item: CartItem): string {
    return item.id;
  }
}
