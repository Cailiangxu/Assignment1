import { Injectable } from '@angular/core';
import { config } from '../globals';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  config;
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.config}/api/channels`);
  }
}
