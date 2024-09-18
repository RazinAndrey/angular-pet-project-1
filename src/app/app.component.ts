import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './componetnts/product/product.component';
import { IProduct } from './models/product';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{

  title = 'pet project №1';

  products: IProduct[] = [];

  loading = false;

  constructor(private productService: ProductsService){}

  ngOnInit(): void {
    this.loading = true;
    this.productService.getAll().subscribe(products => {
      this.products = products;
      this.loading = false;
    })
  }
}
