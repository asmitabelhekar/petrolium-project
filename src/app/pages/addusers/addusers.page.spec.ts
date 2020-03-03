import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddusersPage } from './addusers.page';

describe('AddusersPage', () => {
  let component: AddusersPage;
  let fixture: ComponentFixture<AddusersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddusersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddusersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
