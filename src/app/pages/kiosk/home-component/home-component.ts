import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { KioskService } from '../../../core/services/kiosk/kioskService';

@Component({
  selector: 'app-home-component',
  imports: [CommonModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {


  constructor(private router: Router, private _kioskservice: KioskService) {}

  data: any;

  ngOnInit() {
    this.data = this._kioskservice.getPageData('home').subscribe(x => {
      this.data = x;
    });
  }

  selectLanguage(lang: 'en' | 'hi') {
    // this.router.navigate(['otp'], { relativeTo: this.route });





    this.router.navigate(['/kiosk/otp'], {
      queryParams: { lang }
    });
  }
}

