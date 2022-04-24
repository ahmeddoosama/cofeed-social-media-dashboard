import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/shared/models/shared.model';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  //#region Variables
  pages: Page[] = [
    {icon: 'fa-solid fa-house', name: 'Home'},
    {icon: 'fa-solid fa-comment-dots', name: 'Messages'},
    {icon: 'fa-solid fa-user', name: 'Profile'},
    {icon: 'fa-solid fa-bookmark', name: 'Saved Post'},
    {icon: 'fa-solid fa-gear', name: 'Settings'}
  ]
  //#endregion
  constructor() { }

  ngOnInit(): void {
  }

}
