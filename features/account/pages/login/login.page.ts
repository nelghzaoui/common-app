import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'account-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  form: FormGroup;

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.builder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    console.log('click');
  }
}
