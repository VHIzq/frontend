import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegistryForm } from './registry-form.model';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lra-registry-form',
  imports: [
    // Angular
    ReactiveFormsModule,

    // Material
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
  ],
  templateUrl: './registry-form.component.html',
  styleUrl: './registry-form.component.scss',
})
export class RegistryFormComponent implements OnInit {
  registryForm!: FormGroup;

  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.setupRegistryForm();
  }

  handleOnSubmit() {
    if (this.registryForm.invalid) {
      this.registryForm.markAllAsTouched();
      return;
    }

    //Dipatch the form value to the store or service
  }

  private setupRegistryForm() {
    this.registryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      firstLastName: ['', [Validators.required]],
      secondsLastName: [''],
      age: [null, [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
      cellphone: ['', [Validators.pattern(/^\d{10}$/)]],
      street: [''],
      streetNumber: [''],
      zipCode: ['', [Validators.pattern(/^\d{5}$/)]],
      referende: [''],
      region: [''],
      state: [''],
      houseNumber: [''],
      sex: ['', [Validators.required]],
      peaceHouseLeader: [''],
      peaceHouseNumber: [''],
      isFirstTimeVisit: [null],
      dateFirstTimeVisit: [null],
    });
  }
}
