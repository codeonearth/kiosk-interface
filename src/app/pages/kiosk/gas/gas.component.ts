import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gas',
  imports: [],
  templateUrl: './gas.component.html',
  styleUrl: './gas.component.scss'
})
export class GasComponent {
constructor(private router: Router) {}
 
 selectDepartment(dept: string) {
    // later route based on department
    // this.router.navigate(['/kiosk/service', dept]);
  }
   GasPay() {
    this.router.navigate(['/kiosk/Pay-gas-bill']);
  }
  selectService(service: string) {

    console.log('Gas service selected:', service);
    // later → route based on service
    // this.router.navigate(['/kiosk/gas', service]);
  }
}