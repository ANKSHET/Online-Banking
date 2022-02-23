import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators, FormControl} from "@angular/forms";
import { Router } from '@angular/router';
import { Forgotservice } from '../services/forgotservice';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  addForm: FormGroup;
 submitted: boolean =false;
  constructor(private formbuilder:FormBuilder, private router: Router,private userService:Forgotservice) { 
    this.addForm = this.formbuilder.group({
      accountNumber : ['',Validators.required],
      answer:  ['',Validators.required]});
  }

  ngOnInit() {
    
  }
  doLogin() {
    this.userService.doLogin(this.addForm.value).subscribe(user => {
     console.log(user);
     localStorage.setItem("datas", JSON.stringify(user));
     localStorage.setItem("accn",this.addForm.controls['accountNumber'].value);
     //document.write(localStorage.getItem("accn"));
    let propertydata = JSON.parse(localStorage.getItem("datas"));
    console.log(Number(JSON.parse(localStorage.getItem("datas")).accountNumber));
    console.log(JSON.parse(localStorage.getItem("datas")).answer);
    
     alert("Your Secret Answer is Correct");
     //localStorage.setItem('userData', JSON.stringify(result));
     // if(result !=null ) {
      this.router.navigate(['setnewpassword']);
      //this.toastr.success('Success', 'Logged In Successfully');
    //}
   })

}
}
