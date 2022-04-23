import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  posts: any[] = [
    {
      postId: 1,
      posterImage: '/assets/images/persons/person3.jpg',
      postImage: '/assets/images/card-images/poster2.PNG',
      posterName: 'Dean Winchester',
      likeCount: 1
    },
    {
      postId: 2,
      posterImage: '/assets/images/persons/person4.jpg',
      postImage: '/assets/images/card-images/poster3.PNG',
      posterName: 'Jesse Pinkman',
      likeCount: 1
    },
    {
      postId: 3,
      posterImage: '/assets/images/persons/person5.jpg',
      postImage: '/assets/images/card-images/poster4.PNG',
      posterName: 'Theodore Bagwell',
      likeCount: 1
    },
    {
      postId: 4,
      posterImage: '/assets/images/persons/person7.jpg',
      postImage: '../../../../../assets/images/card-images/poster5.PNG',
      posterName: 'Walter White',
      likeCount: 1
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
