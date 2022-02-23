import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Adminauth } from '../services/adminauth';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginForm: FormGroup;
  initiator: boolean = true;
	constructor(private formBuilder: FormBuilder, private userService:Adminauth , private toastr: ToastrService,private router: Router) {
		this.loginForm = this.formBuilder.group({
			adminEmail: ['', [Validators.required]],
			password: ['', [Validators.required]]
		});
	}
  get f() { return this.loginForm.controls; }
  ngOnInit(): void {
  }
// Initiate login
doLogin() {

   this.userService.doLogin(this.loginForm.value).subscribe(result => {
    console.log(result),
    localStorage.setItem('userData', JSON.stringify(result)),
    // if(result !=null ) {
     this.router.navigate(['AdminDashBoard']);
     this.toastr.success('Success', 'Logged In Successfully');
   //}
  },error=>{
    alert("Please Check Your Credentials") })
  }

}