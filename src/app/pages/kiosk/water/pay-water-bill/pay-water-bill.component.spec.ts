import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayWaterBillComponent } from './pay-water-bill.component';

describe('PayWaterBillComponent', () => {
  let component: PayWaterBillComponent;
  let fixture: ComponentFixture<PayWaterBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayWaterBillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayWaterBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
