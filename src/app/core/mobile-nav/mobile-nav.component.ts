import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/shared/models/shared.model';

@Component({
  selector: 'mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {

  pages: Page[] = [
    {icon: 'fa-solid fa-house', name: 'Home'},
    {icon: 'fa-solid fa-user', name: 'Profile'},
    {icon: 'fa-solid fa-gear', name: 'Settings'}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
