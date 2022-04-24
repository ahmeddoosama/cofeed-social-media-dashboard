import { Component, OnInit } from '@angular/core';
import { LikeService } from 'src/app/shared/services/likedService/like.service';
import { Post } from '../../models/dashboard.model';

/**
 *
 *
 * @export
 * @interface Post
 */
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //#region Variables
  posts: Post[] = [
    {
      postId: 1,
      posterImage: '/assets/images/persons/person3.jpg',
      postImage: '/assets/images/card-images/poster2.PNG',
      posterName: 'Dean Winchester',
      likeCount: 0,
      liked: false,
      commentsCount: 0
    },
    {
      postId: 2,
      posterImage: '/assets/images/persons/person4.jpg',
      postImage: '/assets/images/card-images/poster3.PNG',
      posterName: 'Jesse Pinkman',
      likeCount: 500,
      liked: false,
      commentsCount: 0
    },
    {
      postId: 3,
      posterImage: '/assets/images/persons/person5.jpg',
      postImage: '/assets/images/card-images/poster4.PNG',
      posterName: 'Theodore Bagwell',
      likeCount: 30,
      liked: false,
      commentsCount: 0
    },
    {
      postId: 4,
      posterImage: '/assets/images/persons/person7.jpg',
      postImage: '../../../../../assets/images/card-images/poster5.PNG',
      posterName: 'Walter White',
      likeCount: 48,
      liked: false,
      commentsCount: 0
    },
  ];

  likes: any[] = [];
  //#endregion

  constructor(private _saveLikes: LikeService) { }

  ngOnInit(): void {
    this.getLikes();
  }

  /**
   * @function getLikes()
   * @description [get likes from local storage and check on posts array and change likesCount number]
   */
   getLikes() {
    this.likes = this._saveLikes.get('likes');
    if(this.likes.length > 0) {
      this.likes.forEach(element => {
        const getItem: any = this.posts.find(el => el.postId == element.postId);
        if(element.liked == true) {
          getItem['likeCount'] = ++getItem['likeCount'];
          getItem['liked'] = element['liked'];
        }
      })
    }
  }

  /**
   * @function setLikes()
   * @description [get likesCount from child component and check on this postId found in likes array if found change likesNum and if not set this postId in likes array and set it to local storage]
   * @param event [get date from child component]
   */
  setLikes(event: any){
    const check = this.likes.find(el => el.postId == event.postId);
    if(check) {
      check['liked'] = event.liked;
    } else {
      this.likes.push(event);
    }

    this._saveLikes.set('likes', this.likes);
  }



}
