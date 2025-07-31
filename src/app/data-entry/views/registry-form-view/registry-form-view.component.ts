import { Component, inject } from '@angular/core';
import { RegistryFormComponent } from '../../components/registry-form/registry-form.component';
import { RegistryForm } from '../../components/registry-form/registry-form.model';
import { Store } from '@ngxs/store';
import { Registry } from '../../../store/registry/registry.model';

@Component({
  selector: 'lra-registry-form-view',
  imports: [
    // Components
    RegistryFormComponent,
  ],
  templateUrl: './registry-form-view.component.html',
  styleUrl: './registry-form-view.component.scss',
})
export class RegistryFormViewComponent {
  private store = inject(Store);

  handleOnSubmitNewEntry(formData: RegistryForm.FormDataModel) {
    // Convierte FormDataModel a RegistryFormViewModelPayload
    const payload: Registry.RegistryFormViewModelPayload = {
      name: formData.name ?? '',
      firstLastName: formData.firstLastName,
      secondsLastName: formData.secondsLastName,
      age: formData.age,
      email: formData.email,
      cellphone: formData.cellphone,
      entryTipe: formData.entryTipe,
      invitedBy: formData.invitedBy,
      visitDay: formData.visitDay,
      visitTime: formData.visitTime,
      street: formData.street,
      streetNumber: formData.streetNumber,
      zipCode: formData.zipCode,
      referende: formData.referende,
      region: formData.region,
      state: formData.state,
      houseNumber: formData.houseNumber,
      sex: formData.sex,
      peaceHouseLeader: formData.peaceHouseLeader,
      peaceHouseNumber: formData.peaceHouseNumber,
      isFirstTimeVisit: formData.isFirstTimeVisit,
      dateFirstTimeVisit: formData.dateFirstTimeVisit,
      network: formData.network,
      pastor: formData.pastor,
      discipulador: formData.discipulador,
      comments: formData.comments,
      status: formData.status,
      createdAt: formData.createdAt,
      addBy: formData.addBy,
      rowDataId: formData.rowDataId,
    };
  }
}
