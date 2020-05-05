import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  menuClicked = new EventEmitter();

  menuOpened = true;

  constructor() { }

  openMenu() {
    this.menuOpened = !this.menuOpened;
 
    this.menuClicked.emit(this.menuOpened);
  }

  ngOnInit() {
  }

  isMobile() {
    return window.innerWidth < 1024 ? 'none' : '';
  }

}
