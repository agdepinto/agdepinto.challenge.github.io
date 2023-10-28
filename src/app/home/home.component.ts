import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isCollapsed: boolean = true;
  constructor(public router: Router) {
  }
  updateIsCollapsed(): void {
    this.isCollapsed = this.isCollapsed ? false : true;
  }
}
