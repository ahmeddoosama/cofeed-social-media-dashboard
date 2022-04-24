import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
/**
 *
 *
 * @export
 * @class HeaderComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'cofeed-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _ref: ElementRef
  ) { }

  ngOnInit(): void {
  }

  /**
   * @description [set shadow class based on window scroll]
   */
  @HostListener('window:scroll', ['$event']) onScrollEvent($event:any){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this._ref.nativeElement.querySelector("header").classList.add('shadow')
    } else {
      this._ref.nativeElement.querySelector("header").classList.remove('shadow')
    }
  }

}
