import { Component, OnInit } from '@angular/core';
import { services } from '../services/request.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent implements OnInit {
  requests: any[] = [];

  constructor(private services:services) {}

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests() {
    this.services.getRequests().subscribe(requests => {
      this.requests = requests;
    });
  }

  closeRequest(id: string) {
    this.services.closeRequest(id).subscribe(() => {
      this.loadRequests(); // Refresh the list
    });
  }
}
