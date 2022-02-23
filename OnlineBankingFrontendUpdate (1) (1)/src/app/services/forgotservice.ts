import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class Forgotservice {
    [x: string]: any; API_URI = 'https://localhost:44382';

    constructor(private http:HttpClient) { }
    
    doLogin(data: any){
      console.log(data);
      return this.http.post(this.API_URI + '/api/ForgotPassword', data);
      }
}
