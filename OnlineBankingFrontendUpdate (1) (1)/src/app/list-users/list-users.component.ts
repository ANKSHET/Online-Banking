import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { openacc } from '../model/Openacc.model';
import { Addaccount } from '../services/addaccount';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: openacc[];
  constructor(private router: Router, private userService: Addaccount) { }

  ngOnInit() {
    //if(localStorage.getItem("username")!=null){

      this.userService.getUsers()
      .subscribe(data=> {
      this.users = data;
            });
  }
  deleteUser(user: openacc): void {
    let result = confirm('Do you want to delete the user?')
    if(result)
          {
    this.userService.deleteUser(user.accountNumber)
    .subscribe( data => {
    this.users = this.users.filter(u => u !== user);
              });
            }
    };
    
    // Modify USer
    editUser(user: openacc): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("firstName",user.firstName);
    localStorage.setItem("middlename",user.middleName);
    localStorage.setItem("Lastname",user.lastName);
    localStorage.setItem("fatherName",user.fathersName);
    localStorage.setItem("phoneNumber",user.phoneNumber.toString());
    localStorage.setItem("emailId",user.emailId);
    localStorage.setItem("AdharNumber",user.aadharNumber.toString());
    localStorage.setItem("Dob",user.dob.toString());
    localStorage.setItem("Address",user.address);
    localStorage.setItem("OccupationDetails",user.occupationDetails);
    
    localStorage.setItem("editUserId", user.accountNumber.toString());
    this.router.navigate(['edit-user']);
    }
  }
