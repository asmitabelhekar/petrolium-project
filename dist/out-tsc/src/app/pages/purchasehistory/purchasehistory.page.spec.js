import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PurchasehistoryPage } from './purchasehistory.page';
describe('PurchasehistoryPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PurchasehistoryPage],
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
//# sourceMappingURL=purchasehistory.page.spec.js.map