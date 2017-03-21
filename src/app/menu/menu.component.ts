import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../model/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      new MenuItem("home", "Home"),
      new MenuItem("about", "About")
    ];
  }

}
