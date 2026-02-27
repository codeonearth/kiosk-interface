import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KioskService } from '../../../../core/services/kiosk/kioskService';
import {HostListener, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, OnDestroy {

  selectedMethod: string | null = null;
  otp: string = '';

  private timeout: any;
  private readonly idleTime = 5000; // 5 sec

  constructor(private router: Router) {}
@HostListener('document:click', ['$event'])
onClickOutside(event: any) {
  const clickedInside = event.target.closest('.keyboard') ||
                        event.target.closest('.otp-input');

  if (!clickedInside) {
    this.showKeyboard = false;
  }
}
  ngOnInit() {
    this.startIdleTimer();
  }

  ngOnDestroy() {
    clearTimeout(this.timeout);
  }

  // 👇 Only reset timer if on selection screen
  @HostListener('document:click')
  @HostListener('document:mousemove')
  @HostListener('document:keydown')
  resetTimer() {
    if (this.selectedMethod === null) {
      this.startIdleTimer();
    }
  }

  startIdleTimer() {
    clearTimeout(this.timeout);

    if (this.selectedMethod === null) {
      this.timeout = setTimeout(() => {
        this.router.navigate(['/kiosk']);
      }, this.idleTime);
    }
  }

  stopIdleTimer() {
    clearTimeout(this.timeout);
  }

  selectAuth(method: string) {
    this.selectedMethod = method;
    this.stopIdleTimer(); // 🔥 stop redirect when inside OTP/Fingerprint
  }

  goBack() {
    this.selectedMethod = null;
    this.otp = '';
    this.startIdleTimer(); // 🔥 restart timer when back to selection
  }

  authenticate() {
    if (this.selectedMethod === 'fingerprint') {
      console.log('Fingerprint authentication triggered');
    }

    if (this.selectedMethod === 'otp') {
      console.log('OTP Entered:', this.otp);
    }
  }

   verifyOtp() {
    this.router.navigate(['/kiosk/department']);
  }
  verifyFingerPrint() {
    this.router.navigate(['/kiosk/department']);
  }
 showKeyboard: boolean = false;

keys: string[] = ['1','2','3','4','5','6','7','8','9','0'];

pressKey(key: string) {
  if (this.otp.length < 6) {
    this.otp += key;
  }

  // ✅ Auto hide keyboard when 6 digits entered
  if (this.otp.length === 6) {
    this.showKeyboard = false;
  }
}

backspace() {
  this.otp = this.otp.slice(0, -1);
}
}
 
