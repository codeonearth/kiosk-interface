import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { KioskService } from '../../../core/services/kiosk/kioskService';

@Component({
  selector: 'app-electricity',
  imports: [CommonModule],
  templateUrl: './electricity.component.html',
  styleUrl: './electricity.component.scss'
})
export class ElectricityComponent implements OnInit {
  lang: any;
 constructor(private router: Router, private _kioskservice: KioskService) {}

  pageData : any;


  ngOnInit(): void {

    this.lang = localStorage.getItem('selectedLang') || 'en';

    this.pageData = this._kioskservice.getPageData('electricity-services', this.lang).subscribe(data => {
      this.pageData = data;
      console.log('Electricity page data:', this.pageData);
    });


  }

 selectElectricityService(service: any) {
    
  this.router.navigate([service]);
 }
   goBack() {
    // Navigates back to the 'Select Department' screen
    this.router.navigate(['kiosk/department']);
}

goHome() {
    // Navigates all the way back to the 'Welcome' screen
    this.router.navigate(['kiosk/home']);
} 

  }
  




