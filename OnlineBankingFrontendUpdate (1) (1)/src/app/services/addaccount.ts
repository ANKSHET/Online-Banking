import{ Injectable } from'@angular/core';
import{ HttpClient } from'@angular/common/http';
import { openacc } from '../model/Openacc.model';

@Injectable({
    providedIn: 'root'
  })

export class Addaccount {

    constructor(private http:HttpClient) { }
baseUrl:string = 'https://localhost:44382/api';

// Get All Users
    getUsers(){
    return this.http.get<openacc[]>(this.baseUrl+'/SavingsAccount');
      }

      getUserById(id: number){
        return this.http.get<openacc>(this.baseUrl+'/SavingsAccount/'+id);
          }
    
    // Create User
createUser(user: openacc) {
    return this.http.post(this.baseUrl+'/SavingsAccount', user);
      }
    
    // Modify User
    updateUser(user: openacc) {
    return this.http.put(this.baseUrl + '/SavingsAccount/' + Number(localStorage.getItem("editUserId")), user);
      }
    
    // Delete User
    deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/SavingsAccount/' + id);
      }
}