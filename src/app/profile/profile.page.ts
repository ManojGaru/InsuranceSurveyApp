import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { RestApiService } from '../rest-api.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { GlobaldatatransferService } from '../globaldatatransfer.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  list1: any;
  toDOLists: any = [];


  constructor(public navCtrl: NavController,
    private router: Router,
    public comonService: CommonService,
    private apiService: RestApiService,
    private nativeStorage: NativeStorage,
    private global: GlobaldatatransferService) {


  }



  itemClicked(list) {
    //this.global.setvalue(list);
    console.log(list);
    
    var promise = new Promise((resolve, reject) => {
      this.global.setvalue(list)
      resolve();
    });
    promise.then(success => {
      // this.dismiss()
      this.router.navigate(['profile-details']);
    })



  }

  /**
   * @description Get list of all Todo list(pending, new and upcoming)
   */

  getToDoList() {
    this.nativeStorage.getItem('myItem').then((success: any) => {
      console.log(success.user_id);
      var data = new FormData();
      data.append('user_id', success.user_id);
      this.apiService.sendHttpCall(data, 'getToDoList', 'post').subscribe((success) => {
        console.log(success);
        this.toDOLists = success.data;

      }, (err) => {
        console.log(err);
        this.comonService.message('There Are some Error');
      })

    }, (err) => {
      console.log(err);

    });



  }


  ngOnInit() {
    this.getToDoList();
  }

}
