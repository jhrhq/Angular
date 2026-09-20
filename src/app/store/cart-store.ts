import { computed, Injectable, signal } from '@angular/core';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isLoading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CartStore {
  private readonly cartState = signal<CartState>({
    items: [],
    isLoading: false,
  });

  readonly cartItem = computed(() => this.cartState().items);
  readonly isLoading = computed(() => this.cartState().items);

  readonly totalCount = computed(() =>
    this.cartState().items.reduce((acc, item) => acc + item.quantity, 0),
  );

  readonly totalPrice = computed(() =>
    this.cartState().items.reduce((acc, item) => acc + item.price * item.quantity, 0),
  );

  addItem(product: Omit<CartItem, 'quantity'>): void {
    this.cartState.update((current) => {
      const existing = current.items.find((i) => i.id == product.id);

      const items = existing
        ? current.items.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i))
        : [...current.items, { ...product, quantity: 1 }];

      return { ...current, items };
    });
  }

  removeItem(id: string): void {
    this.cartState.update((current) => ({
      ...current,
      items: current.items.filter((i) => i.id != id),
    }));
  }
  clearCart(): void {
    this.cartState.update((current) => ({ ...current, items: [] }));
  }
}
