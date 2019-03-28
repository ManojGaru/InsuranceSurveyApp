import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { RestApiService } from '../rest-api.service';
import { GlobaldatatransferService } from '../globaldatatransfer.service';

@Component({
  selector: 'app-action-dates',
  templateUrl: './action-dates.page.html',
  styleUrls: ['./action-dates.page.scss'],
})
export class ActionDatesPage implements OnInit {


  actuiondateform: any;
  allData: any;
  passDataAcationDate: any;
  passData: any;
  reserve:string='';
  constructor(public navCtrl: NavController,
    public formbuilders: FormBuilder,
    private router: Router,
    private commonService: CommonService,
    private apiService: RestApiService,
    private global: GlobaldatatransferService

    //public http:LoginProvider
  ) {
    this.global.getvalue().then((success: any) => {
      var data = new FormData();
      console.log(success.data);

      data.append('class_id', success.data.vehicle_class_id);
      data.append('amount_range', success.data.estimate_amount);
      this.apiService.sendHttpCall(data, 'getStageAmount', 'post').subscribe(success => {
        console.log(success);
        this.reserve = success.data.stage;
      }, err => {
        console.log(err);

      });
    }, err => {
      console.log(err);

    });



    this.commonService.submitserviceData.subscribe(success => (this.passData = success));
    this.commonService.serviceData.subscribe(success => (this.allData = success));


    this.actuiondateform = formbuilders.group({
      'dateofloss': new Date().toISOString(),
      'garageinward': new Date().toISOString(),
      'insurer': new Date().toISOString(),
      'police': new Date().toISOString(),
      'action_idv': new FormControl(null, [Validators.required]),
      'reserve': new FormControl(this.reserve, [Validators.required]),
      'invoicedate': new Date().toISOString(),
      'submiting': new FormControl(null, [Validators.required]),
      'appointed': new Date().toISOString(),
      'survey': new Date().toISOString(),
      'preliminary': new Date().toISOString(),
      'approval': new Date().toISOString(),
      'keep': new Date().toISOString(),
      'cut': new Date().toISOString(),
      'before': new Date().toISOString(),
      'ri_insp': new Date().toISOString()


    });
  }

  gotoadmisabilitycheak() {
    var data = {
      job_create_insurer_id: this.passData.job_create_insurer_id,
      date_of_registration: this.passData.date_of_registration,
      date_of_sale: this.passData.date_of_sale,
      idv: this.passData.idv,
      job_card_no: this.passData.job_card_no,
      scope_for_supplementary: this.passData.scope_for_supplementary,
      //action_idv:this.actuiondateform.value.action_idv,
      preliminary_submit_date: this.actuiondateform.value.preliminary,
      approval_remind_date: this.actuiondateform.value.approval,
      keep_open_remind_date: this.actuiondateform.value.keep,
      cut_open_remind_date: this.actuiondateform.value.cut,
      before_paint_remind_date: this.actuiondateform.value.before,
      insp_remind_date: this.actuiondateform.value.ri_insp,
      expected_invoice_date: this.actuiondateform.value.invoicedate,
      expected_fsr_submit: this.actuiondateform.value.submiting,
      reserve:this.reserve
    }


    var promise = new Promise((resolve, reject) => {
      resolve(this.commonService.changesubmitData(data))
    });
    promise.then(success => {
      // this.dismiss()
      this.router.navigate(['admisability-check']);
    })

    // this.navCtrl.push(AdmisabilityCheakPage);

  }



  gotorepairerdetails() {
    // this.navCtrl.push(RepairerdetailsPage);
    this.router.navigate(['repairerdetails']);
  }

  ngOnInit() {
  }

}
