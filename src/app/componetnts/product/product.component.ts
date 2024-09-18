import { Component, Input } from "@angular/core";
import { IProduct } from "../../models/product";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-product',
    standalone: true,
    imports:[CommonModule],
    templateUrl: './product.component.html'
})

export class ProductComponent{
    @Input() product: IProduct

    details = false;
}