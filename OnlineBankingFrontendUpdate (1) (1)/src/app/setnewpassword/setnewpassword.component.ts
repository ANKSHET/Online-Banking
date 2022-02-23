import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { Addibr } from '../services/addibr';

@Component({
  selector: 'app-setnewpassword',
  templateUrl: './setnewpassword.component.html',
  styleUrls: ['./setnewpassword.component.css']
})
export class SetnewpasswordComponent implements OnInit {

  addForm: FormGroup;
  submitted: boolean =false;
   constructor(private formbuilder:FormBuilder, private router: Router,private userService: Addibr) { }
 
   ngOnInit() {
     this.addForm = this.formbuilder.group({
      accountNumber: Number(JSON.parse(localStorage.getItem("datas")).accountNumber),
       loginPassword: ['',Validators.required],
       confirmLoginPassword :  ['',Validators.required],
       answer : JSON.parse(localStorage.getItem("datas")).answer,
     });
   }
   onSubmit() {
    this.submitted = true;
    if(this.addForm.invalid){
    return;
        }
        if(this.addForm.controls['loginPassword'].value == this.addForm.controls['confirmLoginPassword'].value){
        console.log(localStorage.getItem('accn'));
    this.userService.updateUser( Number(JSON.parse(localStorage.getItem("datas")).accountNumber),this.addForm.value)
    .subscribe(
            data => {
    this.router.navigate(['login']);
            },
            (error) => {
              console.log(error);
              alert('Invalid Data');
            // error => {
            //   alert(error);
            });
          }
          else{ alert("Passwords Does not Match!!")}
      }
    }
