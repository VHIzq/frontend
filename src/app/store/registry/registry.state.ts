import { inject, Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { AddNewEntry, GetEntryList, RegistryAction } from './registry.actions';
import { RegistryService } from './registry.service';
import { Registry } from './registry.model';

export interface RegistryStateModel {
  items: string[];
  entryList: Array<Registry.RegistryFormViewModelPayload>;
}

@State<RegistryStateModel>({
  name: 'registry',
  defaults: {
    items: [],
  },
})
@Injectable()
export class RegistryState {
  private dataService = inject(RegistryService);

  @Selector()
  static getState(state: RegistryStateModel) {
    return state;
  }

  @Action(GetEntryList)
  getEntryList(ctx: StateContext<RegistryStateModel>) {
    
  }

  @Action(AddNewEntry)
  addNewEntry(ctx: StateContext<RegistryStateModel>, { payload }: AddNewEntry) {
    return this.dataService.addNewEntry(payload).subscribe((response) => {
      const stateModel = ctx.getState();
      stateModel.items = [...stateModel.items, response];
      ctx.setState(stateModel);
    });
  }
}
