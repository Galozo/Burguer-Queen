import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.page.html',
  standalone: true,
  styleUrls: ['./list-products.page.scss'],
  imports: [IonicModule, CommonModule] // Asegúrate de agregar estos módulos
})
export class ListProductsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

