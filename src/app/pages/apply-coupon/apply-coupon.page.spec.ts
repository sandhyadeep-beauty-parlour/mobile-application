import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApplyCouponPage } from './apply-coupon.page';

describe('MessagesPage', () => {
  let component: ApplyCouponPage;
  let fixture: ComponentFixture<ApplyCouponPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyCouponPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplyCouponPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
