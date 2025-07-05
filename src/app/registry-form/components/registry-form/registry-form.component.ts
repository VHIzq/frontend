import {
  Component,
  EventEmitter,
  inject,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
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
import { CommonModule } from '@angular/common';
import { getRepublicStates } from './mexican-states.data';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'lra-registry-form',
  imports: [
    // Angular
    CommonModule,
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
export class RegistryFormComponent implements OnInit, OnDestroy {
  registryForm!: FormGroup;
  STATES = getRepublicStates();

  private fb = inject(FormBuilder);
  private destroy$ = new Subject<void>();

  @Output()
  formData = new EventEmitter<RegistryForm.FormDataModel>();

  ngOnInit(): void {
    this.setupRegistryForm();
    this.setupFirsDateDefault();
  }

  ngOnDestroy(): void {
    this.destroySubscriptions();
  }

  handleOnSubmit() {
    if (this.registryForm.invalid) {
      this.registryForm.markAllAsTouched();
      return;
    }

    //TODO: Dipatch the form value to the store or service
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

  private setupFirsDateDefault() {
    this.registryForm.controls['isFirstTimeVisit'].valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        if (response) {
          this.registryForm.controls['dateFirstTimeVisit'].setValue(new Date());
        } else {
          this.registryForm.controls['dateFirstTimeVisit'].setValue(null);
        }
      });
  }

  private destroySubscriptions() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
