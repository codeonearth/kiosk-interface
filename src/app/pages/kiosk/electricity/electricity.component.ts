import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-electricity',
  imports: [CommonModule],
  templateUrl: './electricity.component.html',
  styleUrl: './electricity.component.scss'
})
export class ElectricityComponent {


  selectService(service: string) {
    console.log('Electricity service selected:', service);
    // later → route based on service
    // this.router.navigate(['/kiosk/electricity', service]);
  }
}
