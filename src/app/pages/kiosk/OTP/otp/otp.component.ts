import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KioskService } from '../../../../core/services/kiosk/kioskService';

@Component({
  selector: 'app-otp',
  imports: [CommonModule, FormsModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss'
})


export class OtpComponent {
  
  
lang:any;
  phone = '';
  otp = '';
  otpSent = false;

  text: any = {};

  data: any;

  constructor(private route: ActivatedRoute , private router: Router, private _kioskservice: KioskService) {}

  ngOnInit() {
    this.lang = localStorage.getItem('selectedLang') || 'en';
    this.data = this._kioskservice.getPageData('otp', this.lang).subscribe(x => {
      this.data = x;
    });

    this.route.queryParams.subscribe(params => {
      this.lang = params['lang'] === 'hi' ? 'hi' : 'en';
    });
  }

 

  sendOtp() {
    this.router.navigate(['/kiosk/authentication']);
    // this.otpSent = true;
  }

verifyOtp() {
    this.router.navigate(['/kiosk/department']);
  }

}

