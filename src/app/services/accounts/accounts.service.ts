import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  url = 'https://mighty-refuge-81707.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getAccounts() {
    return this.http.get(`${this.url}/accounts`);
  }
}
