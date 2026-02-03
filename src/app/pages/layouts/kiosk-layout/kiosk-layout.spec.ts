import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KioskLayout } from './kiosk-layout';

describe('KioskLayout', () => {
  let component: KioskLayout;
  let fixture: ComponentFixture<KioskLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KioskLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KioskLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
