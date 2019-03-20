import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
// import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'https://mighty-refuge-81707.herokuapp.com/api/auth/user/authenticate';

  constructor(private http: HttpClient) { }


  login(email: string, password: string) {
    return this.http.post(this.url, {email, password})
      .pipe(tap((res) => {
        localStorage.setItem('access_token', res["token"]);
      }));
  }

  register(email: string, password: string) {
    return this.http.post(this.url, {email, password})
      .pipe(tap(res => {
        this.login(email, password)
      }));
  }

}
