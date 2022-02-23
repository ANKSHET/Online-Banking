import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any; API_URI = 'https://localhost:44382';

constructor(private http:HttpClient) { }

doLogin(data: any){
  console.log(data);
  return this.http.post(this.API_URI + '/api/Userlogin', data);
  }

  // register(data: any){
  //   console.log(data);
  //   return this.http.post(this.API_URI + '/api/Register', data);
  //   }
  
//   VerifyAdmin(control: { value: string; }) {
//   // RFC 2822 compliant regex
//   if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
//     return null;
//   } else {
//     return { 'invalidEmailAddress': true };
//   }
// }

//   passwordValidator(control: { value: string; }) {
//     // {6,100}           - Assert password is between 6 and 100 characters
//     // (?=.*[0-9])       - Assert a string has at least one number
//     if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{3,100}$/)) {
//       return null;
//     } else {
//       return { 'invalidPassword': true };
//     }
//   }
}