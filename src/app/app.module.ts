import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from './Shared/shared.module';



@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
