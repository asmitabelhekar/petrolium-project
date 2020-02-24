import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DebitamountPage } from './debitamount.page';
describe('DebitamountPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DebitamountPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(DebitamountPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=debitamount.page.spec.js.map