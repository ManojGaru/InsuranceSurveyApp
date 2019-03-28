import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Case1PageModule } from './case1/case1.module';
import { VehiclepolicydetailsPageModule } from './vehiclepolicydetails/vehiclepolicydetails.module';
import { InsureddetailsPageModule } from './insureddetails/insureddetails.module';
import { RepairerdetailsPageModule } from './repairerdetails/repairerdetails.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActionDatesPageModule } from './action-dates/action-dates.module';
import { AdmisabilityCheckPageModule } from './admisability-check/admisability-check.module';
import { LoginPageModule } from './login/login.module';
import { RegistrationPageModule } from './registration/registration.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CommonService } from './common.service';
import { Toast } from '@ionic-native/toast/ngx';
import { DocPreviewPageModule } from './doc-preview/doc-preview.module';
import { GlobaldatatransferService } from './globaldatatransfer.service';
import { JobinwardPageModule } from './jobinward/jobinward.module';

@NgModule({
  declarations: [AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    Case1PageModule,
    VehiclepolicydetailsPageModule,
    InsureddetailsPageModule,
    RepairerdetailsPageModule,
    ActionDatesPageModule,
    AdmisabilityCheckPageModule,
    LoginPageModule,
    RegistrationPageModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    DocPreviewPageModule,
    JobinwardPageModule
  ],
  providers: [
    StatusBar,
    Toast,
    SplashScreen,
    CommonService,
    HttpClientModule,
    GlobaldatatransferService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
