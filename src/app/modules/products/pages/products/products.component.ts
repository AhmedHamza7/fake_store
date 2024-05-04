import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  subscribtions = new Subscription();
  pageLoading: boolean = false
  productsLoading: boolean = false
  categoriesData: any
  productsData: any
  selectedCategory:string = ''
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getCategoriesData()
  }


  getCategoriesData(): void {
    this.pageLoading = true;
    this.subscribtions.add(
      this.productsService.getCategoriesData().subscribe(
        (res:any)=> {
          this.categoriesData = res
          this.selectedCategory = res[0]
          this.pageLoading = false
          this.getProductsByCategory()

        }
      )
    ) 
  }

  getProductsByCategory(): void {
    this.productsLoading = true;
    this.subscribtions.add(
      this.productsService.getProductsByCategory(this.selectedCategory).subscribe(
        (res:any)=> {
          this.productsData = res
          this.productsLoading = false
        }
      )
    ) 
  }
}
