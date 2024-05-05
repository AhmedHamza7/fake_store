import { Product } from './../../models/product-model';
import { Component, OnInit , OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit , OnDestroy{
  subscribtions = new Subscription();
  pageLoading: boolean = false
  productsLoading: boolean = false
  categoriesData: string[] = []
  productsData: Product[] = []
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
          this.pageLoading = false
          this.getProductsByCategory(res[0])

        }
      )
    ) 
  }

  getProductsByCategory(selectedCategory:any): void {
    this.productsLoading = true;
    this.subscribtions.add(
      this.productsService.getProductsByCategory(selectedCategory).subscribe(
        (res:any)=> {
          this.productsData = res
          this.productsLoading = false
        }
      )
    ) 
  }

  ngOnDestroy(): void {
    this.subscribtions.unsubscribe()
  }
}
