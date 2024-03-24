import { Component, inject, Input } from '@angular/core';
import { Products } from '../products';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../services/products.service';
import { RouterLink } from '@angular/router';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    RatingModule,
    FormsModule,
    NgbRatingModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  @Input() id?: number;
  products: Array<Products> = [];
  cartService = inject(CounterService);
  counter: number = 0;
  cartItems: Array<object> = [];

  constructor(private productsService: ProductsService) {}

  productDetails: any;

  ngOnInit() {
    this.productsService
      .getSingleProducts(this.id)
      .subscribe((product) => (this.productDetails = product));

    this.cartService.getCounter().subscribe((count) => (this.counter = count));
    console.log(this.counter);
  }

  addToCart() {
    this.productsService
      .getSingleProducts(this.id)
      .subscribe((product) => this.cartItems.push(Object.values(product)));
    console.log(this.cartItems);
  }
}
