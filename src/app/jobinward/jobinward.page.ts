import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { RestApiService } from '../rest-api.service';
import { DatePipe } from '@angular/common';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { CommonService } from '../common.service';
import { AlertController } from '@ionic/angular';


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
  makerList: any = [];
  divionList: any = [];
  company: string = 'insuer'
  branch: string = 'division'
  vehicle_class: string = '4 wheeler';
  make: string = 'audi'
  repairerList: any;
  repairerBranchList: any;
  repairerBranchAdvisorList: any;
  branchManagerList: any;
  makerId: any;
  companyList: any;
  managerList: any;
  insurerComapnyId: any;
  insurerBranchId: any;
  vehicle_class_id: any;
  vehicle_make_id: any;
  vehicle_model_id: any;
  repairer_company_id: any;
  repairer_branch_id: any;
  advisor_id: any;
  manager_id: any;
  companId: any;
  managerId: any;
  claim_ref_no: any;
  jobTypeList: any;
  jobTypeId: any;
  insurerBtn: boolean = false;
  vehicleBtn: boolean = false;
  insuredBtn: boolean = false;
  repairerBtn: boolean = false;
  actionDatesBtn: boolean = false;
  finalBtn: boolean = false;
  alert: any;

  constructor(private router: Router,
    public formbuilders: FormBuilder,
    private apiService: RestApiService,
    private nativeStorage: NativeStorage,
    private comonService:CommonService,
    public alertController: AlertController) {

    this.apiService.sendHttpCall('', 'getInuranceCompanyList', 'get').subscribe((success) => {
      // console.log(success);
      this.insurerList = success.data;

    }, (err) => {
      console.log(err);

    });

    this.apiService.sendHttpCall('', 'getClassDetails', 'get').subscribe((success) => {
      //  console.log(success);

      this.vehicleClassList = success.data



    }, (err) => {
      console.log(err);

    })

    this.apiService.sendHttpCall('', 'getRepairerList', 'get').subscribe((success) => {
      //console.log(success);
      this.repairerList = success.data;
    }, (err) => {
      console.log(err);

    })

    this.apiService.sendHttpCall('', 'getCompanyList', 'get').subscribe((success) => {
      // console.log(success);
      this.companyList = success.data;

    }, (err) => {
      console.log(err);

    })
    this.apiService.sendHttpCall('', 'getManagerList', 'get').subscribe((success) => {
      //  console.log(success);
      this.managerList = success.data;

    }, (err) => {
      console.log(err);

    })


    this.apiService.sendHttpCall('', 'getJobTypeList', 'get').subscribe((success) => {
      //   console.log(success);
      this.jobTypeList = success.data
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
      'todayimt': new FormControl(null, [Validators.required]),
      'make': new FormControl('', [Validators.required]),
      'policy': new FormControl('', [Validators.required]),
      'typepolicy': new FormControl('', [Validators.required]),

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
      // 'jobcardno': new FormControl(null, [Validators.required]),
      'repairerbranch': new FormControl('', [Validators.required]),
      //'estimatedate': new Date().toISOString(),
      'estimateamt': new FormControl('', [Validators.required]),
      'managername': new FormControl('', [Validators.required]),
      'managercontact': new FormControl('', [Validators.required]),
      'managermail': new FormControl('', [Validators.required]),
      // 'supplimentary': new FormControl(null, [Validators.required]),

    });
    this.actuiondateform = formbuilders.group({
      'dateofloss': new Date().toISOString(),
      'garageinward': new Date().toISOString(),
      'intimation_insurer': new Date().toISOString(),
      'intimation_police': new Date().toISOString(),

      'appointed': new Date().toISOString(),
      'survey': new Date().toISOString(),
      'estimatedate': new Date().toISOString(),
      'estimateamount': new FormControl('', [Validators.required]),
      'stage': new FormControl('', [Validators.required]),



    });
  }

  insurerDetailsFormSubmit() {
    console.log(this.insurerDetailsForm.value);
    this.insurerBtn = true;
  }

  vehiclepolicyformSubmit() {
    console.log(this.vehiclepolicyform.value);
    this.vehicleBtn = true;
  }
  insuredDetailsFormSubmit() {
    console.log(this.insuredDetailsForm.value);
    this.insuredBtn = true;
  }
  repairerdetailsformSubmit() {
    console.log(this.repairerdetailsform.value);
    this.repairerBtn = true;
  }

  actuiondateformSubmit() {
    console.log(this.actuiondateform.value);
    this.actionDatesBtn = true;

  }

  /**
   * 
   * @param data 
   * @description to get divion dataaccording to the company Id
   */

  getDivision(item: any) {
    //console.log(id);
    this.company = item.company_name;
    this.insurerComapnyId = item.id

    var data = new FormData();
    data.append('company_id', item.id);
    this.apiService.sendHttpCall(data, 'getInsuranceCompanyBranch', 'post').subscribe((success) => {
      // console.log(success);
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
    this.insurerBranchId = item.id;
    var data = new FormData();
    data.append('branch_id', item.id);
    this.apiService.sendHttpCall(data, 'getInsuranceCompanyBranchDetails', 'post').subscribe((success) => {
      // console.log(success);


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
  getMaker(item: any) {
    this.vehicle_class_id = item.id;
    this.makerId = item.id;
    this.vehicle_class = item.class;
    var data = new FormData();
    data.append('class_id', item.id);
    this.apiService.sendHttpCall(data, 'getMakeList', 'post').subscribe((success) => {
      // console.log(success);
      this.makerList = success.data;
    }, (err) => {
      console.log(err);

    })
  }
  /**
   * 
   * @param item 
   * @description to get maker details and model of vehicle according to the maker
   */
  getMakerDetails(item: any) {
    this.vehicle_make_id = item.id;
    this.make = item.make
    var data = new FormData();
    data.append('make_id', item.id);
    this.apiService.sendHttpCall(data, 'getModelList', 'post').subscribe((success) => {
      // console.log(success);
      this.vehicle_model_id = success.data[0].id;

      this.vehiclepolicyform.controls['vehicle_class'].setValue(this.vehicle_class);
      this.vehiclepolicyform.controls['model'].setValue(success.data[0] ? success.data[0].model : '');

    }, (err) => {
      console.log(err);

    })
  }
  /**
   * 
   * @param item 
   * @description yo get repairer branch list according to the repairer company id
   */
  getRepairerBranchList(item: any) {
    this.repairer_company_id = item.id;
    var data = new FormData();
    data.append('repairer_company_id', item.id);
    this.apiService.sendHttpCall(data, 'getRepairerBranchList', 'post').subscribe((success) => {
      // console.log(success);
      this.repairerBranchList = success.data;
    }, (err) => {
      console.log(err);

    })
  }

  /**
   * 
   * @param item 
   * @description to get branch advisor list according to the branch id
   */
  getRepairerBranchAdvisorList(item: any) {
    this.getBranchMangers(item.id)
    this.repairer_branch_id = item.id;
    var data = new FormData();
    data.append('repairer_branch_id', item.id)
    this.apiService.sendHttpCall(data, 'getRepairerBranchAdvisor', 'post').subscribe((success) => {
      // console.log(success);
      this.repairerBranchAdvisorList = success.data;

    }, (err) => {
      console.log(err);

    })
  }

  /**
   * 
   * @param item 
   * @description to get advisor details according to the advisor id
   */

  getRepairerBranchAdvisorDetails(item: any) {
    this.advisor_id = item.id;
    // console.log(item);
    var data = new FormData();
    data.append('advisor_id', item.id);
    this.apiService.sendHttpCall(data, 'getAdvisorDetails', 'post').subscribe((success) => {
      console.log(success);

      //this.repairerdetailsform.FormControl['advisorcontact'].setvaal

      this.repairerdetailsform.controls['advisorcontact'].setValue(success.data[0].advisor_contact);
      this.repairerdetailsform.controls['advisoremail'].setValue(success.data[0].advisor_email);
    }, (err) => {
      console.log(err);

    })

  }
  /**
   * 
   * @param id 
   * @description get list of managers according to the branch id
   */
  getBranchMangers(id: any) {
    var data = new FormData();
    data.append('repairer_branch_id', id);
    this.apiService.sendHttpCall(data, 'getRepairerBranchManager', 'post').subscribe((success) => {
      //console.log(success);
      this.branchManagerList = success.data;
    }, (err) => {
      console.log(err);

    })
  }
  /**
   * 
   * @param item 
   * @description to get branch manager details
   */
  getRepairerBranchManagerDetails(item: any) {
    //console.log(item);
    this.manager_id = item.id;
    var data = new FormData();
    data.append('manager_id', item.id);
    this.apiService.sendHttpCall(data, 'getManagerDetails', 'post').subscribe((success) => {

      //console.log(success);
      this.repairerdetailsform.controls['managercontact'].setValue(success.data[0].manager_contact);
      this.repairerdetailsform.controls['managermail'].setValue(success.data[0].manager_email);

    }, (err) => {
      console.log(err);

    })

  }

  /**
   * 
   * @param item 
   * @description to get stage result according to the estimate amount
   */
  getSageResult(item: any) {
    console.log(item);

    var data = new FormData();
    data.append('class_id', this.makerId);
    data.append('amount', item)
    this.apiService.sendHttpCall(data, 'getStageList', 'post').subscribe((success) => {
      console.log(success);
      this.actuiondateform.controls['stage'].setValue(success.data.stage);
    }, (err) => {
      console.log(err);

    })
  }
  /**
   * 
   * @param item 
   * @description get selected company Id
   */

  selectCompany(item: any) {
    //console.log(item);
    this.companId = item.id;


  }

  /**
   * 
   * @param item 
   * @description get selected manager id
   */

  selectManger(item: any) {
    //console.log(item);
    this.managerId = item.id;

  }


  /**
   * 
   * @param item 
   * @description get selected job type Id
   */

  selectJobType(item: any) {
    this.jobTypeId = item.id;
  }

  getRefNo(item: any) {
    console.log(item);
    if (item != '') {
      this.finalBtn = true;
    }

  }

  messageSubmit(msg:string){
    this.alert =  this.alertController.create({
      header: 'ALERT',
      message: msg,
      buttons:[
        //{
      //  text: "No"
      //},
      {
        text:"OK",
        handler:()=>{

          // this.menu.close();
          // this.nav.navigateRoot(['login']);
          this.router.navigate(['foursection'])
    
        }
      }]
    }).then((alert)=>{
      alert.present()
    });

    // return this.alert.present();
  }

  finalSubmit() {
    var datePipe = new DatePipe("en-US");
    // console.log(
    //   this.insurerDetailsForm.value,
    //   this.vehiclepolicyform.value,
    //   this.insuredDetailsForm.value,
    //   this.repairerdetailsform.value,
    //   this.actuiondateform.value
    // );

  //   var data = new FormData();
  //   // data.append();
  //   data.append('job_type_id', this.jobTypeId);
  //   data.append('insurer_claim_ref_no', this.claim_ref_no);
  //   data.append('insurer_company_id', this.insurerComapnyId);
  //   data.append('insurer_branch_id', this.insurerBranchId);
  //   data.append('insurer_branch_address', this.insurerDetailsForm.value.address);
  //   data.append('insurer_branch_email', this.insurerDetailsForm.value.email);
  //   data.append('insurer_branch_contact', this.insurerDetailsForm.value.contact);
  //   data.append('insurer_appointed_by', this.insurerDetailsForm.value.apointedBy);
  //   data.append('insurer_manager', this.insurerDetailsForm.value.manager);
  //   data.append('status', '');
  //   data.append('vehicle_no', this.vehiclepolicyform.value.vehicleno);
  //   data.append('vehicle_class_id', this.vehicle_class_id);
  //   data.append('vehicle_make_id', this.vehicle_make_id);
  //   data.append('vehicle_model_id', this.vehicle_model_id);
  //   data.append('vehicle_policy_no', this.vehiclepolicyform.value.policy);
  //   data.append('period_from', datePipe.transform(this.vehiclepolicyform.value.todayfrom, 'yyyy-MM-dd'));
  //   data.append('period_to', datePipe.transform(this.vehiclepolicyform.value.todayto, 'yyyy-MM-dd'));
  //   data.append('types_of_policy', this.vehiclepolicyform.value.typepolicy);
  //   data.append('coverages', this.vehiclepolicyform.value.coverages);
  //   data.append('imt', this.vehiclepolicyform.value.todayimt);
  //   data.append('insurer_name', this.insuredDetailsForm.value.insured);
  //   data.append('insurer_email', this.insuredDetailsForm.value.email);
  //   data.append('insurer_address', this.insuredDetailsForm.value.address);
  //   data.append('insurer_contact', this.insuredDetailsForm.value.contact);
  //   data.append('insurer_alt_contact', this.insuredDetailsForm.value.altContact);
  //   data.append('repairer_company_id', this.repairer_company_id);
  //   data.append('repairer_branch_id', this.repairer_branch_id);
  //   data.append('repairer_branch_address', this.repairerdetailsform.value.address);
  //   data.append('estimate_amount', this.repairerdetailsform.value.estimateamt);
  //   data.append('advisor_id', this.advisor_id);
  //   data.append('advisor_contact', this.repairerdetailsform.value.advisorcontact);
  //   data.append('advisor_email', this.repairerdetailsform.value.advisoremail);
  //   data.append('manager_id', this.manager_id);
  //   data.append('manager_contact', this.repairerdetailsform.value.managercontact);
  //   data.append('manager_email', this.repairerdetailsform.value.managermail);
  //   data.append('loss_date', datePipe.transform(this.actuiondateform.value.dateofloss, 'yyyy-MM-dd'));
  //   data.append('loss_time', datePipe.transform(this.actuiondateform.value.dateofloss));
  //   data.append('appointed_date', datePipe.transform(this.actuiondateform.value.appointed, 'yyyy-MM-dd'));
  //   data.append('appointed_time', datePipe.transform(this.actuiondateform.value.appointed));
  //   data.append('ven_garage_date', datePipe.transform(this.actuiondateform.value.garageinward, 'yyyy-MM-dd'));
  //   data.append('ven_garage_time', datePipe.transform(this.actuiondateform.value.garageinward));
  //   data.append('survey_date', datePipe.transform(this.actuiondateform.value.survey, 'yyyy-MM-dd'));
  //   data.append('survey_time', datePipe.transform(this.actuiondateform.value.survey));
  //   data.append('intimation_date', datePipe.transform(this.actuiondateform.value.intimation_insurer, 'yyyy-MM-dd'));
  //   data.append('intimation_time', datePipe.transform(this.actuiondateform.value.intimation_insurer));
  //   data.append('estimate_date', datePipe.transform(this.actuiondateform.value.estimatedate, 'yyyy-MM-dd'));
  //   data.append('intimation_police_date', datePipe.transform(this.actuiondateform.value.intimation_police, 'yyyy-MM-dd'));
  //   data.append('intimation_police_time', datePipe.transform(this.actuiondateform.value.intimation_police));
  //   data.append('estimate_amount', this.actuiondateform.value.estimateamount);
  //   data.append('stage', this.actuiondateform.value.stage);
  //  // data.append('company_id', '');
  //   //data.append('manager_id', '');
  //   data.append('surveyor_id', '3');

  //   this.apiService.sendHttpCall(data, 'jobCreate', 'post').subscribe((success: any) => {
  //     // console.log(success);
  //     if (success.status === 200) {
  //       this.router.navigate(['foursection'])
  //     }else{
  //       this.comonService.message('something went wrong')
  //     }

  //   }, (err) => {
  //     console.log(err);

  //   })




    this.nativeStorage.getItem('myItem').then((success: any) => {
    console.log(success.user_id);

    var data = new FormData();
    //data.append();
    data.append('job_type_id', this.jobTypeId);
    data.append('insurer_claim_ref_no', this.claim_ref_no);
    data.append('insurer_company_id', this.insurerComapnyId);
    data.append('insurer_branch_id', this.insurerBranchId);
    data.append('insurer_branch_address', this.insurerDetailsForm.value.address);
    data.append('insurer_branch_email', this.insurerDetailsForm.value.email);
    data.append('insurer_branch_contact', this.insurerDetailsForm.value.contact);
    data.append('insurer_appointed_by', this.insurerDetailsForm.value.apointedBy);
    data.append('insurer_manager', this.insurerDetailsForm.value.manager);
    data.append('status', '');
    data.append('vehicle_no', this.vehiclepolicyform.value.vehicleno);
    data.append('vehicle_class_id', this.vehicle_class_id);
    data.append('vehicle_make_id', this.vehicle_make_id);
    data.append('vehicle_model_id', this.vehicle_model_id);
    data.append('vehicle_policy_no', this.vehiclepolicyform.value.policy);
    data.append('period_from', datePipe.transform(this.vehiclepolicyform.value.todayfrom, 'yyyy-MM-dd'));
    data.append('period_to', datePipe.transform(this.vehiclepolicyform.value.todayto, 'yyyy-MM-dd'));
    data.append('types_of_policy', this.vehiclepolicyform.value.typepolicy);
    data.append('coverages', this.vehiclepolicyform.value.coverages);
    data.append('imt', this.vehiclepolicyform.value.todayimt);
    data.append('insurer_name', this.insuredDetailsForm.value.insured);
    data.append('insurer_email', this.insuredDetailsForm.value.email);
    data.append('insurer_address', this.insuredDetailsForm.value.address);
    data.append('insurer_contact', this.insuredDetailsForm.value.contact);
    data.append('insurer_alt_contact', this.insuredDetailsForm.value.altContact);
    data.append('repairer_company_id', this.repairer_company_id);
    data.append('repairer_branch_id', this.repairer_branch_id);
    data.append('repairer_branch_address', this.repairerdetailsform.value.address);
    data.append('estimate_amount', this.repairerdetailsform.value.estimateamt);
    data.append('advisor_id', this.advisor_id);
    data.append('advisor_contact', this.repairerdetailsform.value.advisorcontact);
    data.append('advisor_email', this.repairerdetailsform.value.advisoremail);
    data.append('manager_id', this.manager_id);
    data.append('manager_contact', this.repairerdetailsform.value.managercontact);
    data.append('manager_email', this.repairerdetailsform.value.managermail);
    data.append('loss_date', datePipe.transform(this.actuiondateform.value.dateofloss, 'yyyy-MM-dd'));
    data.append('loss_time', datePipe.transform(this.actuiondateform.value.dateofloss));
    data.append('appointed_date', datePipe.transform(this.actuiondateform.value.appointed, 'yyyy-MM-dd'));
    data.append('appointed_time', datePipe.transform(this.actuiondateform.value.appointed));
    data.append('ven_garage_date', datePipe.transform(this.actuiondateform.value.garageinward, 'yyyy-MM-dd'));
    data.append('ven_garage_time', datePipe.transform(this.actuiondateform.value.garageinward));
    data.append('survey_date', datePipe.transform(this.actuiondateform.value.survey, 'yyyy-MM-dd'));
    data.append('survey_time', datePipe.transform(this.actuiondateform.value.survey));
    data.append('intimation_date', datePipe.transform(this.actuiondateform.value.intimation_insurer, 'yyyy-MM-dd'));
    data.append('intimation_time', datePipe.transform(this.actuiondateform.value.intimation_insurer));
    data.append('estimate_date', datePipe.transform(this.actuiondateform.value.estimatedate, 'yyyy-MM-dd'));
    data.append('intimation_police_date', datePipe.transform(this.actuiondateform.value.intimation_police, 'yyyy-MM-dd'));
    data.append('intimation_police_time', datePipe.transform(this.actuiondateform.value.intimation_police));
    data.append('estimate_amount', this.actuiondateform.value.estimateamount);
    data.append('stage', this.actuiondateform.value.stage);
   // data.append('company_id', '');
    //data.append('manager_id', '');
    data.append('surveyor_id', success.user_id);

    this.apiService.sendHttpCall(data, 'jobCreate', 'post').subscribe((success) => {
      console.log(success);
      if (success.status === 200) {
        this.messageSubmit('Data has been saved successfully')
      }else{
        this.comonService.message('something went wrong')
      }
    }, (err) => {
      console.log(err);

    })


    }, (err) => {
      console.log(err);

    })


    //console.log(data.);


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
