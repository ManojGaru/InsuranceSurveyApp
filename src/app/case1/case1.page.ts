import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';
import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import { GlobaldatatransferService } from '../globaldatatransfer.service';

@Component({
  selector: 'app-case1',
  templateUrl: './case1.page.html',
  styleUrls: ['./case1.page.scss'],
})
export class Case1Page implements OnInit,OnDestroy {
  cred: any;
  formSearch: any;
  searchData: any;
  isLoading: boolean = false;
  isEnabled: true;
  constructor(public navCtrl: NavController,
    private router: Router,
    public apiService: RestApiService,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    private nativeStorage: NativeStorage,
    private comonService: CommonService,
    private global: GlobaldatatransferService
  ) {
    this.formSearch = new FormGroup({
      'insurer_claim_ref_no': new FormControl(''),
      'vehicle_no': new FormControl(''),
      'jobId': new FormControl('')
    });

    this.nativeStorage.getItem('myItem').then(
      data => this.cred = data,
      error => console.error(error)
    )
    console.log(this.cred);

    // this.gotodetails()


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
    return await this.loadingCtrl.dismiss();
  }


  search() {



    console.log("form data", this.formSearch.value);


    var data = new FormData();
    // data.append("user_id",this.cred.id);
    //  data.append("token",this.cred.token);
    data.append("insurer_claim_ref_no", this.formSearch.value.insurer_claim_ref_no);
    data.append("vehicle_no", this.formSearch.value.vehicle_no);
    data.append("jobId", this.formSearch.value.jobId);

    if (this.formSearch.value.insurer_claim_ref_no === '' && this.formSearch.value.vehicle_no === '' && this.formSearch.value.jobId === '') {
      this.comonService.message('Please Provide Any Data');

    }
    else {
      this.present();
      this.apiService.sendHttpCall(data, 'search', 'post').subscribe(success => {
        this.searchData = success.data;
        if (success.status == '200') {
          setTimeout(() => {
            this.dismiss();
            
          }, 1000);
          
         // this.comonService.changeData(success.data)
         // this.router.navigate(['vehiclepolicydetails']);
          this.gotoVehiclepolicydetails();
        } else {
          this.comonService.message('Enter a valid Input');
          setTimeout(() => {
            this.dismiss();
          }, 1000);
        }

      }, (err) => {
        console.log(err);
        setTimeout(() => {
          this.dismiss();
        }, 1000);

      });
    }



  }

  gotoVehiclepolicydetails() {
    var model = {
      vehicle_class_id: this.searchData.vehicle_class_id,
      job_create_insurer_id: this.searchData.job_create_insurer_id,
      estimate_amount: this.searchData.estimate_amount
    }
    this.global.setvalue(model);
    this.dismiss()
    var job_create_insurer_id = this.searchData.job_create_insurer_id;
    var promise = new Promise((resolve, reject) => {
      resolve(this.comonService.changeData(this.searchData));
      this.global.setvalue1(this.searchData);
      resolve(this.comonService.changesubmitData(job_create_insurer_id));
    });
    promise.then(success => {
      this.dismiss()
      this.router.navigate(['vehiclepolicydetails']);
    })
    // this.navCtrl.navigateForward('vehiclepolicydetails');

  }



  ngOnInit() {
    console.log('ionViewDidLoad Case1Page');
  }
  ngOnDestroy(){
    this.dismiss();
  }

}
