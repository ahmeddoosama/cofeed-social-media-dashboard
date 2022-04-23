import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

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

  @HostListener('window:scroll', ['$event']) onScrollEvent($event:any){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this._ref.nativeElement.querySelector("header").classList.add('shadow')
    } else {
      this._ref.nativeElement.querySelector("header").classList.remove('shadow')
    }
  }

}
