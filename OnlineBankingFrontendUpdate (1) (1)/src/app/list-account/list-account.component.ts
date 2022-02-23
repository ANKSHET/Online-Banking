import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { openacc } from '../model/Openacc.model';
import { Addaccount } from '../services/addaccount';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {

  users: openacc[];
  user: openacc;
  constructor(private router: Router, private userService: Addaccount) { }

  ngOnInit() {
    //if(localStorage.getItem("username")!=null){

      this.userService.getUserById(Number(localStorage.getItem("accnum")))
      .subscribe(data=> {
      this.user = data;
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
    localStorage.setItem("editUserId", user.accountNumber.toString());
    this.router.navigate(['edit-user']);
    };
  //else
//this.router.navigate(['/list-account']);
  }
  // logOff user
// logOutUser():void{
//   if(localStorage.getItem("username")!=null){
//   localStorage.removeItem("username");
//   this.router.navigate(['/login']);
//         }

// }
// }

