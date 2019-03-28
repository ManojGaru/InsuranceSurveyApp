import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { RestApiService } from '../rest-api.service';
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-admisability-check',
  templateUrl: './admisability-check.page.html',
  styleUrls: ['./admisability-check.page.scss'],
})
export class AdmisabilityCheckPage implements OnInit {
  isLoading:boolean = false;
  passData:any;
  constructor(public navCtrl: NavController,
    private router:Router,
    private commonService:CommonService,
    private apiService:RestApiService,
    private loadingCtrl:LoadingController
    ) {
      this.commonService.submitserviceData.subscribe(success=>(this.passData = success));
      console.log(this.passData,'kkkkkkkkkkkkkkkkkkk');
  }
  async present() {
    
    this.isLoading = true;
    
    return await this.loadingCtrl.create({
      message: 'Data Saved'
    }).then(a => {
     // setTimeout(() => {
      a.present().then(() => {
       // console.log('presented');

      
      });
  
    });
 
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() =>{
      this.router.navigate(['case2']);
      console.log('dismissed');
    });
  }


  gotocase2() {
    var datePipe = new DatePipe("en-US");
    var d = datePipe.transform("2019-03-26T13:59:20.221Z");
    console.log(d);
    
    this.present();

    var data = new FormData();
    data.append('job_create_insurer_id', this.passData.job_create_insurer_id);
    data.append('date_of_registration',this.passData.date_of_registration);
    data.append('date_of_sale',datePipe.transform(this.passData.date_of_sale, 'yyyy-MM-dd'));
    data.append('idv',this.passData.idv);
    data.append('job_card_no',this.passData.job_card_no);
    data.append('scope_for_supplementary',this.passData.scope_for_supplementary);
   // data.append('action_idv',this.passData.action_idv);
    data.append('preliminary_submit_date',datePipe.transform(this.passData.preliminary_submit_date, 'yyyy-MM-dd'));
    data.append('approval_remind_date', datePipe.transform(this.passData.approval_remind_date,'yyyy-MM-dd'));
    data.append('keep_open_remind_date',datePipe.transform(this.passData.cut_open_remind_date,'yyyy-MM-dd'));
    data.append('cut_open_remind_date',datePipe.transform(this.passData.keep_open_remind_date,'yyyy-MM-dd'));
    data.append('before_paint_remind_date',datePipe.transform(this.passData.before_paint_remind_date,'yyyy-MM-dd'));
    data.append('insp_remind_date',datePipe.transform(this.passData.insp_remind_date,'yyyy-MM-dd'));
    data.append('expected_invoice_date',datePipe.transform(this.passData.expected_invoice_date,'yyyy-MM-dd'));
    data.append('expected_fsr_submit',this.passData.expected_fsr_submit);
    data.append('reserve',this.passData.reserve);
    //console.log(data,'fffffffffffffffffffffffff');
    
    this.apiService.sendHttpCall(data ,'saveJobInwardData','post').subscribe(success=>{
      console.log(success);
      if(success.status === "200"){
        setTimeout( () => {
          this.dismiss();
      }, 1000);
        //this.storage.set
        // this.storage.set("user_id",success.data.id)
        // this.storage.set("token",success.data.token)

       
      }else{
        setTimeout( () => {
          this.dismiss();
      }, 1000);
       
      }
     
    },err=>{
      console.log(err);
      setTimeout( () => {
        this.dismiss();
    }, 1000);
      
    })
  }
  gotoActiondate() {
    //this.present();

  
   

     this.router.navigate(['action-dates']);
  }

  ngOnInit() {
  }

}
