import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsPageComponent } from './cars-page.component';
import { CarPageComponent } from './car-page/car-page.component';

import { CarService } from '../Services/car.service';
import { CarsRoutingModule } from './cars-routing.module';
import { SharedModule } from '../Shared/shared.module';


@NgModule({

  declarations: [
    CarsPageComponent,
    CarPageComponent
  ],

  imports: [
    CommonModule,
    CarsRoutingModule,
    SharedModule

  ],

  providers: [
    CarService
  ]

})
export class CarsModule { }
