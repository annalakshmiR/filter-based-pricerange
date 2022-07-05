import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private _httpClient:HttpClient) {}

  saveUser(users:any[]): Observable<any>{
    return this._httpClient.post("https://product-details-dcaed-default-rtdb.firebaseio.com/details.json",users)
   }
   deleteUser(users:any[]): Observable<any>{
    return this._httpClient.post("https://product-details-dcaed-default-rtdb.firebaseio.com/login.json",users)
  }
  updateUser(users:any[]): Observable<any>{
    return this._httpClient.post("https://product-details-dcaed-default-rtdb.firebaseio.com/login.json",users)
  }

    getData(user:any[]):Observable<any>{
    return this._httpClient.post("https://feedback-38fab-default-rtdb.firebaseio.com/feedback.json",user)
   }

}
