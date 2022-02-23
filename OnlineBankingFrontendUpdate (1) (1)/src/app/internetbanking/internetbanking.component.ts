import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Addibr } from '../services/addibr';

@Component({
  selector: 'app-internetbanking',
  templateUrl: './internetbanking.component.html',
  styleUrls: ['./internetbanking.component.css']
})
export class InternetbankingComponent implements OnInit {

  addForm: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router,private userService: Addibr) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({

      
      //internetBankingID : [''],
      accountNumber : ['',[Validators.required]],
      loginPassword : ['',[Validators.required]],
      confirmLoginPassword : ['',[Validators.required]],
      // transactionPassword  : [''],
      // confirmTransactionPassword : [''],
      answer : ['',[Validators.required]],
        });
    
      }
      showMsg: boolean = false;
    onSubmit() {
    this.submitted = true;
    if(this.addForm.invalid){
    return;
        }
    if(this.addForm.controls['loginPassword'].value == this.addForm.controls['confirmLoginPassword'].value){
    this.userService.createUser(this.addForm.value)
    .subscribe( data => {
    this.router.navigate(['']);
    this.showMsg= true;
  
          });
        }
        else{ alert("Passwords Does not Match!!")}
      }
  }


