import { Component, OnInit } from '@angular/core';
import { IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IonImg],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  constructor() { }


}
