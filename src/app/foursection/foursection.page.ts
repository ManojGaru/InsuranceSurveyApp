import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foursection',
  templateUrl: './foursection.page.html',
  styleUrls: ['./foursection.page.scss'],
})
export class FoursectionPage implements OnInit {

  constructor(public navCtrl: NavController,
    private router:Router
    ) { }

  ngOnInit() {
  }

  gotohome() {
    this.router.navigate(['welcome']);
  }
  gotosearch() {
    this.router.navigate(['case1']);
  }
  gotocase() {
    this.router.navigate(['case1']);
  }
  gototodolist() {
    this.router.navigate(['profile']);
  }
  gotojob() {
    this.router.navigate(['jobinward']);
  }

}
