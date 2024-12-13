import { Component } from '@angular/core';
import { IonContent, IonButton, IonImg} from '@ionic/angular/standalone';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, FooterComponent, IonImg, RouterLink, NavbarComponent],
})
export class HomePage {
  constructor() { }
}
