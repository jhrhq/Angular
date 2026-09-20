import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartStore } from './store/cart-store';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <header class="cart-header">
      <h2>Shopping Cart ({{ cart.totalCount() }} items)</h2>
      <p>Total: {{ cart.totalPrice() | currency }}</p>
    </header>

    <ul>
      @for (item of cart.cartItem(); track item.id) {
        <li>
          <span
            >{{ item.name }} (x{{ item.quantity }}) -
            {{ item.price * item.quantity | currency }}</span
          >
          <button (click)="cart.removeItem(item.id)">Remove</button>
        </li>
      } @empty {
        <p>Your cart is empty.</p>
      }
    </ul>

    <button (click)="addSampleItem()">Add Sample Item</button>
    <button (click)="cart.clearCart()" [disabled]="cart.cartItem().length === 0">Clear</button>
  `,
})
export class CartSummaryComponent {
  readonly cart = inject(CartStore);

  addSampleItem(): void {
    this.cart.addItem({
      id: crypto.randomUUID(),
      name: 'Wireless Mouse',
      price: 29.99,
    });
  }
}
