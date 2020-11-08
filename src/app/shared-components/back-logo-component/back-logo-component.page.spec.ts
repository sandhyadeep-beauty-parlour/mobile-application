import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BackLogoComponentPage } from './back-logo-component.page';

describe('MessagesPage', () => {
  let component: BackLogoComponentPage;
  let fixture: ComponentFixture<BackLogoComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackLogoComponentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BackLogoComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
