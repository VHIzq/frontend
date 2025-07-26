import { inject, Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { AddNewEntry, DeleteEntry, GetEntryList } from './registry.actions';
import { RegistryService } from './registry.service';
import { Registry } from './registry.model';
import { Observable, tap } from 'rxjs';

export interface RegistryStateModel {
  items: Array<Registry.RegistryFormViewModelPayload>;
  entryList: Array<Registry.RegistryFormViewModelPayload>;
}

@State<RegistryStateModel>({
  name: 'registry',
  defaults: {
    items: [],
    entryList: [],
  },
})
@Injectable()
export class RegistryState {
  private dataService = inject(RegistryService);

  @Selector()
  static getState(state: RegistryStateModel) {
    return state;
  }

  @Selector()
  static getEntryList(
    state: RegistryStateModel
  ): Array<Registry.RegistryFormViewModelPayload> {
    return state.entryList;
  }

  @Action(GetEntryList)
  getEntryList(ctx: StateContext<RegistryStateModel>) {
    return this.dataService
      .getEntryList()
      .subscribe((response: Array<Registry.RegistryFormViewModelPayload>) => {
        ctx.patchState({ entryList: response });
      });
  }

  @Action(AddNewEntry)
  addNewEntry(
    ctx: StateContext<RegistryStateModel>,
    { payload }: AddNewEntry
  ): Observable<Registry.RegistryFormViewModelPayload> {
    return this.dataService.addNewEntry(payload).pipe(
      tap((response) => {
        const stateModel = ctx.getState();
        ctx.setState({
          ...stateModel,
          items: [...stateModel.items, response],
        });
      })
    );
  }

  @Action(DeleteEntry)
  deleteEntry(
    ctx: StateContext<RegistryStateModel>,
    { payload }: DeleteEntry
  ): Observable<void> {
    return this.dataService.deleteEntry(payload);
  }
}
