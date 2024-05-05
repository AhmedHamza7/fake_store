import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss']
})
export class ProductsFilterComponent implements OnInit {
  @Input() categoriesData: string[] = [];
  @Output() selectedCategory = new EventEmitter<any>()
  currentCategory:string = ''

  constructor() { }

  ngOnInit(): void {
    this.currentCategory = this.categoriesData[0]
  }

  onSelectCategory(category:any):void {
    this.currentCategory = category;
    this.selectedCategory.emit(category)
  }

}
