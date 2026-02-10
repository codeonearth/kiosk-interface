import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kiosk-location-component',
  standalone: true,
  templateUrl: './kiosk-location-component.component.html',
  styleUrl: './kiosk-location-component.component.scss'
})
export class KioskLocationComponentComponent  {
  onStart() {
    // Navigate to next screen (language / location)
  }
}