import { Injectable, signal } from '@angular/core';

export type LayoutType = 'kiosk' | 'public';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private currentLayout = signal<LayoutType>('public');
  
  // Signals for layout state
  readonly layout = this.currentLayout.asReadonly();
  
  setLayout(layout: LayoutType) {
    this.currentLayout.set(layout);
  }
  
    
  isKioskLayout(): boolean {
    return this.currentLayout() === 'kiosk';
  }
  
  // Kiosk specific methods
  startKioskSession() {
    this.setLayout('kiosk');
    // Start session timer, disable right click, etc.
    this.disableRightClick();
  }
  
  endKioskSession() {
    this.setLayout('public');
    this.enableRightClick();
  }
  
  private disableRightClick() {
    document.addEventListener('contextmenu', this.preventContextMenu);
    document.addEventListener('keydown', this.preventKeys);
  }
  
  private enableRightClick() {
    document.removeEventListener('contextmenu', this.preventContextMenu);
    document.removeEventListener('keydown', this.preventKeys);
  }
  
  private preventContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    return false;
  };
  
  private preventKeys = (event: KeyboardEvent) => {
    // Disable F12, Ctrl+Shift+I, etc.
    if (
      event.key === 'F12' ||
      (event.ctrlKey && event.shiftKey && event.key === 'I') ||
      (event.ctrlKey && event.key === 'u')
    ) {
      event.preventDefault();
      return false;
    }
    return true;
  };
}