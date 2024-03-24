import { Injectable } from '@angular/core';
import { Products } from '../products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get('https://dummyjson.com/products');
  }

  getSingleProducts(id: number = 0) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
