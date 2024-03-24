import { Injectable } from '@angular/core';
import { Products } from '../products';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new BehaviorSubject<any>([]);
  constructor() {}
  getCart() {
    return this.cart.asObservable();
  }

  setCart(cartItems: any) {
    const currentValue = this.cart.value;
    let existingItemIndex = currentValue.findIndex(
      (item: any) => item.id === cartItems.id
    );
    if (existingItemIndex !== -1) {
      console.log('exists');
      currentValue[existingItemIndex].quantity += 1;
      this.cart.next([...currentValue]);
    } else {
      this.cart.next([...currentValue, { id: cartItems.id, quantity: 1 }]);
    }
  }
}
