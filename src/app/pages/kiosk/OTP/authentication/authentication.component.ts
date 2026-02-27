import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KioskService } from '../../../../core/services/kiosk/kioskService';

@Component({
  selector: 'app-authentication',
  standalone: true,   // ✅ make sure this is here
  imports: [
    CommonModule,     // ✅ required for *ngIf, *ngFor
    FormsModule       // ✅ required for [(ngModel)]
  ],
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {
constructor(private route: ActivatedRoute , private router: Router, private _kioskservice: KioskService) {}
  selectedMethod: string | null = null;
  otp: string = '';

  selectAuth(method: string) {
    this.selectedMethod = method;
  }




  goBack() {
    this.selectedMethod = null;
    this.otp = '';
  }

  
  verifyOtp() {
    this.router.navigate(['/kiosk/department']);
  }
  verifyFingerPrint() {
    this.router.navigate(['/kiosk/department']);
  }
}