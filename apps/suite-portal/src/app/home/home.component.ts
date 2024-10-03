import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { services } from '../services/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  requestForm: FormGroup;

  constructor(private fb: FormBuilder, private services: services) {}

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      unitNumber: ['', Validators.required],
      serviceType: ['', Validators.required],
      summary: ['', Validators.required],
      details: [''],
    });
  }

  onSubmit() {
    if (this.requestForm.valid) {
      this.services.submitRequest(this.requestForm.value).subscribe(response => {
        // Handle response
        console.log('Request submitted', response);
      });
    }
  }
}
