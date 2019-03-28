import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdmisabilityCheckPage } from './admisability-check.page';
import { MatInputModule, MatFormFieldModule, MatDatepickerModule, MatButtonModule, MatNativeDateModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: AdmisabilityCheckPage
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
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule
  ],
  declarations: [AdmisabilityCheckPage]
})
export class AdmisabilityCheckPageModule {}
