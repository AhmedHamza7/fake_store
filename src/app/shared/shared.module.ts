import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CoreModule
  ], 
  exports: [
    ProductCardComponent
  ]
})
export class SharedModule { }
