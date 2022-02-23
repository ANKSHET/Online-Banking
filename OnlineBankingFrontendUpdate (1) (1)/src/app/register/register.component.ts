// import { Component, OnInit } from '@angular/core';
// import {FormGroup,FormBuilder} from "@angular/forms"
// import { User } from '../model/user.model';
// //import {User} from '../model/user.model';
// //import { ApiService } from '../shared/api.service';
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
  
  
  
//   formValue !: FormGroup;
//   userObj : User = new User();
  
  
//   constructor(private formbuilber :FormBuilder,
//     private api : ApiService) { }

//   ngOnInit(): void {
//     this.formValue = this.formbuilber.group({
//       accountnumnber : [''],
//       setloginpassword : [''],
//       confirmloginpassword : [''],
//       settransactionpassword : [''],
//       confirmtransactionpassword : [''],
//       otp : ['']

//     })
//   }
//   postUserDetails(){
//     //this.userObj.id = this.formValue.value.id;
//    this.userObj.accountnumber = this.formValue.value.accountnumber;
//    this.userObj.setloginpassword =  this.formValue.value.setloginpassword;
//    this.userObj.confirmloginpassword =  this.formValue.value.confirmloginpassword;
//    this.userObj.settransactionpassword =  this.formValue.value.settransactionpassword;
//    this.userObj.confirmtransactionpassword =  this.formValue.value.confirmtransactionpassword;
//    this.userObj.otp =  this.formValue.value.otp;

//    this.api.postUser(this.userObj)
//    .subscribe(res => {
//      console.log(res);
//      alert("added successfully")
//    },
//      err=>{
//      alert("went wrong");
//    })
//   }

// }
