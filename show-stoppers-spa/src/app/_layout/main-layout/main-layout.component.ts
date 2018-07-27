import { Component, OnInit } from '@angular/core';

/**
 * @class Main Layout
 * This is the supporting component that is used to create a standard look and feel for the site
 * this is the basic one but others can be added for login and such
 */
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
