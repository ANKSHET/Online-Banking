import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Neft } from '../model/neft';
import { NeftService } from '../services/neft.service';

@Component({
  selector: 'app-transfersuccessful',
  templateUrl: './transfersuccessful.component.html',
  styleUrls: ['./transfersuccessful.component.css']
})
export class TransfersuccessfulComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean =false;
  users: Neft[];
  user:Neft;
  //ibr:Accontstat;
  constructor(private formbuilder:FormBuilder,private router: Router,private userService: NeftService) { }

  ngOnInit(): void {
    this.addForm = this.formbuilder.group({
      fromAccount : ['',Validators.required],
      toAccount :  ['',Validators.required],
      amount: ['',Validators.required],
      transactionDate: ['',Validators.required],
      remarks: ['',Validators.required],
      //transactionPassword : ['',Validators.required],

    });
    this.userService.getTransaction(Number(localStorage.getItem("fAccount")))
      .subscribe(data=> {
      this.users = data;
            });
            // this.accstat.getUserById(Number(localStorage.getItem("fAccount")))
            // .subscribe(data=> {
            // this.ibr = data;
            //       });
    // this.userService.getUsers()
    //   .subscribe(data=> {
    //   this.users = data;
    //         });
  }
  showMsg: boolean = false;
  onSubmit() {
    // document.write()
    // this.userService.getTransaction(Number(localStorage.getItem("fAccount")))
    //   .subscribe(data=> {
    //   this.users = data;
    //         });
  // this.submitted = true;
  // if(this.addForm.invalid){
  // return;
      }
  // this.userService.createUser(this.addForm.value)
  // .subscribe( data => {
    
  //   //localStorage.setItem("accstatid",this.addForm.controls["accountStatId"].value);
  // this.router.navigate(['/ListAcctstat']);
  // this.showMsg= true;
   //     });
    }

//}
