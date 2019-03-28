import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { CommonService } from '../common.service';
import { GlobaldatatransferService } from '../globaldatatransfer.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {
imageList:any = [];
type:any;
photos:any = [];
imageUrl:string = 'http://innovious-websolutions.com/surveyorWeb/public/uploads/images/';
  constructor(private apiService: RestApiService,
     private comonService:CommonService,
     private global:GlobaldatatransferService,
     private photoViewer: PhotoViewer) { 
    // this.global.setvalue('our sweetest song are those that tell of saddest thought')
    // this.global.getvalue().then((result)=>{
    //   console.log(result);
      
    // })
    
    this.comonService.serviceData.subscribe(success=>{
      //console.log(success);
      
      this.type = success;
      var data = new FormData();
    data.append('job_create_insurer_id','1');
    data.append('purpose_of_image',this.type);
      //console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',this.type);

    this.apiService.sendHttpCall(data,'showImages','post').subscribe(success=>{
      console.log(success);
      this.imageList = success.data;

    },(err)=>{
      console.log(err);
      
    })
    })
    
  }
  /**
   * 
   * @param link 
   * @description to show preview photo
   */
  show(link){
    this.photoViewer.show(link);
  }

  ngOnInit() {
  }

}
