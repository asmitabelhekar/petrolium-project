import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SliderimagesPage } from './sliderimages.page';
describe('SliderimagesPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SliderimagesPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SliderimagesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sliderimages.page.spec.js.map