import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubscribePage } from './subscribe.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

describe('SubscribePage', () => {
  let component: SubscribePage;
  let fixture: ComponentFixture<SubscribePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), FormsModule, SubscribePage],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(SubscribePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate total price correctly', () => {
    component.childInfo.topics = ['Arabic', 'English'];
    expect(component.totalPrice).toBe(900); // 2 topics * 450
  });

  it('should update gender on gender change', () => {
    component.onGenderChange('boy');
    expect(component.childInfo.gender).toBe('boy');
  });

  it('should update topics on topic change', () => {
    const newTopics = ['Islamic', 'History'];
    component.onTopicChange(newTopics);
    expect(component.childInfo.topics).toEqual(newTopics);
  });

  it('should return correct years', () => {
    const years = component.getYears;
    expect(years.length).toBe(35); // 1990 to 2024
    expect(years[0]).toBe(1990);
    expect(years[years.length - 1]).toBe(2024);
  });

  it('should return correct months', () => {
    const months = component.getMonths;
    expect(months.length).toBe(12);
    expect(months).toEqual([
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]);
  });

  it('should return correct days for selected month and year', () => {
    component.selectedYear = 2024;
    component.selectedMonthIndex = 1; // February
    const days = component.getDays;
    expect(days.length).toBe(29); // 2024 is a leap year
  });

  it('should alert when going to payment', () => {
    spyOn(window, 'alert');
    component.goToPayment();
    expect(window.alert).toHaveBeenCalledWith("to Payment");
  });

  // Add more tests as needed
});
