import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-municipality',
  imports: [],
  templateUrl: './municipality.component.html',
  styleUrl: './municipality.component.scss'
})
export class MunicipalityComponent {
constructor(private router: Router) {}
 
 selectDepartment(dept: string) {
    // later route based on department
    // this.router.navigate(['/kiosk/service', dept]);
  }
   selectElectricity() {
    this.router.navigate(['/kiosk/electricity']);
  }
  selectService(service: string) {
    // later → route based on service
    // this.router.navigate(['/kiosk/electricity', service]);
  }
} 