import { Component, Input } from '@angular/core';
import { Products } from '../products';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    CommonModule,
    NgbRatingModule,
    RatingModule,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() productItem!: Products;

  constructor(private router: Router) {}
}
