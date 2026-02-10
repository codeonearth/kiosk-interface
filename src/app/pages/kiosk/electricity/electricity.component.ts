import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { KioskService } from '../../../core/services/kiosk/kioskService';

@Component({
  selector: 'app-electricity',
  imports: [CommonModule],
  templateUrl: './electricity.component.html',
  styleUrl: './electricity.component.scss'
})
export class ElectricityComponent implements OnInit {
 constructor(private router: Router, private _kioskservice: KioskService) {}

  pageData : any;


  ngOnInit(): void {

    this.pageData = this._kioskservice.getPageData('electricity-services').subscribe(data => {
      this.pageData = data;
    });


  }
<<<<<<< HEAD


 selectElectricityService(service: any) {
    

    
=======
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
>>>>>>> d11d738ac1e797806855398bf78ca7fbc48605ba
  }
  



}
