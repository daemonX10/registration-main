import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private httpClient: HttpClient) {}

  // end point : /apiX/profile/me
  /// weill give us the current user profile
  // requires token

  getCurrentUserProfile() {
    return this.httpClient.get('/apiX/profile/me');
  }
  createProfile(profileData: any) {
    return this.httpClient.post('/apiX/profile', profileData);
  }
}
