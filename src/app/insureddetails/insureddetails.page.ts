import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-insureddetails',
  templateUrl: './insureddetails.page.html',
  styleUrls: ['./insureddetails.page.scss'],
})
export class InsureddetailsPage implements OnInit {

  insuredDetailsForm:any;
  insureDate:any;
  allData:any;

  constructor(public navCtrl: NavController,
   // public datepicker:DatePicker,
    public formbuilders:FormBuilder,
    private router:Router,
    private commonService:CommonService
    //public http:LoginProvider
    ) {
 
      this.commonService.serviceData.subscribe(success=>(this.allData = success));
      this.insuredDetailsForm=formbuilders.group({
        'insured':new FormControl(this.allData.insurer_claim_ref_no , [Validators.required]),
        'address':new FormControl(this.allData.insurer_branch_address, [Validators.required]),
        'contact':new FormControl(this.allData.insurer_branch_contact, [Validators.required]),
        'email':new FormControl(this.allData.insurer_branch_email, [Validators.required]),
        'altContact':new FormControl(null, [Validators.required]),
       
      });

    }

  gotoRepairerdetails() { 
    
     this.router.navigate(['repairerdetails']);
   // this.navCtrl.push(RepairerdetailsPage);
    // this.http.register({
    //   'insured':this.insuredDetailsForm.value.todayregistration,
    //   'address':this.insuredDetailsForm.value.todaysale,
    //   'contact':this.insuredDetailsForm.value.make,
    //   'email':this.insuredDetailsForm.value.policy,
    //   'altContact':this.insuredDetailsForm.value.typepolicy
    // }).subscribe((data:any)=>{
    //   this.insureDate=data;
    //   console.log(this.insureDate);
      
    // });
   
  }
   
  gotoVehiclepolicydetails()  {
    //this.navCtrl.push(VehiclepolicydetailsPage);
    this.router.navigate(['vehiclepolicydetails']);
  }

  ngOnInit() {
  }

}
