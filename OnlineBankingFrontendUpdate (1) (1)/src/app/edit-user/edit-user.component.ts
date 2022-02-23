import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { openacc } from '../model/Openacc.model';
import { Addaccount } from '../services/addaccount';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  addForm:FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router,private userService:Addaccount ) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({

      firstName : [localStorage.getItem("firstName"),Validators.required],
      middleName : [localStorage.getItem("middlename")],
      lastName : [localStorage.getItem("Lastname"),Validators.required],
      fathersName : [localStorage.getItem("fatherName"),Validators.required],
      phoneNumber : [Number(localStorage.getItem("phoneNumber")),[ Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]],
      emailId : [localStorage.getItem("emailId"),[ Validators.required]],/*Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],*/
      aadharNumber : [localStorage.getItem("AdharNumber"),[Validators.required,Validators.pattern("^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$")]],
      dob : [new Date(localStorage.getItem("Dob")),Validators.required],
      address : [localStorage.getItem("Address"),Validators.required],
      occupationDetails : [localStorage.getItem("OccupationDetails"),Validators.required]
        
        });
  }
  onSubmit(){this.userService.updateUser(this.addForm.value).subscribe(data=>{alert("data updated successfully");
this.router.navigate(['list-users'])})}

}