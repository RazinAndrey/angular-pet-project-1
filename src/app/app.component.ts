import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products.service';
import { IProduct } from './models/products';
import { ProductComponent } from './components/product/product.component';
import { Observable, tap } from 'rxjs';
import { GlobalErrorComponent } from "./components/global-error/global-error.component";
import { FormsModule } from '@angular/forms';
import { FilterProducts } from './pipes/filter-products.pipe';
import { ModalComponent } from "./components/modal/modal.component";
import { CreateProductComponent } from "./components/create-product/create-product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductComponent, GlobalErrorComponent, FormsModule, FilterProducts, ModalComponent, CreateProductComponent],
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit{

  title = 'pet project №1';

  term = '';

  products$: Observable<IProduct[]>

  loading = false;

  constructor(private productService: ProductsService){}

  ngOnInit(): void {
    this.loading = true;

    this.products$ = this.productService.getAll()
      .pipe(tap(() => this.loading = false))
  }
}
