import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Accontstat } from '../model/accontstat';

@Injectable({
  providedIn: 'root'
})
export class AccstatService {

  constructor(private http:HttpClient) { }
  baseUrl:string = 'https://localhost:44382/api';
  
  // Get All Users
      getUsers(){
      return this.http.get<Accontstat[]>(this.baseUrl+'/AccountStatement');
        }
  
        getUserById(id: number){
          return this.http.get<Accontstat>(this.baseUrl+'/AccountStatement/'+id);
            }
      
      // Create User
  createUser(user: Accontstat) {
      return this.http.post(this.baseUrl+'/AccountStatement', user);
        }
      
      // Modify User
      updateUser(user: Accontstat) {
      return this.http.put(this.baseUrl + '/AccountStatement/' + user.accountNumber, user);
        }
      
      // Delete User
      deleteUser(id: number) {
      return this.http.delete(this.baseUrl + '/AccountStatement/' + id);
        }
  }