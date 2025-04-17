import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegister } from '../models/iregister';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
    withCredentials: true,
  };

  constructor(private httpClient: HttpClient) {}

  // we need to perform the res call for /api/users
  // method : post
  // input(request) payload : registerObject {name, email, password}
  // output(response) payload: { token : 'value' }

  registerUser(user: IRegister): Observable<any> {
    console.log('Sending registration request:', user);
    return this.httpClient.post(
      `${this.baseUrl}/auth/signup`,
      user,
      this.httpOptions
    );
  }
  // /api/auth
  // get method : user details
  // we haveatoken on the
  // basis of of token : we need to retreive the user details .
  // api/auth : x-auth-token header
  getUserDetails(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/auth`, this.httpOptions);
  }
}
