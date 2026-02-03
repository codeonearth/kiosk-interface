import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KioskLocationComponentComponent } from './kiosk-location-component.component';

describe('KioskLocationComponentComponent', () => {
  let component: KioskLocationComponentComponent;
  let fixture: ComponentFixture<KioskLocationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KioskLocationComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KioskLocationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
