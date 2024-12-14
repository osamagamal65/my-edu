import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
  imports: [CommonModule],

})
export class ToggleButtonComponent  {
  @Input({ required: true }) options: { label: string; value: string }[] = [];
  @Input({ required: true }) groupName!: string;
  @Input({ required: true }) label!: string;

  @Output()
  toggleChange: EventEmitter<string> = new EventEmitter<string>();

  selectedOption: string = '';

  onOptionChange(option: string): void {
    this.selectedOption = option;
    this.toggleChange.emit(this.selectedOption);
  }
}
