import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-electricity-complaint',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './complaint.component.html',
  styleUrl: './complaint.component.scss'
})
export class ComplaintComponent {

  mobileNumber: string = '';
  showComplaintDropdown: boolean = false;
  selectedComplaint: string = '';

  complaints: string[] = [
    'Power Failure',
    'Low Voltage Issue',
    'Bill Related Issue',
    'Meter Not Working',
    'Frequent Power Cuts',
    'Wrong Billing Amount',
    'Transformer Issue'
  ];

  constructor(private router: Router) {}

  // When mobile number changes
  onMobileChange() {
    // Allow only numbers
    this.mobileNumber = this.mobileNumber.replace(/[^0-9]/g, '');

    if (this.mobileNumber.length === 10) {
      this.showComplaintDropdown = true;
    } else {
      this.showComplaintDropdown = false;
      this.selectedComplaint = '';
    }
  }

  submitComplaint() {

    const payload = {
      mobileNumber: this.mobileNumber,
      complaint: this.selectedComplaint
    };

    console.log("Complaint Submitted:", payload);

    alert("Complaint Registered Successfully!");

    this.router.navigate(['/kiosk']);
  }

  goBack() {
    this.router.navigate(['/kiosk/electricity']);
  }

  goHome() {
    this.router.navigate(['/kiosk']);
  }
}