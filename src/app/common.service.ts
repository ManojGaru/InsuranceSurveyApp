import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { common, submitData } from './models/common';
import { AlertController, MenuController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  list:any=[];
  counter:number = 0;
  alert:any;
  isLoading:boolean = false;
  constructor(private router:Router, 
    public alertController: AlertController,
    public menu: MenuController,
    private loadingCtrl:LoadingController
    ) {}
  private dataSource = new BehaviorSubject(new common());
  private dataSourceToDo = new BehaviorSubject(new common());
  private submitdataSource = new BehaviorSubject([new submitData()]);

  serviceData = this.dataSource.asObservable();
  serviceDataTodo  = this.dataSourceToDo.asObservable();
  submitserviceData = this.submitdataSource.asObservable();
  changeData(data: any):any {
  
    this.dataSource.next(data);
    console.log(data);
  }
  changesubmitData(data: any):any {
  
    this.submitdataSource.next(data);
   
    console.log(data);
  }
  changeDataToDo(data: any):any {
  
    this.dataSourceToDo.next(data);
    console.log(data);
  }


    message(msg:string){
    this.alert =  this.alertController.create({
      header: 'ALERT',
      message: msg,
      // buttons:[{
      //   text: "No"
      // },{
      //   text:"Yes",
      //   handler:()=>{

      //     // this.menu.close();
      //     // this.nav.navigateRoot(['login']);
    
      //   }
      // }]
    }).then((alert)=>{
      alert.present()
    });

    // return this.alert.present();
  }

   present() {
    this.isLoading = true;

     this.loadingCtrl.create({
    }).then(a => {
      a.present().then(() => {
      });

    });

  }

   dismiss() {
    this.isLoading = false;
    this.loadingCtrl.dismiss();
    console.log('dismissed');
  }


 
  



 


}
