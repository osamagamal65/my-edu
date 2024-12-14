import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multi-select-chips',
  standalone: true,
  templateUrl: './multi-select-chips.component.html',
  imports: [CommonModule],
  styleUrls: ['./multi-select-chips.component.scss'],

})
export class MultiSelectChipsComponent {
  @Input({ required: true }) options: any[] = [];
  @Input({ required: true }) groupName!: string;
  @Input() label?: string;

  @Output()
  toggleChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() { }

  selectedOptions: string[] = [];

    onOptionChange(value: string): void {
    if(this.selectedOptions.includes(value)) {
      this.selectedOptions = this.selectedOptions.filter((e) => e != value);
    } else {
      this.selectedOptions = [...this.selectedOptions,value];
    }
    this.toggleChange.emit(this.selectedOptions);
  }
}
