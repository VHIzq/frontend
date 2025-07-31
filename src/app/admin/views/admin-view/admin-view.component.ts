import { Component, inject, OnInit } from '@angular/core';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { Store } from '@ngxs/store';
import {
  DeleteDashboardEntry,
  EditDashboardEntry,
  GetDashboardData,
} from '../../../store/dashboard/dashboard.actions';
import { DashboardState } from '../../../store/dashboard/dashboard.state';
import { Observable } from 'rxjs';
import { DashboardModel } from '../../../store/dashboard/dashboard.model';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RegistryFormComponent } from '../../../data-entry/components/registry-form/registry-form.component';
import { RegistryForm } from '../../../data-entry/components/registry-form/registry-form.model';

@Component({
  selector: 'lra-admin-view',
  imports: [
    CommonModule,
    DashboardComponent,
    MatSidenavModule,
    MatSidenavModule,
    RegistryFormComponent,
  ],
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.scss',
})
export class AdminViewComponent implements OnInit {
  private store = inject(Store);

  shouldOpenDrawer!: boolean;
  selectedEntry!: DashboardModel.RowData | null;

  getDashboardData$: Observable<Array<DashboardModel.RowData>> =
    this.store.select(DashboardState.getDashboardData);

  ngOnInit() {
    this.setupDashboardData();
  }

  handleOnDeleteEntry($entryId: string) {
    this.store.dispatch(new DeleteDashboardEntry($entryId));
  }

  handleOpenDrawer($event: boolean) {
    this.shouldOpenDrawer = $event;
  }

  handleOnEditEntry($entry: DashboardModel.RowData) {
    this.selectedEntry = $entry;
    this.shouldOpenDrawer = true;
  }

  handleOnFormSubmit($entry: RegistryForm.FormDataModel) {
    // Convierte FormDataModel a RowData antes de enviar al store
    const rowData: DashboardModel.RowData = {
      rowDataId: $entry.rowDataId ?? '',
      name: $entry.name ?? '',
      firstLastName: $entry.firstLastName ?? '',
      secondsLastName: $entry.secondsLastName ?? '',
      age: $entry.age ?? null,
      email: $entry.email ?? '',
      cellphone: $entry.cellphone ?? '',
      entryTipe: $entry.entryTipe ?? '',
      invitedBy: $entry.invitedBy ?? '',
      visitDay: $entry.visitDay ?? '',
      visitTime: $entry.visitTime ?? '',
      street: $entry.street ?? '',
      streetNumber: $entry.streetNumber ?? '',
      zipCode: $entry.zipCode ?? '',
      referende: $entry.referende ?? '',
      region: $entry.region ?? '',
      state: $entry.state ?? '',
      houseNumber: $entry.houseNumber ?? '',
      sex: $entry.sex ?? '',
      peaceHouseLeader: $entry.peaceHouseLeader ?? '',
      peaceHouseNumber: $entry.peaceHouseNumber ?? '',
      isFirstTimeVisit: $entry.isFirstTimeVisit ?? null,
      dateFirstTimeVisit: $entry.dateFirstTimeVisit ?? null,
      network: $entry.network ?? '',
      pastor: $entry.pastor ?? '',
      discipulador: $entry.discipulador ?? '',
      comments: $entry.comments ?? '',
      status: $entry.status ?? '',
      createdAt: $entry.createdAt ?? null,
      addBy: $entry.addBy ?? '',
      deleteReason: $entry.deleteReason ?? '',
    };

    this.store.dispatch(new EditDashboardEntry(rowData));
    this.shouldOpenDrawer = false;
    this.selectedEntry = null;
  }

  // Convierte RowData a FormDataModel para el formulario
  get selectedEntryForForm(): RegistryForm.FormDataModel | null {
    if (!this.selectedEntry) return null;

    return {
      rowDataId: this.selectedEntry.rowDataId,
      name: this.selectedEntry.name,
      firstLastName: this.selectedEntry.firstLastName,
      secondsLastName: this.selectedEntry.secondsLastName,
      age: this.selectedEntry.age,
      email: this.selectedEntry.email,
      cellphone: this.selectedEntry.cellphone,
      entryTipe: this.selectedEntry.entryTipe,
      invitedBy: this.selectedEntry.invitedBy,
      visitDay: this.selectedEntry.visitDay,
      visitTime: this.selectedEntry.visitTime,
      street: this.selectedEntry.street,
      streetNumber: this.selectedEntry.streetNumber,
      zipCode: this.selectedEntry.zipCode,
      referende: this.selectedEntry.referende,
      region: this.selectedEntry.region,
      state: this.selectedEntry.state,
      houseNumber: this.selectedEntry.houseNumber,
      sex: this.selectedEntry.sex,
      peaceHouseLeader: this.selectedEntry.peaceHouseLeader,
      peaceHouseNumber: this.selectedEntry.peaceHouseNumber,
      isFirstTimeVisit: this.selectedEntry.isFirstTimeVisit,
      dateFirstTimeVisit: this.selectedEntry.dateFirstTimeVisit,
      network: this.selectedEntry.network,
      pastor: this.selectedEntry.pastor,
      discipulador: this.selectedEntry.discipulador,
      comments: this.selectedEntry.comments,
      status: this.selectedEntry.status,
      createdAt: this.selectedEntry.createdAt,
      addBy: this.selectedEntry.addBy,
      deleteReason: this.selectedEntry.deleteReason,
    };
  }

  private setupDashboardData() {
    this.store.dispatch(new GetDashboardData());
  }
}
