import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { openaccComponent } from './openacc/openacc.component';
import { SetnewpasswordComponent } from './setnewpassword/setnewpassword.component';
import { ListAccountComponent } from './list-account/list-account.component';
import { Addaccount } from './services/addaccount';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { InternetbankingComponent } from './internetbanking/internetbanking.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginDashBoardComponent } from './login-dash-board/login-dash-board.component';
import { UseraccountdetailsComponent } from './useraccountdetails/useraccountdetails.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';
import { LogoutComponent } from './logout/logout.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AccountstatementComponent } from './accountstatement/accountstatement.component';
import { ListAcctstatComponent } from './list-acctstat/list-acctstat.component';
import { ParticularaccstatComponent } from './particularaccstat/particularaccstat.component';
import { TransfersuccessfulComponent } from './transfersuccessful/transfersuccessful.component';
import { NefttransComponent } from './nefttrans/nefttrans.component';
import { RtgstransComponent } from './rtgstrans/rtgstrans.component';
import { ImpstransComponent } from './impstrans/impstrans.component';
import { ImpssuccComponent } from './impssucc/impssucc.component';
import { RtgssuccComponent } from './rtgssucc/rtgssucc.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { BalajiComponent } from './balaji/balaji.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    openaccComponent,
    SetnewpasswordComponent,
    ListAccountComponent,
    AdminloginComponent,
    InternetbankingComponent,
    LoginDashBoardComponent,
    UseraccountdetailsComponent,
    FundtransferComponent,
    TransactionhistoryComponent,
    LogoutComponent,
    ListUsersComponent,
    AccountstatementComponent,
    ListAcctstatComponent,
    ParticularaccstatComponent,
    TransfersuccessfulComponent,
    NefttransComponent,
    RtgstransComponent,
    ImpstransComponent,
    ImpssuccComponent,
    RtgssuccComponent,
    AdminDashBoardComponent,
    EditUserComponent,
    BalajiComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
     ToastrModule.forRoot({
       positionClass :'toast-bottom-right'
     }),
  ],
  providers: [Addaccount],
  bootstrap: [AppComponent]
})
export class AppModule { }
