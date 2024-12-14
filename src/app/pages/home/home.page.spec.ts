import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

describe('HomePage', () => {

  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HomePage],
      declarations: [],
      providers: [
        { provide: ActivatedRoute, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a header with the correct title', () => {
    const headerElement = fixture.debugElement.query(By.css('h2'));
    expect(headerElement.nativeElement.textContent).toContain('Discover the magic of our surprise box');
  });

  it('should have a subscribe button', () => {
    const buttonElement = fixture.debugElement.query(By.css('ion-button'));
    expect(buttonElement).toBeTruthy();
  });

  it('should have a footer', () => {
    const footerElement = fixture.debugElement.query(By.css('app-footer'));
    expect(footerElement).toBeTruthy();
  });

  it('should redirect to subscribe page when button is clicked', () => {
    const button = fixture.debugElement.query(By.css('ion-button'));
    expect(button).toBeTruthy();
    button.triggerEventHandler('click', null);
    expect(router.url).toBe('/subscribe');
  });
});
