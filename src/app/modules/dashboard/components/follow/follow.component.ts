import { Component, OnInit } from '@angular/core';
import { Profile } from '../../models/dashboard.model';
@Component({
  selector: 'follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss']
})
export class FollowComponent implements OnInit {

  //#region Variables
  profiles: Profile[] = [
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
  //#endregion

  constructor() { }

  ngOnInit(): void {
  }

}
