import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { RestApiService } from '../rest-api.service';


@Component({
  selector: 'app-jobinward',
  templateUrl: './jobinward.page.html',
  styleUrls: ['./jobinward.page.scss'],
})
export class JobinwardPage implements OnInit {
  vehiclepolicyform: any;
  insuredDetailsForm: any;
  repairerdetailsform: any;
  actuiondateform: any;
  insurerDetailsForm: any;
  insurerList: any = [];
  vehicleClassList: any = [];
  makerList:any = [];
  divionList: any = [];
  company: string = 'insuer'
  branch: string = 'division'
  vehicle_class:string = '4 wheeler';
  make:string = 'audi'

  constructor(private router: Router,
    public formbuilders: FormBuilder,
    private apiService: RestApiService) {

    this.apiService.sendHttpCall('', 'getInuranceCompanyList', 'get').subscribe((success) => {
      console.log(success);
      this.insurerList = success.data;

    }, (err) => {
      console.log(err);

    });

    this.apiService.sendHttpCall('', 'getClassDetails', 'get').subscribe((success) => {
      console.log(success);

      this.vehicleClassList = success.data
    }, (err) => {
      console.log(err);

    })

    this.insurerDetailsForm = this.formbuilders.group({
      'insurer': new FormControl('', [Validators.required]),
      'division': new FormControl('', [Validators.required]),
      'address': new FormControl('', [Validators.required]),
      'contact': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'apointedBy': new FormControl(null, [Validators.required]),
      'manager': new FormControl(null, [Validators.required]),

    })

    this.vehiclepolicyform = this.formbuilders.group({
      'vehicleno': new FormControl('', [Validators.required]),
      'vehicle_class': new FormControl('', [Validators.required]),
      'todayto': new Date().toISOString(),
      'todayfrom': new Date().toISOString(),
      'todayimt': new Date().toISOString(),
      'make': new FormControl('', [Validators.required]),
      'policy': new FormControl('', [Validators.required]),
      'typepolicy': new FormControl('', [Validators.required]),
      'vehicle': new FormControl('', [Validators.required]),
      'idv': new FormControl(null, [Validators.required]),
      'model': new FormControl('', [Validators.required]),
      'coverages': new FormControl('', [Validators.required]),

    });

    this.insuredDetailsForm = formbuilders.group({
      'insured': new FormControl('', [Validators.required]),
      'address': new FormControl('', [Validators.required]),
      'contact': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'altContact': new FormControl('', [Validators.required]),

    });
    this.repairerdetailsform = formbuilders.group({

      'name': new FormControl('', [Validators.required]),
      'address': new FormControl('', [Validators.required]),
      'advisorname': new FormControl('', [Validators.required]),
      'advisorcontact': new FormControl('', [Validators.required]),
      'advisoremail': new FormControl('', [Validators.required]),
      'jobcardno': new FormControl(null, [Validators.required]),
      'branch': new FormControl('', [Validators.required]),
      'estimatedate': new Date().toISOString(),
      'estimateamt': new FormControl('', [Validators.required]),
      'managername': new FormControl('', [Validators.required]),
      'managercontact': new FormControl('', [Validators.required]),
      'managermail': new FormControl('', [Validators.required]),
      'supplimentary': new FormControl(null, [Validators.required]),

    });
    this.actuiondateform = formbuilders.group({
      'dateofloss': new Date().toISOString(),
      'garageinward': new Date().toISOString(),
      'insurer': new Date().toISOString(),
      'police': new Date().toISOString(),
      'action_idv': new FormControl(null, [Validators.required]),
      'reserve': new FormControl('', [Validators.required]),
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

  insurerDetailsFormSubmit() {
    console.log(this.insurerDetailsForm.value);

  }

  vehiclepolicyformSubmit() {
    console.log(this.vehiclepolicyform.value);
    
  }
  insuredDetailsFormSubmit() {

  }
  repairerdetailsformSubmit() {

  }

  actuiondateformSubmit() {

  }

  /**
   * 
   * @param data 
   * @description to get divion dataaccording to the company Id
   */

  getDivision(item: any) {
    //console.log(id);
    this.company = item.company_name;
    var data = new FormData();
    data.append('company_id', item.id);
    this.apiService.sendHttpCall(data, 'getInsuranceCompanyBranch', 'post').subscribe((success) => {
      console.log(success);
      this.divionList = success.data;

    }, (err) => {
      console.log(err);

    })

  }

  /**
   * 
   * @param id 
   * @description to get branch details according to the brach id
   */
  getBrancDetails(item: any) {
    this.branch = item.branch_name;
    var data = new FormData();
    data.append('branch_id', item.id);
    this.apiService.sendHttpCall(data, 'getInsuranceCompanyBranchDetails', 'post').subscribe((success) => {
      console.log(success);


      this.insurerDetailsForm = this.formbuilders.group({
        'insurer': new FormControl(this.company, [Validators.required]),
        'division': new FormControl(this.branch, [Validators.required]),
        'address': new FormControl(success.data.address, [Validators.required]),
        'contact': new FormControl(success.data.phone, [Validators.required]),
        'email': new FormControl(success.data.email, [Validators.required]),
        'apointedBy': new FormControl(null, [Validators.required]),
        'manager': new FormControl(null, [Validators.required]),

      })

    }, (err) => {
      console.log(err);

    })
  }

   /**
    * 
    * @param item 
    * @description to get list of maker according tpo the vehicle class id
    */
  getMaker(item:any){
    this.vehicle_class = item.class;
    var data = new FormData();
    data.append('class_id',item.id);
    this.apiService.sendHttpCall(data,'getMakeList','post').subscribe((success)=>{
      console.log(success);
      this.makerList = success.data;
    },(err)=>{
      console.log(err);
      
    })
  }
  /**
   * 
   * @param item 
   * @description to get maker details and model of vehicle according to the maker
   */
  getMakerDetails(item:any){
    this.make = item.make
    var data = new FormData();
    data.append('make_id',item.id);
    this.apiService.sendHttpCall(data,'getModelList','post').subscribe((success)=>{
      console.log(success);
      this.vehiclepolicyform = this.formbuilders.group({
        'vehicleno': new FormControl('', [Validators.required]),
        'vehicle_class': new FormControl(this.vehicle_class, [Validators.required]),
        'todayto': new Date().toISOString(),
        'todayfrom': new Date().toISOString(),
        'todayimt': new Date().toISOString(),
        'make': new FormControl(this.make, [Validators.required]),
        'policy': new FormControl('', [Validators.required]),
        'typepolicy': new FormControl('', [Validators.required]),
        'vehicle': new FormControl('', [Validators.required]),
        'idv': new FormControl(null, [Validators.required]),
        'model': new FormControl(success.data[0].model, [Validators.required]),
        'coverages': new FormControl('', [Validators.required]),
  
      });
      
    },(err)=>{
      console.log(err);
      
    })
  }

  ngOnInit() {
  }

  gotoCase1() {
    this.router.navigate(['vehiclepolicydetails'])
  }
  gotoCase2() {
    this.router.navigate(['case2'])
  }

}
