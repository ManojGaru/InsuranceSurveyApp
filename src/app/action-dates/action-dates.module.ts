import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActionDatesPage } from './action-dates.page';
import { MatInputModule, MatFormFieldModule, MatDatepickerModule, MatButtonModule, MatNativeDateModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: ActionDatesPage
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
  declarations: [ActionDatesPage]
})
export class ActionDatesPageModule {}
