import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
/**
 *
 *
 * @export
 * @class PostCardComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  //#region Variables
  @Output() setLikes = new EventEmitter<any>();
  @Input() postId!: number;
  @Input() postImage!: string;
  @Input() posterImage!: string;
  @Input() posterName!: string;
  @Input() likeCount: number = 0;
  @Input() commentsCount: number = 0;
  //#endregion

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @function addLike()
   * @param postId [get postID]
   * @param likeCount [get likeCount]
   */
  addLike(postId: number, likeCount: number) {
    // increment likeCount
    this.likeCount = ++likeCount;

    // store postId and likeCount in object
    const model = {
      postId: postId,
      likesNum: likeCount
    }

    // send this model to parent component
    this.setLikes.emit(model);
  }
}
