import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties : Array<any> = [
    {
     "Id":1,
     "Name":"Birla House",
     "Type":"1 BHK",
     "Price":10000,
    },
    {
      "Id":2,
      "Name":"Tata House",
      "Type":"2 BHK",
      "Price":25000,
     },
     {
      "Id":3,
      "Name":"Dalmia House",
      "Type":"1 BHK",
      "Price":18000,
     },
     {
      "Id":4,
      "Name":"Elon House",
      "Type":"2 BHK",
      "Price":40000,
     },
     {
      "Id":5,
      "Name":"Drift House",
      "Type":"1 BHK",
      "Price":18000,
     },
     {
      "Id":5,
      "Name":"King Villa",
      "Type":"Villa",
      "Price":90000,
     },
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
