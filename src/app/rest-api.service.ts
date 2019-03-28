import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

 export const apiUrl = "http://innovious-websolutions.com/surveyorWeb/public/api/";
 //export const apistage = "http://surveyorweb.innovious-websolutions.com/api/getStage";
 //export const apisearch ="http://surveyorweb.innovious-websolutions.com/api/search";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

 

  sendHttpCall(data: any = '', url: any, method: any, opt: HttpHeaders =null) {
    switch (method) {
      case "post":
        console.log(data);
        return this.http.post<any>(apiUrl + url, (data), { headers: opt });
      case "get":
        return this.http.get<any>(apiUrl + url);
      case "put":
        return this.http.put<any>(apiUrl + url, (data));
      case "delete":
        return this.http.delete<any>(apiUrl + url);
      default:
        confirm("Add Method");
    }
  }

 



}
