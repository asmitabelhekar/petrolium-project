import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DataentryopeningPage } from './dataentryopening.page';

describe('DataentryopeningPage', () => {
  let component: DataentryopeningPage;
  let fixture: ComponentFixture<DataentryopeningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataentryopeningPage ],
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
