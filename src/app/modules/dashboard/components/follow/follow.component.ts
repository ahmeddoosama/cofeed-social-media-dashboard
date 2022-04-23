import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss']
})
export class FollowComponent implements OnInit {

  profiles: any[] = [
    {
      img: "/assets/images/persons/person2.jpg",
      name: "Arthur Shelby",
      user: "@artshelby"
    },
    {
      img: "/assets/images/persons/person4.jpg",
      name: "Sarah Tancredi",
      user: "@michaelsco"
    },
    {
      img: "/assets/images/persons/person6.jpg",
      name: "Vin Diesel",
      user: "@vindiesel"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
