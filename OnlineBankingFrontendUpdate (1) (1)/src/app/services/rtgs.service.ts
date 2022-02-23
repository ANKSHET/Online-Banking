import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rtgs } from '../model/rtgs';

@Injectable({
  providedIn: 'root'
})
export class RtgsService {

  constructor(private http:HttpClient) { }
  baseUrl:string = 'https://localhost:44382/api';

  getUsers(){
    return this.http.get<Rtgs[]>(this.baseUrl+'/Rtgs');
      }

      getTransaction(id: number){
        //document.write(id.toString());
        return this.http.get<Rtgs[]>(this.baseUrl+'/Rtgs/'+id);
          }

    
    // Create User
createUser(user: Rtgs) {
    return this.http.post(this.baseUrl+'/Rtgs', user);
      }
    
    // Modify User
    updateUser(user: Rtgs) {
    return this.http.put(this.baseUrl + '/Rtgs/' + user.fromAccount, user);
      }
    
    // Delete User
    deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/Rtgs/' + id);
      }
}
