import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    title: 'eShop | Home Page',
  },

  {
    path: 'login',
    component: LoginComponent,
    title: 'eShop | Login',
  },

  {
    path: 'register',
    component: RegisterComponent,
    title: 'eShop | Register',
  },

  {
    path: 'cart',
    component: CartComponent,
    title: 'eShop | Cart',
  },

  {
    path: 'product-details/:id/cart',
    component: CartComponent,
    title: 'eShop | Cart',
  },

  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
    title: 'eShop | Product Details',
  },

  {
    path: '**',
    component: NotFoundComponent,
    title: 'eShop | 404',
  },
];
