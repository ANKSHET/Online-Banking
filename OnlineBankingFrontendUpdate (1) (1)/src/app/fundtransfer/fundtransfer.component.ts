import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators, FormControl} from "@angular/forms";
import { Router } from '@angular/router';
import { NeftService } from '../services/neft.service';
@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.css']
})
export class FundtransferComponent implements OnInit {
  addForm: FormGroup;

 submitted: boolean =false;
  constructor(private formbuilder:FormBuilder,private router: Router,private userService: NeftService) { }
  showMsg: boolean = false;
  ngOnInit() {
    // this.addForm = this.formbuilder.group({
    //   fromAccount : ['',Validators.required],
    //   toAccount :  ['',Validators.required],
    //   amount: ['',Validators.required],
    //   transactionDate: ['',Validators.required],
    //   remarks: ['',Validators.required],
    //   //transactionPassword : ['',Validators.required],
    // });
      // this.addForm2 = this.formbuilder.group({
      //   fromAccount : ['',Validators.required],
      //   toAccount :  ['',Validators.required],
      //   amount: ['',Validators.required],
      //   transactionDate: ['',Validators.required],
      //   maturityInstruction: ['',Validators.required],
      //   remarks: ['',Validators.required],
      //   transactionPassword : ['',Validators.required],
      // });
    }
  // readioSelected:any;
  // //showcontent:boolean=false;
  // showcontent:any;
  // showContent(){
  //   this.showcontent=this.readioSelected;
  // }
  onSubmit(){
    // //document.write("hello");
    // this.submitted = true;
    // if(this.addForm.invalid){
    // return;
    // }
    // this.userService.createUser(this.addForm.value)
    // .subscribe( data => {
      
    //     localStorage.setItem("fAccount",this.addForm.controls['fromAccount'].value);
    //   //console.log(data);
    //   //localStorage.setItem("accstatid",JSON.stringify(data));
    //   //console.log(JSON.parse(localStorage.getItem("accstatid")).accountStatId);
    //   //localStorage.setItem("accstatid",this.addForm.controls["accountStatId"].value);
    // this.router.navigate(['/transfersuccessful']);
    // this.showMsg= true;
    //       });
        }
}
