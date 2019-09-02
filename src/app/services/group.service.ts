import { Injectable } from '@angular/core';
import { config } from '../globals';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  baseURL = config;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.baseURL}/api/groups`);
  }
}
