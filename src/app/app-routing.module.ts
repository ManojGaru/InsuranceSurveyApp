import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'case1', loadChildren: './case1/case1.module#Case1PageModule' },
  { path: 'vehiclepolicydetails', loadChildren: './vehiclepolicydetails/vehiclepolicydetails.module#VehiclepolicydetailsPageModule' },
  { path: 'insureddetails', loadChildren: './insureddetails/insureddetails.module#InsureddetailsPageModule' },
  { path: 'repairerdetails', loadChildren: './repairerdetails/repairerdetails.module#RepairerdetailsPageModule' },
  { path: 'action-dates', loadChildren: './action-dates/action-dates.module#ActionDatesPageModule' },
  { path: 'admisability-check', loadChildren: './admisability-check/admisability-check.module#AdmisabilityCheckPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'editprofile', loadChildren: './editprofile/editprofile.module#EditprofilePageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'case2', loadChildren: './case2/case2.module#Case2PageModule' },
  { path: 'foursection', loadChildren: './foursection/foursection.module#FoursectionPageModule' },
  { path: 'jobinward', loadChildren: './jobinward/jobinward.module#JobinwardPageModule' },
  { path: 'profile-details', loadChildren: './profile-details/profile-details.module#ProfileDetailsPageModule' },
  { path: 'preview', loadChildren: './preview/preview.module#PreviewPageModule' },
  { path: 'doc-preview', loadChildren: './doc-preview/doc-preview.module#DocPreviewPageModule' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
