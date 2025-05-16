import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController, NavParams } from '@ionic/angular'; // Importa IonicModule
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Product } from 'src/app/models/product';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ProductExtraOption } from 'src/app/models/product-extra-option';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  standalone: true,
  styleUrls: ['./product.page.scss'],
  imports: [IonicModule, CommonModule, TranslateModule,  FormsModule,] // Asegúrate de agregar estos módulos
})
export class ProductPage implements OnInit {

  public product: Product;


  constructor(
    private navController: NavController,
    private navParams: NavParams
  ) { 
    console.log(this.navParams.data['product']);
    this.product = this.navParams.data['product'];
  }

  ngOnInit() {


    if(!this.product){
      this.navController.navigateForward('categories');
    }

  }

  changeMultipleOption($event, options: ProductExtraOption[]) {
    console.log($event);

    options.forEach(op => op.activate = $event.detail.value == op.name);

    console.log(options);
  }

}

