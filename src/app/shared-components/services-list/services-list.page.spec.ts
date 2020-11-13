import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServicesListPage } from './services-list.page';

describe('MessagesPage', () => {
  let component: ServicesListPage;
  let fixture: ComponentFixture<ServicesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
