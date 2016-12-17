import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  template: `
    {{ step }}
    <form [formGroup]="authForm">

      <div *ngIf="step == 'step1'">
        <div>
          <label>Email</label>
          <input type="email" formControlName="email">
        </div>
        <div *ngIf="formErrors.email" class="alert alert-danger">
          {{ formErrors.email }}
        </div>
        <button (click)="next()" type="submit">Next</button>
      </div>

      <div *ngIf="step == 'step2'">
        <div>
          <label>Password</label>
          <input type="password" formControlName="password">
        </div>
        <div *ngIf="formErrors.password" class="alert alert-danger">
          {{ formErrors.password }}
        </div>
        <div>
          <button (click)="back()" type="submit">back</button>
          <button type="submit">Auth</button>
        </div>
      </div>

    </form>
  `,
  styles: []
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;

  user;
  step;

  formErrors = {
    'email': '',
    'password': ''
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.user = {};
    this.buildForm();
    this.step = 'step1';
  }

  buildForm() {
    this.authForm = this.fb.group({
      'email': [this.user.email, [
          Validators.required
        ]
      ],
      'password': [this.user.password, [
          Validators.required,
          Validators.minLength(7)
        ]
      ]
    });

    this.authForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.authForm) { return; }
    const form = this.authForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.touched && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  validationMessages = {
    'email': {
      'required': 'Email is required.'
    },
    'password': {
      'required': 'Password is required.',
      'minlength': 'Name must be at least 4 characters long.',
      'maxlength': 'Name cannot be more than 24 characters long.',
    }
  };

  next() {
    this.step = 'step2'
  }

  back() {
    this.step = 'step1'
  }

}
