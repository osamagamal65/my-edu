import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiSelectChipsComponent } from './multi-select-chips.component';

describe('MultiSelectChipsComponent', () => {
  let component: MultiSelectChipsComponent;
  let fixture: ComponentFixture<MultiSelectChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSelectChipsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MultiSelectChipsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit toggleChange when an option is selected', () => {
    spyOn(component.toggleChange, 'emit');
    component.onOptionChange('Option 1');
    expect(component.selectedOptions).toContain('Option 1');
    expect(component.toggleChange.emit).toHaveBeenCalledWith(['Option 1']);
  });

  it('should emit toggleChange when an option is deselected', () => {
    component.selectedOptions = ['Option 1'];
    spyOn(component.toggleChange, 'emit');
    component.onOptionChange('Option 1');
    expect(component.selectedOptions).not.toContain('Option 1');
    expect(component.toggleChange.emit).toHaveBeenCalledWith([]);
  });
});
