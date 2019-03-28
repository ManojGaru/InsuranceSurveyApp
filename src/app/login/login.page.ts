import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, Platform, AlertController } from '@ionic/angular';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RestApiService } from '../rest-api.service';
import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  username = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);



  form: any;
  userdata: any;
  isLoading: boolean = false;
  constructor(public navCtrl: NavController,
    public formbulders: FormBuilder,
    private router: Router,
    private statusBar: StatusBar,
    public loadingCtrl: LoadingController,
    public apiService: RestApiService,
    public storage: Storage,
    private nativeStorage: NativeStorage,
    public alertController: AlertController,
    private comonService:CommonService
  ) {
    this.statusBar.overlaysWebView(true);
    // this.statusBar.backgroundColorByHexString('#ffffff');
    this.form = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
      'purpose': new FormControl('', [Validators.required])
    });


  }


  async present() {
    this.isLoading = true;

    return await this.loadingCtrl.create({
    }).then(a => {
      a.present().then(() => {
      });

    });

  }

  async dismiss() {
    this.isLoading = false;
    this.loadingCtrl.dismiss();
    console.log('dismissed');
  }

  

/**
 * @description login method
 */


  login() {
    console.log(this.form.value);
    
    if (this.form.value === null) {
      this.present();
      setTimeout(() => {
        this.dismiss();
      }, 1000);
    } else {
      this.present();
      var data = new FormData();
      data.append("username", this.form.value.username);
      data.append("password", this.form.value.password);
      data.append("purpose", this.form.value.purpose);
      this.apiService.sendHttpCall(data, 'login', 'post').subscribe(success => {
        console.log(success);

        if (success.status === "200") {
          setTimeout(() => {
            this.dismiss();
          }, 1000);

          this.nativeStorage.setItem('myItem', { user_id: success.data.id, token: success.data.token })
          this.router.navigate(['foursection']);
        } else {
          setTimeout(() => {
            this.dismiss(); // Now the "this" still references the component
            this.comonService.message('Invalid Username/Password');
          }, 1000);
          //this.form.value = null;
        }
      }, err => {
        console.log(err);
      })
    }
  }

  ngOnInit() {
  }




}
