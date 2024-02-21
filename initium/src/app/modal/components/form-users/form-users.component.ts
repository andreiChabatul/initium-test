import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { REGEX_NUMBER } from 'src/app/button/const';
import { buttonsType, user } from 'src/app/types';
import { AppStore } from 'src/app/types/store';
import { saveUser } from 'src/store/actions/usersActions';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.scss']
})
export class FormUsersComponent implements OnInit {

  @Input() user: user | undefined;
  usersForm: FormGroup;
  buttons: buttonsType[] = ['cancel', 'save'];

  constructor(private fb: FormBuilder, private store: Store<AppStore>) {

  }
  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {

    this.usersForm = this.fb.group({
      name: [this.user?.name, [Validators.required, Validators.minLength(2)]],
      surname: [this.user?.surname, [Validators.required, Validators.minLength(2)]],
      email: [this.user?.email, [Validators.required, Validators.email]],
      phone: [this.user?.phone, [Validators.required, Validators.pattern(REGEX_NUMBER)]],
    });
  }

  get _email() {
    return this.usersForm.get('email');
  }

  get _name() {
    return this.usersForm.get('name');
  }

  get _surname() {
    return this.usersForm.get('surname');
  }

  get _phone() {
    return this.usersForm.get('phone');
  }

  get disableField(): boolean {
    return !(this._email?.value && this._name?.value && this._surname?.value && this._phone?.value)
  }



  onSubmit(): void {
    if (this.usersForm.invalid) {
      this.usersForm.markAllAsTouched()
      return;
    }
    const userValue = this.usersForm.value;
    this.store.dispatch(saveUser({
      payload: {
        user:
        {
          name: userValue['name'],
          surname: userValue['surname'],
          email: userValue['email'],
          phone: userValue['phone'],
        },
        newUser: Boolean(this.user)
      }
    }))
  }



}
