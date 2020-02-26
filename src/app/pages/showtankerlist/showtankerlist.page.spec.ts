import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowtankerlistPage } from './showtankerlist.page';

describe('ShowtankerlistPage', () => {
  let component: ShowtankerlistPage;
  let fixture: ComponentFixture<ShowtankerlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtankerlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowtankerlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
