import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddButtonPage } from './add-button.page';

describe('MessagesPage', () => {
  let component: AddButtonPage;
  let fixture: ComponentFixture<AddButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddButtonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
