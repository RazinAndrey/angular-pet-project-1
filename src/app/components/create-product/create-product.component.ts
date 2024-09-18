import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-product.component.html'
})

export class CreateProductComponent {
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
    this.form.reset();
  }
}
