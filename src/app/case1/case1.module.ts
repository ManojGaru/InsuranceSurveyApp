import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { IonicModule } from '@ionic/angular';

import { Case1Page } from './case1.page';

const routes: Routes = [
  {
    path: '',
    component: Case1Page
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
  declarations: [Case1Page]
})
export class Case1PageModule {}
