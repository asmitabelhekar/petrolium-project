import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DataentryopeningPage } from './dataentryopening.page';
describe('DataentryopeningPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DataentryopeningPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(DataentryopeningPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=dataentryopening.page.spec.js.map