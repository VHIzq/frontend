import { Component, inject } from '@angular/core';
import { SignupComponent } from '../../components/signup/signup.component';
import { SignupModel } from '../../components/signup/signup.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { CreateEntryUser } from '../../../store/sign/sign.actions';

@Component({
  selector: 'lra-signup-view',
  imports: [SignupComponent, CommonModule],
  templateUrl: './signup.component.view.html',
  styleUrl: './signup.component.view.scss',
})
export class SignupComponentView {
  private store = inject(Store);
  handleOnSignup(formData: SignupModel.EntryUser) {
    console.log('formData', formData);
    this.store.dispatch(new CreateEntryUser(formData));
  }
}
