import { Component, ViewChild } from '@angular/core';

import { NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Platform,IonRouterOutlet } from '@ionic/angular';
import { CommonService } from './common.service';
import { Toast } from '@ionic-native/toast/ngx';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;
  public alertShown:boolean = false;
  counter:number=0;


  public appPages = [
   
    {
      title: 'Welcome',
      url: '/welcome',
      icon: 'home'
    },
    {
      title: 'ToDo List',
      url: '/profile',
      icon: 'list'
    },
    {
      title: 'Job Inward',
      //url: '/jobinward',
      icon: 'search'
    }, 
    {
      title: 'Sections',
      url: '/foursection',
      icon: 'logo-windows'
    },  
  ];

 

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertController: AlertController,
    private router:Router,
    public nav: NavController,
    public menu: MenuController,
    private comonService:CommonService,
    private toast: Toast,
    
  ) {
   
    this.initializeApp();
    this.statusBar.overlaysWebView(true);

     // set status bar to white
   // this.statusBar.backgroundColorByHexString('#00bcd4');
  
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Logout',
      message: 'Are you sure to logout ?',
      buttons:[{
        text: "No"
      },{
        text:"Yes",
        handler:()=>{

          this.menu.close();
          this.nav.navigateRoot(['login']);
    
        }
      }]
    });

    await alert.present();
  }
  
  gotoEdit(contact) {
    this.router.navigate(['editprofile']);
    this.menu.close();
  }



 

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
   //this.platform.backButton.

    this.platform.backButton.subscribeWithPriority(999999,() => { 

      if (this.router.url != '/foursection') {
        this.routerOutlet.pop();
      }else{

        setTimeout( () => {
          if (this.counter === 0) {
             this.counter = this.counter + 1;
            this.presentToast();
           }else{
           this.exit()
           }
      }, 2000,this.counter = 0);
       
      }
    });
  }

  async exit() {
    const alert = await this.alertController.create({
      header: 'EXIT',
      message: 'Are you sure to exit ?',
      buttons:[{
        text: "No"
      },{
        text:"Yes",
        handler:()=>{
          //this.storage.storage.clear();
          this.menu.close();
          navigator['app'].exitApp(); 
          //this.nav.navigateRoot(['login']);
         // this.router.navigate(['login']);
        }
      }]
    });

    await alert.present();
  }
  async presentToast() {
    this.toast.show(`back again to exit`, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
       // toast.present();
       
      }
    );
  }

  
}
