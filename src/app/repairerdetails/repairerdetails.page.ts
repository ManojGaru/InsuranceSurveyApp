import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { submitData } from '../models/common';

@Component({
  selector: 'app-repairerdetails',
  templateUrl: './repairerdetails.page.html',
  styleUrls: ['./repairerdetails.page.scss'],
})
export class RepairerdetailsPage implements OnInit {

  repairerdetailsform: any;
  estimatedate: any;
  repairerdata: any;
  allData: any;
  passData: any = new Subject<submitData>();
  constructor(public navCtrl: NavController,
    public formbuilderr: FormBuilder,
    private router: Router,
    private commonService: CommonService
    //public http:LoginProvider
  ) {
    this.commonService.submitserviceData.subscribe(success => (this.passData = success));
    this.commonService.serviceData.subscribe(success => (this.allData = success));

    this.repairerdetailsform = formbuilderr.group({

      'name': new FormControl(this.allData.company_name, [Validators.required]),
      'address': new FormControl(this.allData.address, [Validators.required]),
      'advisorname': new FormControl(this.allData.advisor_name, [Validators.required]),
      'advisorcontact': new FormControl(this.allData.advisor_contact, [Validators.required]),
      'advisoremail': new FormControl(this.allData.advisor_email, [Validators.required]),
      'jobcardno': new FormControl(null, [Validators.required]),
      'branch': new FormControl(this.allData.branch_name, [Validators.required]),
      'estimatedate': new Date().toISOString(),
      'estimateamt': new FormControl(this.allData.estimate_amount, [Validators.required]),
      'managername': new FormControl(this.allData.manager_name, [Validators.required]),
      'managercontact': new FormControl(this.allData.manager_contact, [Validators.required]),
      'managermail': new FormControl(this.allData.manager_email, [Validators.required]),
      'supplimentary': new FormControl(null, [Validators.required]),

    });

    this.estimatedate = new Date().toISOString();
  }

  gotoActiondate() {

    var data = {
      job_create_insurer_id: this.passData.job_create_insurer_id,
      date_of_registration: this.passData.date_of_registration,
      date_of_sale: this.passData.date_of_sale,
      idv: this.passData.idv,
      job_card_no: this.repairerdetailsform.value.jobcardno,
      scope_for_supplementary: this.repairerdetailsform.value.supplimentary

    }


    var promise = new Promise((resolve, reject) => {
      resolve(this.commonService.changesubmitData(data))
    });
    promise.then(success => {
      // this.dismiss()
      this.router.navigate(['action-dates'])
    })


    // this.navCtrl.push(ActiondatePage);
    // this.http.register ({

    //   'name':this.repairerdetailsform.value.name,
    //   'address':this.repairerdetailsform.value.address,
    //   'advisorname':this.repairerdetailsform.value.advisorname,
    //   'advisorcontact':this.repairerdetailsform.value.advisorcontact,
    //   'advisoremail':this.repairerdetailsform.value.advisoremail,
    //   'jobcardno':this.repairerdetailsform.value.jobcardno,
    //   'branch':this.repairerdetailsform.value.branch,
    //   'estimatedate':this.repairerdetailsform.value.estimatedate,
    //   'estimateamt':this.repairerdetailsform.value.estimateamt,
    //   'managername':this.repairerdetailsform.value.managername,
    //   'managercontact':this.repairerdetailsform.value.managercontact,
    //   'managermail':this.repairerdetailsform.value.managermail,
    //   'supplimentary':this.repairerdetailsform.value.supplimentary

    // }).subscribe((data:any)=>{
    //   this.repairerdata=data;
    //   console.log(this.repairerdata);
    //   this.navCtrl.push(ActiondatePage);
    // });
  }





  gotoInsureddetails() {
    this.router.navigate(['insureddetails']);
  }

  ngOnInit() {
  }

}
