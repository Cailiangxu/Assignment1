import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../models/user';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit() {
  }

}
