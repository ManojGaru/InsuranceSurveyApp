import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { NgProgress } from 'ngx-progressbar';
import { RestApiService } from '../rest-api.service';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Body } from '@angular/http/src/body';
import { log } from 'util';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-case2',
  templateUrl: './case2.page.html',
  styleUrls: ['./case2.page.scss'],
})
export class Case2Page implements OnInit {

  isLoading: boolean = false;
  isInitialOpen: boolean = false;
  portionshow: boolean = false;
  url_docs: any = '../../assets/imgs/no-doc.png';
  url_initial: any = '../../assets/imgs/no-image.png';
  url_keep_open: any = '../../assets/imgs/no-image.png';
  url_cut_open: any = '../../assets/imgs/no-image.png';
  url_before_paint: any = '../../assets/imgs/no-image.png';
  url_reinspection: any = '../../assets/imgs/no-image.png';
  url_no_plate: any = '../../assets/imgs/no-image.png';
  url_chassi_no: any = '../../assets/imgs/no-image.png';
  url_speedometer: any = '../../assets/imgs/no-image.png';
  url_front_view: any = '../../assets/imgs/no-image.png';
  url_left_view: any = '../../assets/imgs/no-image.png';
  url_rear_view: any = '../../assets/imgs/no-image.png';
  url_right_view: any = '../../assets/imgs/no-image.png';
  url_rh_front_corner: any = '../../assets/imgs/no-image.png';
  url_lh_front_corner: any = '../../assets/imgs/no-image.png';
  url_lh_rear_corner: any = '../../assets/imgs/no-image.png';
  url_rh_rear_corner: any = '../../assets/imgs/no-image.png';
  filepath: any;
  fileTransfer: FileTransferObject;
  filename: string;
  globalpath: string;
  purposedoc: string;
  constructor(public navCtrl: NavController,
    private router: Router,
    public loadingCtrl: LoadingController,
    private camera: Camera,
    private imagePicker: ImagePicker,
    private fileChooser: FileChooser,
    public ngProgress: NgProgress,
    private apiService: RestApiService,
    private filePath: FilePath,
    private transfer: FileTransfer,
    private file: File,
    private fileOpener: FileOpener,
    private platform: Platform,
    private comonService: CommonService
  ) {

    this.fileTransfer = this.transfer.create();

  }



  async present() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      message: 'Please Wait...',
      spinner: 'crescent',
      duration: 2000
    }).then(a => {
      a.present().then(() => {
      

      });

    });
  }
  async dismiss() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss();
  }

  startUpload(data, type) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: data === 'PHOTOLIBRARY' ? this.camera.PictureSourceType.PHOTOLIBRARY : this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      console.log(imageData);
      this.filePath.resolveNativePath(imageData).then((filePath) => {
        console.log('after converting path', filePath);
        this.filepath = filePath;
        let path = filePath;
        let pathx = path.split('/');
        let filename = pathx[pathx.length - 1];
        console.log(filename);



        let options: FileUploadOptions = {
          fileKey: 'image',
          fileName: filename,
          chunkedMode: false,
          headers: {
            Connection: "close"
          },
          httpMethod: 'POST',
          params: {
            'job_create_insurer_id': '1',
            'purpose_of_image': type
          }

        }

        this.fileTransfer.upload(filePath, encodeURI('http://innovious-websolutions.com/surveyorWeb/public/api/imageUpload'), options)
          .then((data) => {
            console.log(data);
            this.comonService.changeData(type);
          }, (err) => {
            console.log(err);
          })

      }).catch(err => console.log(err));
    });


  }

  docFileChooser(type, filename, filePath) {
    this.present()


    this.portionshow = !this.portionshow

    let options: FileUploadOptions = {
      fileKey: 'docs_name',
      fileName: filename,
      chunkedMode: false,
      headers: {
        Connection: "close"
      },
      httpMethod: 'POST',
      params: {
        'job_create_insurer_id': '1',
        'purpose_of_docs': type
      }

    }

    this.fileTransfer.upload(filePath, encodeURI('http://innovious-websolutions.com/surveyorWeb/public/api/docUpload'), options)
      .then((data) => {
        console.log(data);
        setTimeout(() => {
          this.dismiss()
        }, 1000)
      }, (err) => {
        console.log(err);
        setTimeout(() => {
          this.dismiss()
        }, 1000)

      })



  }

  viewDocFiles() {
    this.router.navigate(['doc-preview']);
  }


  viewImageFiles(data) {
    var promise = new Promise((resolve, reject) => {
      resolve(this.comonService.changeData(data))
    });
    promise.then(success => {
      // this.dismiss()
      this.router.navigate(['preview']);
    })


  }
  deleteImage(img, pos) {

  }


  ngOnInit() {
    this.ngProgress.start();

    /** request completed */
    this.ngProgress.done();
  }
  /**
   * @description 
   */
  InitialPhotoToggle() {
    this.isInitialOpen = !this.isInitialOpen;
  }

  gotoadmisabilitycheck() {
    this.router.navigate(['jobinward']);
  }
  gotowelcome() {
    this.present();

  }


  /**
   * @description to open input field for and chhose doc file
   */
  Openportion() {
    this.portionshow = !this.portionshow
    console.log(this.portionshow);

    if (this.portionshow) {
      this.fileChooser.open().then(uri => {
        this.filePath.resolveNativePath(uri).then((filePath) => {
          console.log('after converting path', filePath);

          let path = filePath;
          let pathx = path.split('/');
          let filename = pathx[pathx.length - 1];
          console.log(filename);
          this.filename = filename;
          this.globalpath = filePath;
        }, (err) => {

        })


      }, (err) => {

      })
    }

  }

  /**
   * @description
   */
  finalupload() {

    this.docFileChooser(this.purposedoc, this.filename, this.globalpath);
  }


}
