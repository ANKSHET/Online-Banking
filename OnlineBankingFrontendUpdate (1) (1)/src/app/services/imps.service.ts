import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Imps } from '../model/imps';

@Injectable({
  providedIn: 'root'
})
export class ImpsService {
  constructor(private http:HttpClient) { }
  baseUrl:string = 'https://localhost:44382/api';
  
  // Get All Users
  getUsers(){
      return this.http.get<Imps[]>(this.baseUrl+'/Imps');
        }
  
        getTransaction(id: number){
          //document.write(id.toString());
          return this.http.get<Imps[]>(this.baseUrl+'/Imps/'+id);
            }

      
      // Create User
  createUser(user: Imps) {
      return this.http.post(this.baseUrl+'/Imps', user);
        }
      
      // Modify User
      updateUser(user: Imps) {
      return this.http.put(this.baseUrl + '/Imps/' + user.fromAccount, user);
        }
      
      // Delete User
      deleteUser(id: number) {
      return this.http.delete(this.baseUrl + '/Imps/' + id);
        }
}
