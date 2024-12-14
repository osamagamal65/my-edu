import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonBreadcrumbs, IonBreadcrumb, IonIcon, IonSegment, IonSegmentButton, IonLabel, IonButton } from '@ionic/angular/standalone';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { ToggleButtonComponent } from 'src/app/shared/components/forms/toggle-button/toggle-button.component';
import { MultiSelectChipsComponent } from "../../shared/components/forms/multi-select-chips/multi-select-chips.component";

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, ToggleButtonComponent, CommonModule, FormsModule, NavbarComponent, IonBreadcrumbs, IonBreadcrumb, MultiSelectChipsComponent, IonButton]
})
export class SubscribePage {
  grades = ['first', 'seconds', 'third', 'fourth', 'fifth', 'six', 'seven'];
  topics = ['Arabic', 'Islamic', 'English', 'History', 'Sports'];
  genders = [{ value: 'boy', label: "Boy" }, { value: 'girl', label: 'Girl' }];
  selectedYear = 0;
  selectedMonthIndex = 0;
  selectedGender?: string;

  childInfo: any = {
    childName: '',
    childBirthYear: '',
    childBirthMonth: '',
    childBirthDay: '',
    childGrade: '',
    gender: '',
    topics: []
  }
  constructor() {

  }

  get getYears(): number[] {
    const startYear = 1990;
    const endYear = 2024;
    return Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);
  }

  get getMonths(): string[] {
    return [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  }

  get getDays(): number[] {
    const daysInMonth = new Date(this.selectedYear, this.selectedMonthIndex + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }


  goToPayment() {
    alert("to Payment");
  }

  get totalPrice(): number {
    return this.childInfo.topics.length * 450;
  }

  onGenderChange(val: string) {
    this.childInfo.gender = val;

  }

  onTopicChange(val: string[]) {
    this.childInfo.topics = val;
  }
}
