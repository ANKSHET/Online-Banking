import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Neft } from '../model/neft';

@Injectable({
  providedIn: 'root'
})
export class NeftService {
  constructor(private http:HttpClient) { }
  baseUrl:string = 'https://localhost:44382/api';
  
  // Get All Users
  getUsers(){
      return this.http.get<Neft[]>(this.baseUrl+'/Neft');
        }
  
        getTransaction(id: number){
          //document.write(id.toString());
          return this.http.get<Neft[]>(this.baseUrl+'/Neft/'+id);
            }

      
      // Create User
  createUser(user: Neft) {
      return this.http.post(this.baseUrl+'/Neft', user);
        }
      
      // Modify User
      updateUser(user: Neft) {
      return this.http.put(this.baseUrl + '/Neft/' + user.fromAccount, user);
        }
      
      // Delete User
      deleteUser(id: number) {
      return this.http.delete(this.baseUrl + '/Neft/' + id);
        }
}
