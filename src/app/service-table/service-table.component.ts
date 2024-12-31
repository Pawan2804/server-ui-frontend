import { Component, OnInit } from '@angular/core';
import { ServiceDataService, Service } from '../service-data.service';
import { JsonPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-service-table',
  standalone: true,
  imports: [JsonPipe, NgFor, NgIf], // Add any required imports here
  templateUrl: './service-table.component.html',
  styleUrls: ['./service-table.component.css'],
})
export class ServiceTableComponent implements OnInit {
  services: Service[] = [];
  locations: string[] = []; // Dynamic location columns
  objectKeys = Object.keys;

  constructor(private serviceDataService: ServiceDataService) {}

  ngOnInit(): void {
    this.serviceDataService.getServices().subscribe({
      next: (data) => {
        console.log('Data received:', data);
        console.log('Data received from API:', data); // Log API data
        this.services = data;
        this.extractLocations();
        console.log('Services array after assignment:', this.services); // Debugging data
        this.services = data;
      },
      error: (err) => {
        console.error('Error fetching data:', err); // Log any error
      },
    });
  }
  extractLocations(): void {
    const allLocations = new Set<string>();
    this.services.forEach((service) => {
      if (service.statusLocation) {
        Object.keys(service.statusLocation).forEach((key) =>
          allLocations.add(key)
        );
      }
    });
    this.locations = Array.from(allLocations); // Convert Set to Array
    console.log('Unique Locations:', this.locations);
  }
}
