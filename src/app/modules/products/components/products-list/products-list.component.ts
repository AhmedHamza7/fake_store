import { Product } from './../../models/product-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() productsData:Product[] = []
  constructor() { }

  ngOnInit(): void {
    console.log(this.productsData);
    
  }

}
