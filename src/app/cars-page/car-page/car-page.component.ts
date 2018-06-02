import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})


export class CarPageComponent implements OnInit {

  id: number;
  name: string;
  color: string;
  year: string

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {

    this.router.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.name = param['name']
    })

    this.router.queryParams.subscribe((param: Params) => {
      this.color = param['color'];
      this.year = param['year'];
    })

  }

}
