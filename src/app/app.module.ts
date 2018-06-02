import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { ColorDirective } from './Shared/color.directive';
import { CarService } from './Services/car.service';
import { AppRoutingModule } from './app-routing.module';
import { CarPageComponent } from './cars-page/car-page/car-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    CarsPageComponent,
    ColorDirective,
    CarPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
