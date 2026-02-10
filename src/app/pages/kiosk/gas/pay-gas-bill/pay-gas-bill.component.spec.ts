import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayGasBillComponent } from './pay-gas-bill.component';

describe('PayGasBillComponent', () => {
  let component: PayGasBillComponent;
  let fixture: ComponentFixture<PayGasBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayGasBillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayGasBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
