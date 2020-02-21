import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TankerPage } from './tanker.page';

describe('TankerPage', () => {
  let component: TankerPage;
  let fixture: ComponentFixture<TankerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankerPage ],
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
