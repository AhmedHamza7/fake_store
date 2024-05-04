import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = environment.baseApi

  constructor(
    private httpClient:HttpClient
  ) { }

  getCategoriesData():Observable<any>{
    return this.httpClient.get(this.baseUrl + 'products/categories')
  }

  getProductsByCategory(category:string):Observable<any>{
    return this.httpClient.get(this.baseUrl + `products/category/${category}`)
  }
}
