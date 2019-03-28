import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgProgressModule } from 'ngx-progressbar';

import { MatInputModule, MatFormFieldModule, MatDatepickerModule, MatButtonModule, MatNativeDateModule } from '@angular/material';


import { Case2Page } from './case2.page';
import { Camera } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

const routes: Routes = [
  {
    path: '',
    component: Case2Page
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
    NgProgressModule
  ],
  declarations: [Case2Page],
  providers:[Camera,ImagePicker,FileChooser,FilePath,File,FileTransfer,FileOpener]
})
export class Case2PageModule {}
