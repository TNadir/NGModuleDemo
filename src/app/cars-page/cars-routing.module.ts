import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { CarsPageComponent } from "./cars-page.component";
import { CarPageComponent } from "./car-page/car-page.component";


const carsRouter: Routes = [
    {
        path: '', component: CarsPageComponent, children: [
            { path: ':id/:name', component: CarPageComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(carsRouter)],
    exports: [RouterModule],
})

export class CarsRoutingModule {}