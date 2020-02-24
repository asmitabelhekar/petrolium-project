import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DataentrycreditPage } from './dataentrycredit.page';
describe('DataentrycreditPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DataentrycreditPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(DataentrycreditPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=dataentrycredit.page.spec.js.map