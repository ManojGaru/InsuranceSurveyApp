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
  //   {
  //     ClaimNo: "MOT08123456",
  //     PlaceLocation: 'Punjagutta',
  //     items: [
  //       {
  //         ClaimNo: "MOT08123456",
  //         Insuredname: 'INS Name1',
  //         Insuredcontact: '123456789',
  //         TODOTask: 'Survey',
  //         PlaceLocation: 'Punjagutta',
  //         LocationNumber: '159753456'
  //       }
  //     ]
  //   },
  //   {
  //     ClaimNo: "I7M00DUL",
  //     PlaceLocation: 'secunderabad',
  //     items: [

  //       {
  //         ClaimNo: "I7M00DUL",
  //         Insuredname: 'INS Name2',
  //         Insuredcontact: '987654321',
  //         TODOTask: 'Keep Open',
  //         PlaceLocation: 'Secunderabad',
  //         LocationNumber: '951852456'
  //       }
  //     ]
  //   },
  //   {
  //     ClaimNo: "C230018012056",
  //     PlaceLocation: 'Begumpet',
  //     items: [

  //       {
  //         ClaimNo: "C230018012056",
  //         Insuredname: 'INS Name3',
  //         Insuredcontact: '147258369',
  //         TODOTask: 'Cut Open',
  //         PlaceLocation: 'Begumpet',
  //         LocationNumber: '852456753'
  //       }
  //     ]
  //   },
  //   {
  //     ClaimNo: "37332865",
  //     PlaceLocation: 'Gachibowli',
  //     items: [

  //       {
  //         ClaimNo: "37332865",
  //         Insuredname: 'INS Name4',
  //         Insuredcontact: '963852741',
  //         TODOTask: 'Documents',
  //         PlaceLocation: 'Gachibowli',
  //         LocationNumber: '785236419'
  //       }
  //     ]
  //   }

  // ];


  constructor(public navCtrl: NavController,
    private router: Router,
    public comonService: CommonService,
    private apiService: RestApiService,
    private nativeStorage: NativeStorage,
    private global:GlobaldatatransferService) {


  }



  itemClicked(list) {
this.global.setvalue(list);
    // var promise = new Promise((resolve, reject) => {
    //   resolve(this.comonService.changeData(list))
    // });
    // promise.then(success => {
    //   this.router.navigate(['profile-details']);
    // })
    //this.comonService.changeData(list);
    // this.router.navigate(['profile-details']);
    // var storageData = this.nativeStorage.getItem('myItem');
    // console.log(storageData);

    //this.router.navigate(['profile-details']);
    this.router.navigate(['profile-details']);
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
