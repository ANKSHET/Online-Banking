import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Imps } from '../model/imps';
import { ImpsService } from '../services/imps.service';

@Component({
  selector: 'app-impssucc',
  templateUrl: './impssucc.component.html',
  styleUrls: ['./impssucc.component.css']
})
export class ImpssuccComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean =false;
  users: Imps[];
  user:Imps;
  //ibr:Accontstat;
  constructor(private formbuilder:FormBuilder,private router: Router,private userService: ImpsService) { }

  ngOnInit(): void {
    this.addForm = this.formbuilder.group({
      fromAccount : ['',Validators.required],
      toAccount :  ['',Validators.required],
      amount: ['',Validators.required],
      transactionDate: [new Date(),Validators.required],
      remarks: ['',Validators.required],
      //transactionPassword : ['',Validators.required],

    });
    this.userService.getTransaction(Number(localStorage.getItem("fAccount")))
      .subscribe(data=> {
      this.users = data;
            });
  }

}
