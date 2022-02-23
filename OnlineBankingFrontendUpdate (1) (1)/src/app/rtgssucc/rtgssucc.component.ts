import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Rtgs } from '../model/rtgs';
import { RtgsService } from '../services/rtgs.service';

@Component({
  selector: 'app-rtgssucc',
  templateUrl: './rtgssucc.component.html',
  styleUrls: ['./rtgssucc.component.css']
})
export class RtgssuccComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean =false;
  users:Rtgs[];
  user:Rtgs;
  //ibr:Accontstat;
  constructor(private formbuilder:FormBuilder,private router: Router,private userService: RtgsService) { }

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
