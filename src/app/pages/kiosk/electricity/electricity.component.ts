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


 selectElectricityService(service: any) {
    

    
  }
  



}
