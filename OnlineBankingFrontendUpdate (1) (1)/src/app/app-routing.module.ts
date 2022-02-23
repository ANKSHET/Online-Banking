import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ForgotuseridComponent } from './forgotuserid/forgotuserid.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListAccountComponent } from './list-account/list-account.component';
import { LoginComponent } from './login/login.component';
import { openaccComponent } from './openacc/openacc.component';
//import { RegisterComponent } from './register/register.component';
import { SetnewpasswordComponent } from './setnewpassword/setnewpassword.component';
import { InternetbankingComponent } from './internetbanking/internetbanking.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { LoginDashBoardComponent } from './login-dash-board/login-dash-board.component';
import { UseraccountdetailsComponent } from './useraccountdetails/useraccountdetails.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';
import { LogoutComponent } from './logout/logout.component';
import  { ListUsersComponent } from './list-users/list-users.component';
import { AccountstatementComponent } from './accountstatement/accountstatement.component';
import { ListAcctstatComponent } from './list-acctstat/list-acctstat.component';
import { ParticularaccstatComponent } from './particularaccstat/particularaccstat.component';
import { TransfersuccessfulComponent } from './transfersuccessful/transfersuccessful.component';
import {NefttransComponent} from './nefttrans/nefttrans.component';
import { RtgstransComponent } from './rtgstrans/rtgstrans.component';
import { ImpstransComponent } from './impstrans/impstrans.component';
import { RtgssuccComponent } from './rtgssucc/rtgssucc.component';
import { ImpssuccComponent } from './impssucc/impssucc.component'
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { EditUserComponent } from './edit-user/edit-user.component';
const routes: Routes = [
  { path: '',component: HomepageComponent },
  {path:'homepage',component:HomepageComponent},
  {path:'login',component:LoginComponent},
  //{path:'register',component:RegisterComponent},
  {path:'forgotuserid',component:ForgotuseridComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'setnewpassword',component:SetnewpasswordComponent},
  {path:'openacc',component:openaccComponent},
  {path: 'list-account', component:ListAccountComponent},
  {path: 'internetbanking', component:InternetbankingComponent},
  {path: 'adminlogin',component:AdminloginComponent},
  {path: 'login-dash-board',component:LoginDashBoardComponent, children:[
    {path:'useraccountdetails',component:UseraccountdetailsComponent},
     {path:'fundtransfer',component:FundtransferComponent,children:[
      {path: 'nefttrans',component:NefttransComponent},
      {path :'rtgstrans', component: RtgstransComponent},
      {path : 'impstrans',component:ImpstransComponent},
     ]},
     {path:'transactionhistory',component:TransactionhistoryComponent},
     {path: 'list-account', component:ListAccountComponent},
     {path: 'logout', component:LogoutComponent},
     {path:'forgotpassword',component:ForgotpasswordComponent},
     {path:'setnewpassword',component:SetnewpasswordComponent},
     {path: 'partiaccstat',component:ParticularaccstatComponent},
     {path: 'accountstatement',component:AccountstatementComponent},
     {path:'ListAcctstat',component:ListAcctstatComponent},
     
  ]},
  {path:'AdminDashBoard',component:AdminDashBoardComponent, children:[
    {path: 'accountstatement',component:AccountstatementComponent},
    {path: 'list-users', component:ListUsersComponent},
    {path:'ListAcctstat',component:ListAcctstatComponent},

  ]},
  {path: 'accountstatement',component:AccountstatementComponent},
  {path : 'impssucc',component:ImpssuccComponent},
  {path: 'rtgssucc',component:RtgssuccComponent},
  {path : 'impstrans',component:ImpstransComponent},
  {path: 'nefttrans',component:NefttransComponent},
  {path :'rtgstrans', component: RtgstransComponent},
  {path : 'transfersuccessful',component:TransfersuccessfulComponent},
  {path: 'partiaccstat',component:ParticularaccstatComponent},
  {path:'ListAcctstat',component:ListAcctstatComponent},
  {path: 'list-users', component:ListUsersComponent},
  {path : 'forgotpassword', component:ForgotpasswordComponent},
  {path:'edit-user',component:EditUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomepageComponent, 
  LoginComponent,
  //RegisterComponent,
  ForgotuseridComponent,
  ForgotpasswordComponent,
  SetnewpasswordComponent,
  openaccComponent,
  UseraccountdetailsComponent,
  FundtransferComponent,
  TransactionhistoryComponent,
  LogoutComponent
];