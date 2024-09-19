import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ModalService } from '../../services/modal.service';
import { CreateProductComponent } from '../../components/create-product/create-product.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { FilterProducts } from '../../pipes/filter-products.pipe';
import { FormsModule } from '@angular/forms';
import { GlobalErrorComponent } from '../../components/global-error/global-error.component';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ 
    CommonModule,
    ProductComponent,
    GlobalErrorComponent,
    FormsModule,
    FilterProducts,
    ModalComponent,
    CreateProductComponent
  ],
  templateUrl: './products-page.component.html',
})
export class ProductsPageComponent {
  title = 'pet project №1';

  term = '';

  loading = false;

  constructor(
    public productService: ProductsService,
    public modalService: ModalService,
    public errorService: ErrorService
  ){}

  ngOnInit(): void {
    this.loading = true;

    this.productService.getAll().subscribe(() => {
      this.loading = false;
    })
  }
}
