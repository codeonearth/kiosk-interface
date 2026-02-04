import { Routes } from '@angular/router';
import { kioskGuard } from './core/guards/kiosk-guard';

export const routes: Routes = [
    {
        path: 'kiosk/kiosk_Not_Found',
        loadComponent: () => 
          import('./pages/kiosk/kiosk-not-found-component/kiosk-not-found-component.component')
            .then(m => m.KioskNotFoundComponentComponent)
    },
    

    {
    path: 'kiosk',
    loadComponent: () => 
      import('./pages/layouts/kiosk-layout/kiosk-layout')
        .then(m => m.KioskLayoutComponent),
    canActivate: [kioskGuard],
    children: [
      {
        path: '',
        redirectTo: 'location',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => 
          import('./pages/kiosk/home-component/home-component')
            .then(m => m.HomeComponent)
      },
      {
        path: 'location',
        loadComponent: () => 
          import('./pages/kiosk/kiosk-location-component/kiosk-location-component.component')
            .then(m => m.KioskLocationComponentComponent)
    },
    {
        path: 'otp',
        loadComponent: () => 
          import('./pages/kiosk/OTP/otp/otp.component')
            .then(m => m.OtpComponent)
    },
    {
        path: 'department',
        loadComponent: () => 
          import('./pages/kiosk/department/department.component')
            .then(m => m.DepartmentComponent)
    },
    {
        path: 'electricity',
        loadComponent: () => 
          import('./pages/kiosk/electricity/electricity.component')
            .then(m => m.ElectricityComponent)
    },
     {
        path: 'water',
        loadComponent: () => 
          import('./pages/kiosk/water/water.component')
            .then(m => m.WaterComponent)
    },
      {
        path: 'gas',
        loadComponent: () => 
          import('./pages/kiosk/gas/gas.component')
            .then(m => m.GasComponent)
    },
      {
        path: 'municipality',
        loadComponent: () => 
          import('./pages/kiosk/municipality/municipality.component')
            .then(m => m.MunicipalityComponent)
    },
          {
        path: 'check-status',
        loadComponent: () => 
          import('./pages/kiosk/electricity/check-status/check-status.component')
            .then(m => m.CheckStatusComponent)
    },
    ]
  },
];
