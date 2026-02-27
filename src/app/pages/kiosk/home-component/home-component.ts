import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { KioskService } from '../../../core/services/kiosk/kioskService';
import { EncryptionService } from '../../../core/services/kiosk/encryption.service';

@Component({
  selector: 'app-home-component',
  imports: [CommonModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {


  constructor(private router: Router, private _kioskservice: KioskService, private _encryptionService: EncryptionService) {}

  data: any;
  languageData: any;



  ngOnInit() {

    
     
    this.data = this._kioskservice.getPageData('home', 'en').subscribe(x => {
      this.data = x;
      
    });

    this.languageData = this._kioskservice.GetLanguages().subscribe(x =>{
      this.languageData = x;
    });

    // this.data = this._kioskservice.getPageData('home').subscribe(x => {
    //   this.data = x;
    // });
  }

  selectLanguage(lang: 'en' | 'hi') {
    localStorage.removeItem('selectedLang');
    localStorage.setItem('selectedLang', lang)


    this.router.navigate(['/kiosk/otp']);
  }
}

