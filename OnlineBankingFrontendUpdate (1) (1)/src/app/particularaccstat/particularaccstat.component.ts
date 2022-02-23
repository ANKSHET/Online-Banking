import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accontstat } from '../model/accontstat';
import { AccstatService } from '../services/accstat.service';

@Component({
  selector: 'app-particularaccstat',
  templateUrl: './particularaccstat.component.html',
  styleUrls: ['./particularaccstat.component.css']
})
export class ParticularaccstatComponent implements OnInit {

  users: Accontstat[];
  user: Accontstat;
  constructor(private router: Router, private userService: AccstatService) { }

  ngOnInit() {
    //if(localStorage.getItem("username")!=null){
      
      this.userService.getUserById(Number(localStorage.getItem("accnum")))
      .subscribe(data=> {
      this.user = data;
            });
  }
  deleteUser(user: Accontstat): void {
    let result = confirm('Do you want to delete the user?')
    if(result)
          {
    this.userService.deleteUser(user.accountStatId)
    .subscribe( data => {
    this.users = this.users.filter(u => u !== user);
              });
            }
    };
}
