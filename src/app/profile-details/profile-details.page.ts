import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { DatePipe } from '@angular/common';
import { GlobaldatatransferService } from '../globaldatatransfer.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.page.html',
  styleUrls: ['./profile-details.page.scss'],
})
export class ProfileDetailsPage implements OnInit {

  listinfo: any;
  temp: any;

  constructor(private nav: NavController,
    private route: ActivatedRoute,
    public comonservice: CommonService,
    private router: Router,
    private callNumber: CallNumber,
    private emailComposer: EmailComposer,
    private global: GlobaldatatransferService
  ) {
    var datePipe = new DatePipe("en-US");


    this.global.getvalue().then((success:any) => {
      this.temp = success.data
      console.log(success);
      
    }, (err) => {
      console.log(err);
    })




  }

  back() {
    this.router.navigate(['profile']);
  }
/**
 * 
 * @param number 
 * @description dial number
 */
  dialNumber(number) {
    this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  /**
   * 
   * @param mailId 
   * @description compose to mail
   */
  composeMail(mailId) {
    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        //Now we know we can send
      }
    });

    let email = {
      to: mailId,
      cc: 'erika@mustermann.de',
      bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [
        'file://img/logo.png',
        'res://icon.png',
        'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        'file://README.pdf'
      ],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    }

    // Send a text message using default options
    this.emailComposer.open(email);
  }

  ngOnInit() {
    this.comonservice.serviceData.subscribe((success) => {
      this.temp = success
      console.log('ooooooooooooooooo', this.temp);
      // this.temp.survey_date = datePipe.transform(this.temp.survey_date, 'dd-MM-yyyy');
      // this.temp.survey_time = datePipe.transform(this.temp.survey_date, 'h:mm a');
    })
  }

}
