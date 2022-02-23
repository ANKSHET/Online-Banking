import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccstatService } from '../services/accstat.service';

@Component({
  selector: 'app-accountstatement',
  templateUrl: './accountstatement.component.html',
  styleUrls: ['./accountstatement.component.css']
})
export class AccountstatementComponent implements OnInit {

  addForm: FormGroup;
 submitted: boolean =false;
 constructor(private formBuilder: FormBuilder, private router: Router,private userService: AccstatService ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
     // accountStatId : ['',Validators.required],
      accountNumber :  ['',Validators.required],
      accountType: ['',Validators.required],
      balance: ['',Validators.required],
      
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
    localStorage.setItem("accstatid",JSON.stringify(data));
    console.log(JSON.parse(localStorage.getItem("accstatid")).accountStatId);
    //localStorage.setItem("accstatid",this.addForm.controls["accountStatId"].value);
  this.router.navigate(['/ListAcctstat']);
  this.showMsg= true;
        });
    }
  }