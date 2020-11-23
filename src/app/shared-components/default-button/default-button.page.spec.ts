import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DefaultButtonPage } from './default-button.page';

describe('MessagesPage', () => {
  let component: DefaultButtonPage;
  let fixture: ComponentFixture<DefaultButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultButtonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
