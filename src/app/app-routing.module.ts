import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { CarsPageComponent } from "./cars-page/cars-page.component";
import { CarPageComponent } from "./cars-page/car-page/car-page.component";


const appRoutes: Routes = [
    { path: '', component: HomePageComponent },

    {
        path: 'cars', component: CarsPageComponent, children: [
            { path: ':id/:name', component: CarPageComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }