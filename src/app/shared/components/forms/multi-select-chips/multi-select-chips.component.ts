import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multi-select-chips',
  standalone: true,
  templateUrl: './multi-select-chips.component.html',
  imports: [CommonModule],
  styleUrls: ['./multi-select-chips.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectChipsComponent),
      multi: true
    }
  ]
})
export class MultiSelectChipsComponent {
  @Input({ required: true }) options: any[] = [];
  @Input({ required: true }) groupName!: string;
  @Input() label?: string;

  @Output()
  toggleChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() { }



  selectedOptions: string[] = [];

  // ControlValueAccessor methods
  writeValue(value: string): void {
    if(this.selectedOptions.includes(value)) {
      this.selectedOptions = this.selectedOptions.filter((e) => e != value);
    } else {
      this.selectedOptions = [...this.selectedOptions,value];

    }
  }

  registerOnChange(fn: any): void {
    this.toggleChange.subscribe(fn);
  }

  registerOnTouched(fn: any): void {``
    // Implement if needed
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implement if needed
  }

  // Method to handle option selection
  onOptionChange(value: string): void {
    if(this.selectedOptions.includes(value)) {
      this.selectedOptions = this.selectedOptions.filter((e) => e != value);
    } else {
      this.selectedOptions = [...this.selectedOptions,value];
    }
    this.toggleChange.emit(this.selectedOptions);
  }
}
