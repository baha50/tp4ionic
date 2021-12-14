import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoldserviceService {
  headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8", 
    'Accept': 'application/json, text/plain',
    "cache-control": "no-cache", 
    "Access-Control-Allow-Origin": "*", 
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Request-With, Access-Control-Request-Method, Access-Control-Request-Headers",
    "Access-Control-Allow-Credentials" : "true",
    "Access-Control-Allow-Methods" : "GET, POST, DELETE, PUT, OPTIONS, TRACE, PATCH, CONNECT",  
    };
 
  constructor(private http: HttpClient) { }

  get():any {
     return this.http.get('http://restbaha2.free.beeceptor.com/my/api/path/recipe',  { headers: this.headers }                                                                                                                                                                            


    )
  }
}
