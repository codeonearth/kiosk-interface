import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kiosk-not-found-component',
  imports: [],
  templateUrl: './kiosk-not-found-component.component.html',
  styleUrl: './kiosk-not-found-component.component.scss'
})
export class KioskNotFoundComponentComponent {


  constructor(private route: Router){}

private lastClick = 0;

@HostListener('document:click')
onAnyClick() {
  const now = Date.now();
  if (now - this.lastClick > 1000) {
    this.route.navigate(['/kiosk']);
  }
  this.lastClick = now;
}


}
