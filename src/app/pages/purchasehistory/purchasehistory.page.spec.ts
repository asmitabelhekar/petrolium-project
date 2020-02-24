import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PurchasehistoryPage } from './purchasehistory.page';

describe('PurchasehistoryPage', () => {
  let component: PurchasehistoryPage;
  let fixture: ComponentFixture<PurchasehistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasehistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PurchasehistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
