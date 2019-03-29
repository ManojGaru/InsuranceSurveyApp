import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { RestApiService } from '../rest-api.service';
import { CommonService } from '../common.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  
})
export class WelcomePage implements OnInit {
    select:any=[];
    select_form :any;
    stageResult:any;

  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any=[];
  cradContent = [
      {
          icon:'motorcycle',
          name:'Lorem Ipsum is simply dummy '
      },
      {
        icon:'car',
        name:'Lorem Ipsum is simply dummy '
    },
    {
        icon:'ambulance',
        name:'Lorem Ipsum is simply dummy '
    },
    {
        icon:'home',
        name:'Lorem Ipsum is simply dummy '
    },
    {
        icon:'user',
        name:'Lorem Ipsum is simply dummy '
    },
    {
        icon:'pencil',
        name:'Lorem Ipsum is simply dummy '
    },
    {
        icon:'pencil',
        name:'Lorem Ipsum is simply dummy '
    },
    {
        icon:'pencil',
        name:'Lorem Ipsum is simply dummy '
    },
    {
        icon:'pencil',
        name:'Lorem Ipsum is simply dummy '
    },
    {
        icon:'pencil',
        name:'Lorem Ipsum is simply dummy '
    },
    {
        icon:'pencil',
        name:'Lorem Ipsum is simply dummy '
    },
    {
        icon:'pencil',
        name:'Lorem Ipsum is simply dummy '
    },
                ]
   grpah:any=[];
   axa:number = 0;
   bajaj:number = 0;
   sbi:number=0;
   icici:number=0;
   national:number=0;
   counter:number = 0;
  constructor(private router:Router,
    public navCtrl: NavController,
    public formbulders:FormBuilder,
    public apiService:RestApiService,
    private comonService:CommonService,
    private nativeStorage:NativeStorage) { 
        this.getDropdown();
        this.nativeStorage.getItem('myItem').then((success)=>{
            console.log(success);
            
        },(err)=>{
            console.log(err);
            
        })
       // this.commonService.backButton();

  }


  ngOnInit() {

    this.pieChart();
  }

  

  pieChart(){
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

        type: 'pie',
        data: {
            labels: ["AXA","BAJAJ","SBI","ICICI","NATIONAL"],
            datasets: [{
                label: '# of Votes',
                data: [this.axa,this.bajaj,this.sbi,this.icici,this.national],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(124, 194, 159)',
                    'rgba(153, 102, 255)',
                    'rgba(115, 171, 193)'
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
        }
  
    });
  }
  gotoCase1(){
    this.router.navigate(['case1']);
   // this.navCtrl.('case1')
  }
  gotocase2(){
      this.router.navigate(['case2']);
  }
  getDropdown(){
      this.apiService.sendHttpCall('','getStage','get').subscribe(success=>{
        //  console.log(success);
          this.select = success.data;
        //  console.log(this.select);
      });
  }

  getStageResultData(id){
      console.log(id);
      
    var data = new FormData();
    data.append("stage_id",id)
   // console.log(data.get('stage_id'));
    
      this.apiService.sendHttpCall(data,'stageResult','post').subscribe(success=>{
        this.stageResult = success.data;
       // console.log(this.stageResult);
        this.stageResult.forEach(result => {
            if(result.company_name === 'AXA'){
                this.axa = result.company_record;
            }
            else if(result.company_name === 'BAJAJ'){
                this.bajaj = result.company_record;
            }
            else if(result.company_name === 'SBI'){
                this.sbi = result.company_record;
            }
            else if(result.company_name === 'ICICI'){
                this.icici = result.company_record;
            }else if(result.company_name === 'NATIONAL'){
                this.national = result.company_record;
            } 
        });
       // console.log(this.axa, this.bajaj,this.sbi,this.icici,this.national);
        this.pieChart();
      },err=>{
        console.log(err);
        
      })
  }
 

}
