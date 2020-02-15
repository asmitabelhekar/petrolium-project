import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerdetilPage } from './customerdetil.page';

describe('CustomerdetilPage', () => {
  let component: CustomerdetilPage;
  let fixture: ComponentFixture<CustomerdetilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerdetilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerdetilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
