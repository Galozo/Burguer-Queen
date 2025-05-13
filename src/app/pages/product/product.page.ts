import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  standalone: true,
  styleUrls: ['./product.page.scss'],
  imports: [IonicModule, CommonModule] // Asegúrate de agregar estos módulos
})
export class ProductPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

