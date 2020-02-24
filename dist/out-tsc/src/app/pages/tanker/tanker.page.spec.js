import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TankerPage } from './tanker.page';
describe('TankerPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TankerPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(TankerPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tanker.page.spec.js.map