import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceTableComponent } from './service-table/service-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ServiceTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'service-ui';
}
