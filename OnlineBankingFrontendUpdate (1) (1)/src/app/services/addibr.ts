import{ Injectable } from'@angular/core';
import{ HttpClient } from'@angular/common/http';
import { Ibregistration } from '../model/ibregistration';
@Injectable({
    providedIn: 'root'
  })

export class Addibr {
    constructor(private http:HttpClient) { }
baseUrl:string = 'https://localhost:44382/api';

// Get All Users
getUsers(){
    return this.http.get<Ibregistration[]>(this.baseUrl+'/IBRegistration');
      }

      getUserById(id: number){
        return this.http.get<Ibregistration>(this.baseUrl+'/IBRegistration/'+id);
          }
    
    // Create User
createUser(user: Ibregistration) {
    return this.http.post(this.baseUrl+'/IBRegistration', user);
      }
    
    // Modify User
    updateUser(id:Number,user: Ibregistration) {
      //document.write(localStorage.getItem("accn"));
    return this.http.put(this.baseUrl + '/IBRegistration/' + user.accountNumber, user);
      }
    
    // Delete User
    deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/IBRegistration/' + id);
      }
}
