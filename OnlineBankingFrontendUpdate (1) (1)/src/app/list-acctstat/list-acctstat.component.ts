import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accontstat } from '../model/accontstat';
import { AccstatService } from '../services/accstat.service';

@Component({
  selector: 'app-list-acctstat',
  templateUrl: './list-acctstat.component.html',
  styleUrls: ['./list-acctstat.component.css']
})
export class ListAcctstatComponent implements OnInit {

  users: Accontstat[];
  constructor(private router: Router, private userService: AccstatService) { }

  ngOnInit() {
    //if(localStorage.getItem("username")!=null){

      this.userService.getUsers()
      .subscribe(data=> {
      this.users = data;
            });
  }
  deleteUser(user: Accontstat): void {
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
    editUser(user: Accontstat): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.accountNumber.toString());
    this.router.navigate(['edit-user']);
    }
  }