import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss']
})
export class ProductsFilterComponent implements OnInit {
  @Input() categoriesData:any
  constructor() { }

  ngOnInit(): void {
    console.log(this.categoriesData);
    
  }

}
