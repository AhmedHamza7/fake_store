import { MinimizeDescPipe } from './pipes/minimize-desc.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';


@NgModule({
  declarations: [
    MinimizeDescPipe
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    MinimizeDescPipe
  ]
})
export class CoreModule { }
