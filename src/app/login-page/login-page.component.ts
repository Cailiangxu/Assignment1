// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-login-page',
//   templateUrl: './login-page.component.html',
//   styleUrls: ['./login-page.component.css']
// })
// export class LoginPageComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../auth.service';

interface User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    // init login form
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });

    // get user from session storage, if exist, go to account page
    const user = sessionStorage.getItem('user');
    if (user) {
      this.router.navigate(['/home']);
    }
  }

  onSubmit() {
    const value = this.loginForm.value;
    console.log({ value });
    if (!value.username || !value.password) {
      alert('Please input username and password!');
    } else {
      console.log(this.authService);
      this.authService.login(value)
        .subscribe(
          (data) => {
            // change JSON data to string and store in session storage
            sessionStorage.setItem('user', JSON.stringify(data));
            this.router.navigate(['/home']);
          },
          error => {
            // handle error
            console.warn(error);
            alert('Wrong username or password!');
          }
        );
    }
  }

}
