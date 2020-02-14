import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient) { }

  public postWAu(url,data) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // 'Authorization':'Token' + " " +auth_token
      })
    }
    console.log(url);
    
    return this.http.post(url,data,httpOptions);
  }
}
