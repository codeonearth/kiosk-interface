import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { KioskService } from '../../../core/services/kiosk/kioskService';

@Component({
  selector: 'app-department',
  imports: [CommonModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss'
})
export class DepartmentComponent implements OnInit {
  lang: any;
 constructor(private router: Router, private _kioskservice: KioskService) {}

  pageData : any;

  ngOnInit(): void {

    this.lang = localStorage.getItem('selectedLang') || 'en';
     
    this.pageData = this._kioskservice.getPageData('department', this.lang).subscribe(data => {
      this.pageData = data;
    });

  }


  selectDepartment(data: any) {
    this.router.navigate([data.config['route']]);
  }
  
    selectWater() {
    this.router.navigate(['/kiosk/water']);
  }
   selectGas() {
    this.router.navigate(['/kiosk/gas']);
  }
   selectMunicipality() {
    this.router.navigate(['/kiosk/municipality']);
  }
}