import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
    title_product = 'USB Stick 8GB';
    itemCount = 0;
    //public values: number[] = [1, 2, 3, 4];

    constructor() { }

    addItem() {
        this.itemCount++;
    }
}
