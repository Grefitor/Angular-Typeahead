import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  fetchUserData(): Observal {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
