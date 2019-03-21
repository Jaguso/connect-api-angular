import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  url = 'https://mighty-refuge-81707.herokuapp.com/api';

  constructor(private http: HttpClient) { }


  getAccounts() {
    let token = localStorage.getItem("token")
    // const headers = new HttpHeaders({
    //   'x-access-token': token
    // });
    return this.http.get(`${this.url}/accounts`, {headers: {'x-access-token': token}});
  }
}
