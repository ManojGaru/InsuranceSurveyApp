import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { NavController, LoadingController } from '@ionic/angular';
//import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { GlobaldatatransferService } from '../globaldatatransfer.service';
@Component({
  selector: 'app-vehiclepolicydetails',
  templateUrl: './vehiclepolicydetails.page.html',
  styleUrls: ['./vehiclepolicydetails.page.scss'],
})
export class VehiclepolicydetailsPage implements OnInit {

 
  vehiclepolicyform:any;
  vehicledata:any;

  todayregistration:any;
  todaysale:any;
  todayto:any;
  todayfrom:any;
  todayimt:any;
  allData:any;
  passData:any;
  isLoading:boolean = false;
  showwheniwant: boolean=false;

  constructor(public navCtrl: NavController,
    //public datepicker:DatePicker,
    public formbuilders:FormBuilder,
    private router:Router,
    public loadingCtrl:LoadingController,
    private commonService:CommonService,
    private global:GlobaldatatransferService
    //public http:LoginProvider
    ) {
      this.commonService.submitserviceData.subscribe(success=>(this.passData = success));
      this.commonService.serviceData.subscribe(success=>(this.allData = success));
      
      setTimeout(()=>{
        console.log(this.allData)
//this.allData=this.global.get();
        this.vehiclepolicyform = this.formbuilders.group({
          'todayregistration': new Date().toISOString(),
          'todaysale':new Date().toISOString(),
          'todayto':new Date().toISOString(),
          'todayfrom':new Date().toISOString(),
          'todayimt':new Date().toISOString(),
          'make':new FormControl(this.allData.make_name, [Validators.required]),
          'policy':new FormControl(this.allData.police_details, [Validators.required]),
          'typepolicy':new FormControl(this.allData.types_of_policy,[Validators.required]),
          'vehicle':new FormControl(this.allData.class_name,[Validators.required]),
          'idv':new FormControl(null,[Validators.required]),
          'model':new FormControl(this.allData.model_name,[Validators.required]),
          'coverages':new FormControl(this.allData.coverages,[Validators.required]),
          
        });
        this.showwheniwant=true;
      },1000)
     
  
 // this.todayregistration = new Date().toISOString();

  //this.todaysale = new Date().toISOString();

 // this.todayto = new Date().toISOString();

 // this.todayfrom = new Date().toISOString();

 // this.todayimt = new Date().toISOString();

 //console.log(this.allData);
   
  }

  async present() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
    }).then(a => {
    //  setTimeout(() => {
      a.present().then(() => {
       // console.log('presented');

      
      });
  
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() =>{
     
      console.log('dismissed');
    });
  }

  gotoinsureddetails() {
    var data = {
      job_create_insurer_id :this.passData.job_create_insurer_id,
      date_of_registration:this.vehiclepolicyform.value.todayregistration,
      date_of_sale:this.vehiclepolicyform.value.todaysale,
      idv:this.vehiclepolicyform.value.idv
    }
   
    var promise = new Promise((resolve, reject) => {
      resolve(this.commonService.changesubmitData(data))
    });
    promise.then(success=>{
     // this.dismiss()
     this.router.navigate(['insureddetails']);
    })
   
    // this.vehiclepolicyform = this.formbuilders.group({
    //   'todayregistration': new Date().toISOString(),
    //   'todaysale':new Date().toISOString(),
    //   'todayto':new Date().toISOString(),
    //   'todayfrom':new Date().toISOString(),
    //   'todayimt':new Date().toISOString(),
    //   'make':new FormControl(this.allData.make_name, [Validators.required]),
    //   'policy':new FormControl(this.allData.police_details, [Validators.required]),
    //   'typepolicy':new FormControl(null,[Validators.required]),
    //   'vehicle':new FormControl(null,[Validators.required]),
    //   'idv':new FormControl(null,[Validators.required]),
    //   'model':new FormControl(this.allData.model_name,[Validators.required]),
    //   'coverages':new FormControl(null,[Validators.required]),
      
    // });
  }
  gotocase1(){
    this.router.navigate(['case1']);
  }

  ngOnInit() {
  }

}
