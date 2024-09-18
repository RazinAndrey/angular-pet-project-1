import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IProduct } from "../../models/products";

@Component({
  selector: 'app-product',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './product.component.html',
})
export class ProductComponent {

  @Input() product: IProduct

  details = false; 

}
