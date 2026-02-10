import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-receipt',
  standalone: true,
  templateUrl: './bill-receipt.component.html',
  styleUrl: './bill-receipt.component.scss'
})
export class BillReceiptComponent {

  constructor(private router: Router) {}

  printReceipt() {
    window.print();
  }

  goBack() {
    this.router.navigate(['kiosk/department']); // change route if needed
  }
}