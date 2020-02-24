import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { UpdatebalancePage } from './updatebalance.page';
describe('UpdatebalancePage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UpdatebalancePage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(UpdatebalancePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=updatebalance.page.spec.js.map