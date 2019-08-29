import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient){ }

  getAll() {
    return this.http.get(`${this.baseURL}/api/users`);
  }

  getUserByName(userName:string){
    return this.http.get(`${this.baseURL}/api/user/${userName}`);
  }



}
