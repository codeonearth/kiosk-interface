import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-otp',
  imports: [CommonModule, FormsModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss'
})


export class OtpComponent {
  
  
lang: 'en' | 'hi' = 'en';
  phone = '';
  otp = '';
  otpSent = false;

  text: any = {};

  constructor(private route: ActivatedRoute , private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.lang = params['lang'] === 'hi' ? 'hi' : 'en';
      this.loadText();
    });
  }

 loadText() {
  this.text = this.lang === 'en'
    ? {
        title: 'Welcome',
        subtitle: 'Verify your mobile number to continue',
        mobileLabel: 'Mobile Number',
        mobilePlaceholder: 'Enter 10-digit number',
        sendOtp: 'Send OTP',
        otpTitle: 'OTP Verification',
        otpLabel: 'Enter OTP',
        verifyOtp: 'Verify OTP'
      }
    : {
        title: 'स्वागत है',
        subtitle: 'आगे बढ़ने के लिए मोबाइल नंबर सत्यापित करें',
        mobileLabel: 'मोबाइल नंबर',
        mobilePlaceholder: '10 अंकों का नंबर दर्ज करें',
        sendOtp: 'ओटीपी भेजें',
        otpTitle: 'ओटीपी सत्यापन',
        otpLabel: 'ओटीपी दर्ज करें',
        verifyOtp: 'ओटीपी सत्यापित करें'
      };
}

  sendOtp() {
    this.otpSent = true;
  }

verifyOtp() {
    this.router.navigate(['/kiosk/department']);
  }

}

