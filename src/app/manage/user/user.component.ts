import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll()
      .subscribe(
        (users: User[]) => {
          this.users = users;
          },
        (err) => {
          console.error(err);
        }
        );
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }


}
