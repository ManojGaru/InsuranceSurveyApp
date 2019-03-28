import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JobinwardPage } from './jobinward.page';
import { MatExpansionModule, MatExpansionPanel, MatFormField, MatInputModule, MatFormFieldModule, MatButtonModule, MatSelectModule, MatOptionModule } from '@angular/material';


const routes: Routes = [
  {
    path: '',
    component: JobinwardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatExpansionModule,
   // MatExpansionPanel,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule
  ],
  declarations: [JobinwardPage]
})
export class JobinwardPageModule {}
