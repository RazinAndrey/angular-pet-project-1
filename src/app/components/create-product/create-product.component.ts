import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FocusDirective } from '../../directives/focus.directive';
import { ProductsService } from '../../services/products.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FocusDirective ],
  templateUrl: './create-product.component.html'
})

export class CreateProductComponent {

  constructor(
    private productsService: ProductsService, 
    private modalService: ModalService
  ){}

  form = new FormGroup ({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ])
  })

  get title(){
    return this.form.controls.title as FormControl;
  }

  submit(){ 
    console.log(this.form.value);
    this.productsService.create({
      id: Math.random(),
      title: this.form.value.title as string,
      price: 13.5,
      description: 'A Gig Text',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    }).subscribe(()=> {
      this.modalService.close()  
    })
    this.form.reset();
  }
}
