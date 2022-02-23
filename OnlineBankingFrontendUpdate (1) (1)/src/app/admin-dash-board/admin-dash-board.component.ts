import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
   
  }
accountdeatils()
{
this.router.navigate(['/list-users'], { relativeTo: this.route});
}
accountstatement()
{
  this.router.navigate(['accountstatement'], { relativeTo: this.route});
}
logout(){
  localStorage.clear();
  this.router.navigate(['/']);
}

}