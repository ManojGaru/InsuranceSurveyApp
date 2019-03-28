import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistrationPage } from './registration.page';
import { MatInputModule, MatButtonModule, MatFormFieldModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: RegistrationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  declarations: [RegistrationPage]
})
export class RegistrationPageModule {}
