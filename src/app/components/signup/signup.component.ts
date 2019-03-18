import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SignupService } from '../../services/signup/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  createForm: FormGroup;

  constructor(private signupService: SignupService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      email: '',
      firstname: '',
      lastname: '',
      password: ''
    });
  }

  addUser(email, firstname, lastname, password) {
    this.signupService
      .addUser(email, firstname, lastname, password)
      .subscribe(() => {
        this.router.navigate(['/login']);
      })
    console.log(this.createForm.value);
  }

  ngOnInit() {
  }

}
