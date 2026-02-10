import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect-page',
  standalone: true,
  imports: [],
  templateUrl: './redirect-page.component.html',
  styleUrl: './redirect-page.component.scss'
})
export class RedirectPageComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['kiosk/bill-receipt']); // change path if needed
    }, 3000); // 3 seconds
  }
}