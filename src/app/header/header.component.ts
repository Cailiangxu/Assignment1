import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // currentUser: User;

  constructor(
    private router: Router,
    // private authService: AuthService,
  ) { }

  ngOnInit() {
    // this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  }

  toAuth() {
    this.router.navigate(['/login']);
  }

}
