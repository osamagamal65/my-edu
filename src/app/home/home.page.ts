import { Component } from '@angular/core';
import { IonContent, IonButton, IonHeader, IonToolbar, IonImg, IonButtons} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonToolbar, IonImg, IonButtons],
})
export class HomePage {
  constructor() { }
}
