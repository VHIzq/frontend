import { Component, inject } from '@angular/core';
import {
  EmailValidator,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegistryForm } from './registry-form.model';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'lra-registry-form',
  imports: [
    // Angular
    ReactiveFormsModule,

    // Material
    MatInputModule,
  ],
  templateUrl: './registry-form.component.html',
  styleUrl: './registry-form.component.scss',
})
export class RegistryFormComponent {
  registryForm!: FormGroup;

  private fb = inject(FormBuilder);

  private setupRegistryForm() {
    this.registryForm = this.fb.group({
      name: this.fb.control(null),
      firstLastName: this.fb.control(null),
      secondsLastName: this.fb.control(null),
      age: this.fb.control(null),
      email: this.fb.control(null),
      cellphone: this.fb.control(null),
      street: this.fb.control(null),
      streetNumber: this.fb.control(null),
      zipCode: this.fb.control(null),
      referende: this.fb.control(null),
      region: this.fb.control(null),
      state: this.fb.control(null),
      houseNumber: this.fb.control(null),
      sex: this.fb.control(null),
      peaceHouseLeader: this.fb.control(null),
      peaceHouseNumber: this.fb.control(null),
      isFirstTimeVisit: this.fb.control(null),
      dateFirstTimeVisit: this.fb.control(Date)
    });
  }
}
