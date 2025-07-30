import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginModel } from './login.model';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lra-login',
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  private fb = inject(FormBuilder);

  @Output()
  loginUser = new EventEmitter<LoginModel.LoginUser>();

  ngOnInit(): void {
    this.setupSignupForm();
  }

  handleOnLogin() {
    this.loginUser.emit(this.loginForm.value);
  }

  private setupSignupForm() {
    this.loginForm = this.fb.group({
      email: ['vhmizq@gmail.com', Validators.email],
      password: ['er340c##JNF', [Validators.required, Validators.minLength(8)]],
    });
  }
}
