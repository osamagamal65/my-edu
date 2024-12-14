import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MultiSelectChipsComponent } from './multi-select-chips.component';

describe('MultiSelectChipsComponent', () => {
  let component: MultiSelectChipsComponent;
  let fixture: ComponentFixture<MultiSelectChipsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectChipsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MultiSelectChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
