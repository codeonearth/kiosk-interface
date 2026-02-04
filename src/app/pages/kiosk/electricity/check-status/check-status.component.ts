import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-status',
  imports: [CommonModule],
  templateUrl: './check-status.component.html',
  styleUrl: './check-status.component.scss'
})
export class CheckStatusComponent {
constructor(private router: Router) {}




}
