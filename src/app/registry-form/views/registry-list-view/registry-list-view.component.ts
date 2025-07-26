import { Component, inject, OnInit } from '@angular/core';
import { RegistryListComponent } from '../../components/registry-list/registry-list.component';
import { faker } from '@faker-js/faker';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { GetEntryList } from '../../../store/registry/registry.actions';

@Component({
  selector: 'lra-registry-list-view',
  imports: [CommonModule, RegistryListComponent],
  templateUrl: './registry-list-view.component.html',
  styleUrl: './registry-list-view.component.scss',
})
export class RegistryListViewComponent implements OnInit {
  entryList = this.setupEntryList();
  private store = inject(Store);

  ngOnInit(): void {
    this.setupEntryList();
    this.setupGetEntryList();
  }

  deleteEntry($entryId: number) {
    //TODO: Implement dispatch to delete an entry
    console.log('data to delete', $entryId);
  }

  private setupEntryList() {
    //TODO: Replace with a selector or service call to fetch real data
    const registryListMock = Array.from({ length: 20 }).map((_, i) => ({
      id: i + 1,
      name: faker.person.fullName(),
      status: faker.helpers.arrayElement(['enviado', 'pendiente', 'eliminado']),
    }));

    return registryListMock;
  }

  private setupGetEntryList() {
    this.store.dispatch(new GetEntryList());
  }
}
