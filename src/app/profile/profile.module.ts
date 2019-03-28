import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    AngularFontAwesomeModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
