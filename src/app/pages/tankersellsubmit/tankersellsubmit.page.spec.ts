import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TankersellsubmitPage } from './tankersellsubmit.page';

describe('TankersellsubmitPage', () => {
  let component: TankersellsubmitPage;
  let fixture: ComponentFixture<TankersellsubmitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankersellsubmitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TankersellsubmitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
