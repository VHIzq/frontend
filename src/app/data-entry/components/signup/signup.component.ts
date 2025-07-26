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
  private fb = inject(FormBuilder);

  @Output()
  newUser = new EventEmitter<SignupModel.EntryUser>();

  ngOnInit(): void {
    this.setupSignupForm();
  }

  handleOnSignup() {
    this.newUser.emit(this.signupForm.value);
  }


  private setupSignupForm() {
    this.signupForm = this.fb.group({
      cellphone: ['5514174938', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      name: ['Victor H', Validators.required],
      lastName: ['Magdaleno', Validators.required],
      secondLastName: ['Izquierdo'],
      email: ['vhmizq@gmail.com', Validators.email],
      password: ['er340c##JNF', [Validators.required, Validators.minLength(8)]]
    });
  }
}
