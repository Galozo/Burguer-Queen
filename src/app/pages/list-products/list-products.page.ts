import { Component, OnInit } from '@angular/core';
import { IonicModule, LoadingController, NavController, NavParams } from '@ionic/angular'; // Importa IonicModule
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Select, Store } from '@ngxs/store';
import { Product } from 'src/app/models/product';
import { GetProductsByCategory } from 'src/app/state/products/products.actions';
import { ProductsState } from 'src/app/state/products/products.state';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.page.html',
  standalone: true,
  styleUrls: ['./list-products.page.scss'],
  imports: [IonicModule, CommonModule, TranslateModule] // Asegúrate de agregar estos módulos
})
export class ListProductsPage implements OnInit {

  @Select(ProductsState.products)
  private products$: Observable<Product[]>;
  

  public products: Product[];
  private idCategory: string;

  constructor(
    private navController: NavController,
    private navParams: NavParams,
    private store: Store,
    private loadingController: LoadingController,
    private translate: TranslateService
  ) {
    console.log(this.navParams.data['idCategory']);
    this.idCategory = this.navParams.data['idCategory'];
    this.products = [];
  }

  ionViewWillEnter(){

    

  }

  async ngOnInit() {

    if (this.idCategory){

      const loading = await this.loadingController.create({
      message: this.translate.instant('label.loading'),
    });

    await loading.present();

      this.store.dispatch(new GetProductsByCategory({ idCategory: this.idCategory }))
      this.products$.subscribe({
        next: () => {
          this.products = this.store.selectSnapshot(ProductsState.products);
          console.log(this.products);
          loading.dismiss();
        },
        error: (err) => {
          console.error(err);
          loading.dismiss();
        }
      })
    }else{
      this.navController.navigateForward('categories');
    }
  }

  goToProduct(product: Product) {
    this.navParams.data['product'] = product;
    this.navController.navigateForward('product');
  }

  refreshProducts($event){

    this.store.dispatch(new GetProductsByCategory({ idCategory: this.idCategory }))
    $event.target.complete();
  }



}

