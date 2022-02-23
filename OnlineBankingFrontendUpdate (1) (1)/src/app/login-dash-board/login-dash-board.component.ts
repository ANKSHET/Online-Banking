import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-dash-board',
  templateUrl: './login-dash-board.component.html',
  styleUrls: ['./login-dash-board.component.css']
})
export class LoginDashBoardComponent implements OnInit {

  
  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //if(localStorage.getItem("accountNumber")==null){
      //this.router.navigate(['/'])
   // }
    // else{

    // }
  }
accountdetails()
{
this.router.navigate(['list-account'], { relativeTo: this.route});
}
accountstatement()
{
  this.router.navigate(['partiaccstat'], { relativeTo: this.route});
}
fundtransfer()
{
  this.router.navigate(['fundtransfer'], { relativeTo: this.route});
}
setpassword()
{
  this.router.navigate(['forgotpassword'], { relativeTo: this.route});
}

logout(){
  localStorage.clear();
  this.router.navigate(['/']);
}

}


