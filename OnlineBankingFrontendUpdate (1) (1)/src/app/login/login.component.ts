import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean;
	constructor(private formBuilder: FormBuilder, private userService:AuthService , private toastr: ToastrService,private router: Router) {
		this.loginForm = this.formBuilder.group({
			accountNumber: ['', [Validators.required]],
			loginPassword: ['', [Validators.required]]
		});
	}
  get f() { return this.loginForm.controls; }
  errorMsg;
  ngOnInit(): void {
  }
// Initiate login
doLogin() {

  this.submitted = true;
  if (this.loginForm.invalid) { return; }
  this.userService.doLogin(this.loginForm.value).subscribe(data => {
 //if(data!=null){
      // console.log("Correct login correct");
     localStorage.setItem("accnum",this.loginForm.controls["accountNumber"].value);
      alert("Logged in successfully");
      this.router.navigate(['login-dash-board']);
      // this.router.navigate(['home']);

   // }
    // else {
    //   // console.log("Incorrect login details");
    //   alert("Wrong password, Try again");
    //   this.loginForm.reset();
    // }
    },error=>{
      alert("Please Check Your Credentials")
  });
}


  //  this.userService.doLogin(this.loginForm.value).subscribe(result => {
  //   console.log(result),
  //   localStorage.setItem('userData', JSON.stringify(result)),
  //   // if(result !=null ) {
  //    this.router.navigate(['list-account']);
  //    this.toastr.success('Success', 'Logged In Successfully');
   //}
  //})
 //else{
  //  alert("Invalid Crendentials, Try Again!");
  //  this.loginForm.reset();
  //  (error) => {
  //   console.log(error);
  //   this.toastr.error('Failed', 'Invalid Credentials');
 //  }
  
//}

//}
}
