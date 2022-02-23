import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from "@angular/forms";
import { Router } from '@angular/router';

import {openacc} from '../model/Openacc.model';
import { Addaccount } from '../services/addaccount';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-openacc',
  templateUrl: './openacc.component.html',
  styleUrls: ['./openacc.component.css']
})
export class openaccComponent implements OnInit {
  
  addForm: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router,private userService: Addaccount) {
    
   }
  errorMsg;
    ngOnInit() {
      
    this.addForm = this.formBuilder.group({

  firstName : ['',Validators.required],
  middleName : ['',Validators.required],
  lastName : ['',Validators.required],
  fathersName : ['',Validators.required],
  phoneNumber : ['',[ Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]],
  emailId : ['',[ Validators.required]],/*Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],*/
  aadharNumber : ['',[Validators.required,Validators.pattern("^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$")]],
  dob : ['',Validators.required],
  address : ['',Validators.required],
  occupationDetails : ['',Validators.required]
    
    });

  }
  showMsg: boolean = false;
onSubmit() {
this.submitted = true;
if(this.addForm.invalid){
return;
    }
    this.userService.createUser(this.addForm.value)
    .subscribe( data => {
    
     localStorage.setItem("accnum",JSON.stringify(data));
     console.log(JSON.parse(localStorage.getItem("accnum")).accountNumber)
     alert("Please NoteDown Your Account Number for Internet Banking Registration:"+ JSON.parse(localStorage.getItem("accnum")).accountNumber)
    this.router.navigate(['/internetbanking']);
    this.addForm.reset(); //reset
    this.showMsg= true;
    },error=> { alert(this.errorMsg = error);

      });
  }
}