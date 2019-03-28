import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WelcomePage } from './welcome.page';
import { MatTabsModule, MatCardModule, MatTableModule, MatDividerModule, MatListModule, MatIconModule, MatBadgeModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

const routes: Routes = [
  {
    path: '',
    component: WelcomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    AngularFontAwesomeModule,
    MatIconModule,MatBadgeModule
  ],
  declarations: [WelcomePage]
})
export class WelcomePageModule {}
