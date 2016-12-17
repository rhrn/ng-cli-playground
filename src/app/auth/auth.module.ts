import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';

import routes from './auth.routes';

@NgModule({
  imports: [ CommonModule, routes, ReactiveFormsModule ],
  declarations: [ AuthComponent ]
})
export class AuthModule{}
