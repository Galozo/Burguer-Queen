import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  standalone: true,
  styleUrls: ['./pay.page.scss'],
  imports: [IonicModule, CommonModule] // Asegúrate de agregar estos módulos
})
export class PayPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

