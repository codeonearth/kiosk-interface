import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-water',
  imports: [],
  templateUrl: './water.component.html',
  styleUrl: './water.component.scss'
})
export class WaterComponent {
constructor(private router: Router) {}
 
 selectDepartment(dept: string) {
    console.log('Selected:', dept);
    // later route based on department
    // this.router.navigate(['/kiosk/service', dept]);
  }
   selectElectricity() {
    this.router.navigate(['/kiosk/electricity']);
  }
  selectService(service: string) {
    console.log('Electricity service selected:', service);
    // later → route based on service
    // this.router.navigate(['/kiosk/electricity', service]);
  }
} 