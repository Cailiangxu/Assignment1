import { Component } from '@angular/core';
import { User } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;

  constructor() {
    const currentUser =  sessionStorage.getItem('currentUser');

    if (currentUser) {
      this.currentUser = JSON.parse(currentUser);
    }
  }
}
