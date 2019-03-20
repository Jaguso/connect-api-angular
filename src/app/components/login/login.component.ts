import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SignupService } from '../../services/signup/signup.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  createForm: FormGroup;

  constructor(private signupService: SignupService, private fb: FormBuilder) { 
    this.createForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  addAuthUser(email, password) {
    this.signupService
      .authenticateUser(email, password)
      .subscribe((response) => {
        console.log("token: ", response["token"]);
        localStorage.setItem("token", response["token"]);
      });
    console.log(this.createForm.value);
    // console.log(localStorage.getItem(token);
  }

  // addAuthUser(email, password) {

  // }

  ngOnInit() {
  }

}
