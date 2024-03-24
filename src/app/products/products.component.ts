import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Products } from '../products';
import products from '../../assets/products-list.json';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  imports: [ProductCardComponent],
})
export class ProductsComponent {
  productsArr: Array<Products> = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService
      .getAllProducts()
      .subscribe(
        (products: object) => (this.productsArr = Object.values(products)[0])
      );
  }
}
