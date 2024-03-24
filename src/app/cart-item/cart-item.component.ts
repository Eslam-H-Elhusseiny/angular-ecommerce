import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  counter: number = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counterService
      .getCounter()
      .subscribe((count) => (this.counter = count));
  }

  increaseCount() {
    this.counterService.setCounter(this.counter + 1);
  }

  decreaseCount() {
    this.counterService.setCounter(this.counter - 1);
  }
}
