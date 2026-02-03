import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [CommonModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {


  constructor(private router: Router) {}

  selectLanguage(lang: 'en' | 'hi') {
    // this.router.navigate(['otp'], { relativeTo: this.route });

    this.router.navigate(['/kiosk/otp'], {
      queryParams: { lang }
    });
  }
}

