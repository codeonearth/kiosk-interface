import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KioskNotFoundComponentComponent } from './kiosk-not-found-component.component';

describe('KioskNotFoundComponentComponent', () => {
  let component: KioskNotFoundComponentComponent;
  let fixture: ComponentFixture<KioskNotFoundComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KioskNotFoundComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KioskNotFoundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
