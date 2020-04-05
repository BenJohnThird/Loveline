import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMobile: boolean = false;
  constructor() { }
  @ViewChild('navBarContainer')
  myIdentifier: ElementRef;

  ngOnInit() {
    this.isMobile = window.innerWidth < 640 ? true: false;
  }

  scrollTo(className: string):void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
 }

}
