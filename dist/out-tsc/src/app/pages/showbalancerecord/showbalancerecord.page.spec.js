import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ShowbalancerecordPage } from './showbalancerecord.page';
describe('ShowbalancerecordPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShowbalancerecordPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ShowbalancerecordPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=showbalancerecord.page.spec.js.map