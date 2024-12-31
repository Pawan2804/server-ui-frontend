import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Service {
  id: number;
  name: string;
  statusLocation: { [key: string]: string };
  imageName: string;
  imageType: string;
  image: string; // Base64 encoded string
}

@Injectable({
  providedIn: 'root',
})
export class ServiceDataService {
  private apiUrl = 'http://localhost:8080/api/v1/servicehealth'; // Adjust based on backend URL

  constructor(private http: HttpClient) {}

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.apiUrl);
  }
}
