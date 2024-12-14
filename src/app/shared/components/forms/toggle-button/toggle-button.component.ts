// src/app/shared/components/forms/toggle-button/toggle-button.component.ts
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleButtonComponent),
      multi: true
    }
  ]
})
export class ToggleButtonComponent implements ControlValueAccessor {
  @Input({ required: true }) options: { label: string; value: string }[] = [];
  @Input({ required: true }) groupName!: string;
  @Input({ required: true }) label!: string;

  @Output()
  toggleChange: EventEmitter<string> = new EventEmitter<string>();

  selectedOption: string = '';

  // ControlValueAccessor methods
  writeValue(value: string): void {
    this.selectedOption = value;
  }

  registerOnChange(fn: any): void {
    this.toggleChange.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    // Implement if needed
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implement if needed
  }

  // Method to handle option selection
  onOptionChange(option: string): void {
    this.selectedOption = option;
    this.toggleChange.emit(this.selectedOption);
  }
}
