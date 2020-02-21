import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PetroldieselamountPage } from './petroldieselamount.page';

describe('PetroldieselamountPage', () => {
  let component: PetroldieselamountPage;
  let fixture: ComponentFixture<PetroldieselamountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetroldieselamountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PetroldieselamountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
