import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.scss']
})
export class FormUsersComponent {

  usersForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.createForm();
  }

  private createForm(): void {
    this.usersForm = this.fb.group({
      name: [, [Validators.required, Validators.minLength(2)]],
      surname: [, [Validators.required, Validators.minLength(2)]],
      email: [, [Validators.required, Validators.email]],
      phone: [, [Validators.required]],

    });
  }


  onSubmit(): void {
    if (this.usersForm.invalid) {
      this.usersForm.markAllAsTouched()
      return;
    }
  }
}
