import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { LayoutService } from './core/services/layouts/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div [class.kiosk-mode]="isKioskLayout">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .kiosk-mode {
      font-family: 'Arial', sans-serif;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  `]
})
export class AppComponent implements OnInit {
  private layoutService = inject(LayoutService);
  router = inject(Router);

  get isKioskLayout() {
    return this.layoutService.isKioskLayout();
  }

  ngOnInit() {
    const path = window.location.pathname;

    if (path.startsWith('/kiosk')) {
      this.layoutService.setLayout('kiosk');
    } else {
        this.router.navigate(['/kiosk']); 
    }
  }
}

