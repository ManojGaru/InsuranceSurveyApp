import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  Registationform:any;
  regisdata:any;
  constructor(public navCtrl: NavController,
     public formbuilderr:FormBuilder, 
     private router:Router
    // public http:LoginProvider
     ) {

    this.Registationform=formbuilderr.group({
      'firstname':new FormControl(null, [Validators.required]),
      'lastname':new FormControl(null, [Validators.required]),
      'email':new FormControl(null, [Validators.required]),
      'number':new FormControl(null, [Validators.required]),
      'description':new FormControl(null, [Validators.required]),
      'username':new FormControl(null, [Validators.required]),
      'password':new FormControl(null, [Validators.required]),
    });
  }
  registration(){

    this.router.navigate(['login'])
   // this.navCtrl.setRoot(LoginPage);

    // this.http.register({
    //   'firstname':this.Registationform.value.firstname,
    //   'lastname':this.Registationform.value.lastname,
    //   'email':this.Registationform.value.email,
    //   'number':this.Registationform.value.number,
    //   'description':this.Registationform.value.description,
    //   'username':this.Registationform.value.username,
    //   'password':this.Registationform.value.password
    // }).subscribe((data:any)=>{
    //   this.regisdata=data;
    //   console.log(this.regisdata);
      
    // });
  }

  ngOnInit() {
  }

}
