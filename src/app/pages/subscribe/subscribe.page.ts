import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavbarComponent]
})
export class SubscribePage {

  constructor() { }


}
