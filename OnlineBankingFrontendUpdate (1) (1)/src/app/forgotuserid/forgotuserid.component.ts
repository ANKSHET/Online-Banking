import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators, FormControl} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotuserid',
  templateUrl: './forgotuserid.component.html',
  styleUrls: ['./forgotuserid.component.css']
})
export class ForgotuseridComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean =false;
   constructor(private formbuilder:FormBuilder, private router: Router) { }
 
   ngOnInit() {
     this.addForm = this.formbuilder.group({
      accountNumber : ['',Validators.required],
       otp :  ['',Validators.required]
     });
   }
 
 }
 