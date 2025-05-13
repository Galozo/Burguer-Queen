import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  standalone: true,
  styleUrls: ['./categories.page.scss'],
  imports: [IonicModule, CommonModule] // Asegúrate de agregar estos módulos
})
export class CategoriesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

