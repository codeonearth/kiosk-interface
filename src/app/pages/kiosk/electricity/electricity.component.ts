import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-electricity',
  imports: [CommonModule],
  templateUrl: './electricity.component.html',
  styleUrl: './electricity.component.scss'
})
export class ElectricityComponent {
 constructor(private router: Router) {}

 selectDepartment(dept: string) {
    console.log('Selected:', dept);
    // later route based on department
    // this.router.navigate(['/kiosk/service', dept]);
  }
   selectElectricity() {
    this.router.navigate(['/kiosk/electricity']);
  }
  checkStatus() {
    this.router.navigate(['/kiosk/check-status']);
  }
  payBill() {
    this.router.navigate(['/kiosk/electricity/pay-bill']);
  }
  selectService(service: string) {
    console.log('Electricity service selected:', service);
    // later → route based on service
    // this.router.navigate(['/kiosk/electricity', service]);
  }
}
