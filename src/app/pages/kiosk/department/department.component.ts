import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  imports: [CommonModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss'
})
export class DepartmentComponent {
 constructor(private router: Router) {}

  selectDepartment(dept: string) {
    console.log('Selected:', dept);
    // later route based on department
    // this.router.navigate(['/kiosk/service', dept]);
  }
  selectElectricity() {
    this.router.navigate(['/kiosk/electricity']);
  }
}