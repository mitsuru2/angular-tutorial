import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  /** Add an product to the item list. */
  addToCart(product: Product) {
    this.items.push(product);
  }

  /** Return item list. */
  getItems() {
    return this.items;
  }

  /** Remove all items in the item list. */
  clearCart() {
    this.items = [];
    return this.items;
  }

  /** Get shipping price information from shipping.json. */
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
