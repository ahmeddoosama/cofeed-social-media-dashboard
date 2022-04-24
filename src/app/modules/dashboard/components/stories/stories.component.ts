import { Component, OnInit } from '@angular/core';
import { Story } from '../../models/dashboard.model';

@Component({
  selector: 'stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  stories: Story[] = [
    {name: 'name', image: '/assets/images/persons/person2.jpg'},
    {name: 'name', image: '/assets/images/persons/person3.jpg'},
    {name: 'name', image: '/assets/images/persons/person4.jpg'},
    {name: 'name', image: '/assets/images/persons/person5.jpg'},
    {name: 'name', image: '/assets/images/persons/person6.jpg'},
    {name: 'name', image: '/assets/images/persons/person6.jpg'},
    {name: 'name', image: '/assets/images/persons/person6.jpg'},
    {name: 'name', image: '/assets/images/persons/person6.jpg'},
    {name: 'name', image: '/assets/images/persons/person6.jpg'},
    {name: 'name', image: '/assets/images/persons/person6.jpg'},
    {name: 'name', image: '/assets/images/persons/person6.jpg'},
    {name: 'name', image: '/assets/images/persons/person7.jpg'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
