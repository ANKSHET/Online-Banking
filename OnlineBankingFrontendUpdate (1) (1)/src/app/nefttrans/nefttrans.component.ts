import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Rtgs } from '../model/rtgs';
import { NeftService } from '../services/neft.service';


@Component({
  selector: 'app-nefttrans',
  templateUrl: './nefttrans.component.html',
  styleUrls: ['./nefttrans.component.css']
})
export class NefttransComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean =false;
  constructor(private formbuilder:FormBuilder,private router: Router,private userService: NeftService) { }
  showMsg: boolean = false;
  ngOnInit(){
    this.addForm = this.formbuilder.group({
      fromAccount : ['',Validators.required],
      toAccount :  ['',Validators.required],
      amount: ['',Validators.required],
      transactionDate: [new Date(),Validators.required],
      remarks: ['',Validators.required],
    });
  }
  onSubmit(){
    //document.write("hello");
    this.submitted = true;
    if(this.addForm.invalid){
    return;
    }
    this.userService.createUser(this.addForm.value)
    .subscribe( data => {
      
      localStorage.setItem("fAccount",this.addForm.controls['fromAccount'].value);
      //console.log(data);
      //localStorage.setItem("accstatid",JSON.stringify(data));
      //console.log(JSON.parse(localStorage.getItem("accstatid")).accountStatId);
      //localStorage.setItem("accstatid",this.addForm.controls["accountStatId"].value);
    this.router.navigate(['/transfersuccessful']);
    this.showMsg= true;
          });
        }
}
