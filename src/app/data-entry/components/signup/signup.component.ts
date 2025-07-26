import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SignupModel } from './signup.model';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'lra-signup',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  @Output()
  newUser = new EventEmitter<SignupModel.EntryUser>();

  ngOnInit(): void {
    this.setupSignupForm();
  }

  handleOnSignup(entryUser: SignupModel.EntryUser) {
    this.newUser.emit(entryUser);
  }

  private fb = inject(FormBuilder);

  private setupSignupForm() {
    this.signupForm = this.fb.group({
      cellphone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      secondLastName: [''],
      email: ['', Validators.email],
    });
  }
}
