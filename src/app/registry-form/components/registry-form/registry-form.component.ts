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
import { Subject, take, takeUntil } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PreviewFormComponent } from '../preview-form/preview-form.component';
import { getDiscipuladores, getNetworks, getPastors } from './assignations.data';

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
    MatDialogModule,
  ],
  templateUrl: './registry-form.component.html',
  styleUrl: './registry-form.component.scss',
  standalone: true,
})
export class RegistryFormComponent implements OnInit, OnDestroy {
  registryForm!: FormGroup;
  STATES = getRepublicStates();
  NETWORKS = getNetworks();
  PASTORS = getPastors();
  DISCIPULADORES = getDiscipuladores();

  private fb = inject(FormBuilder);
  private destroy$ = new Subject<void>();
  readonly dialog = inject(MatDialog);

  @Output()
  formData = new EventEmitter<RegistryForm.FormDataModel>();

  ngOnInit(): void {
    this.setupRegistryForm();
    this.setupFirsDateDefault();
    // this.setupPastor();
  }

  ngOnDestroy(): void {
    this.destroySubscriptions();
  }

  handleOnSubmit() {
    if (this.registryForm.invalid) {
      this.registryForm.markAllAsTouched();
      return;
    }

    console.log('data', this.registryForm.value);

    //TODO: Dipatch the form value to the store or service
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PreviewFormComponent, {
      width: '250px',
      data: this.registryForm.value,
    });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((shouldSubmit: boolean) => {
        if (shouldSubmit) {
          this.formData.emit(this.registryForm.value);
          this.registryForm.reset();
        }
      });
  }

  private setupRegistryForm() {
    this.registryForm = this.fb.group({
      name: ['Abc', [Validators.required, Validators.minLength(3)]],
      firstLastName: ['Def', [Validators.required]],
      secondsLastName: ['FGH'],
      age: [20, [Validators.required, Validators.min(0)]],
      email: ['test@demo.com', [Validators.required, Validators.email]],
      cellphone: ['5514174968', [Validators.pattern(/^\d{10}$/)]],
      street: ['Arenal'],
      streetNumber: ['51'],
      zipCode: ['04600', [Validators.pattern(/^\d{5}$/)]],
      referende: ['Tren Ligero'],
      region: ['Huipulco'],
      state: ['Ciudad de Mexico'],
      houseNumber: ['111'],
      sex: ['M', [Validators.required]],
      peaceHouseLeader: ['Joe'],
      peaceHouseNumber: ['33'],
      isFirstTimeVisit: [true],
      dateFirstTimeVisit: [new Date()],
      network: ['Isacar', [Validators.required]],
      pastor: ['', [Validators.required]],
      discipulador: ['', [Validators.required]],
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

  // private setupPastor() {
  //   this.registryForm.controls['network'].valueChanges
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe((network) => {
  //       const pastors = this.PASTORS[network] || [];
  //       this.registryForm.controls['pastor'].setValue(pastors[0] || '');
  //     });
  // }

  private destroySubscriptions() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
