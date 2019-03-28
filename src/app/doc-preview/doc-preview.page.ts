import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { Platform } from '@ionic/angular';
import { CommonService } from '../common.service';

import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-doc-preview',
  templateUrl: './doc-preview.page.html',
  styleUrls: ['./doc-preview.page.scss'],
})
export class DocPreviewPage implements OnInit {
  fileTransfer: FileTransferObject;
  docData:any = [];
  constructor(
    private apiService: RestApiService,
    private filePath: FilePath,
    private transfer: FileTransfer,
    private file: File,
    private fileOpener: FileOpener,
    private platform: Platform,
    private comonService:CommonService
  ) {  this.fileTransfer = this.transfer.create();
    this.viewDocFiles();
   }


  viewDocFiles(){
    var data = new FormData();
    data.append('job_create_insurer_id','1');
    this.apiService.sendHttpCall(data,'showUploadedDocs','post').subscribe(success=>{
      console.log(success);
     this.docData = success.data;
      
    },(err)=>{
      console.log(err);
      
    })
   
  }
  openDocFiles(data:any){
    console.log(data);
    
 

  
    if (this.platform.is('android')) {

      const url = 'http://innovious-websolutions.com/surveyorWeb/public/uploads/docs/'+data.docs_name;
      this.fileTransfer.download(url, this.file.dataDirectory + data.docs_name).then((entry) => {
        console.log('download complete: ' + entry.toURL());
        var Pathd = entry.toURL().split('/');
        var pathdw = Pathd[Pathd.length - 1];
        var pathdwon = pathdw.split('.');
        var pathdwonload = pathdwon[pathdwon.length - 1];
        console.log(pathdwonload);
      this.fileOpener.open(entry.toURL(),pathdwonload === 'docx'? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':'application/msword')
      .then(() => console.log('File is opened'))
      .catch(e => console.log('Error opening file', e));
      }, (error) => {
        // handle error
      });
    }
  }




  ngOnInit() {
  }

}
