import { Injectable } from '@angular/core';

@Injectable()
export class GlobaldatatransferService {
  globaldata: any;
  constructor() { }

  setvalue(data) {
    this.globaldata = data;
  }
  getvalue() {
  return  new Promise((resolve, reject) => {
      if (this.globaldata) {
        resolve({ data: this.globaldata })
      } else {
        reject({ data: null })
      }

    })

  }
  setvalue1(data) {
    this.globaldata = data;
  }
  getvalue1() {
  return  new Promise((resolve, reject) => {
      if (this.globaldata) {
        resolve({ data: this.globaldata })
      } else {
        reject({ data: null })
      }

    })

  }

}
