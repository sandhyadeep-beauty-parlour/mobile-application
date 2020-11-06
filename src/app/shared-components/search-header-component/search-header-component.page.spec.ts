import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchHeaderComponentPage } from './search-header-component.page';

describe('MessagesPage', () => {
  let component: SearchHeaderComponentPage;
  let fixture: ComponentFixture<SearchHeaderComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHeaderComponentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchHeaderComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
