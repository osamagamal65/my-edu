import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToggleButtonComponent } from './toggle-button.component';

describe('ToggleButtonComponent', () => {
  let component: ToggleButtonComponent;
  let fixture: ComponentFixture<ToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleButtonComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit toggleChange when an option is selected', () => {
    spyOn(component.toggleChange, 'emit');
    component.options = [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }];
    component.onOptionChange('1');
    expect(component.toggleChange.emit).toHaveBeenCalledWith('1');
  });
});
