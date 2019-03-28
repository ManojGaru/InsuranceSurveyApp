import { Component, OnInit } from '@angular/core';
import {NavController,AlertController } from '@ionic/angular';



@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(public nav: NavController, public alertCtrl:AlertController) {
  }



  

  ngOnInit() {
  }

}
