import { Component, OnInit } from '@angular/core';
import { IonicModule, LoadingController, NavController, NavParams } from '@ionic/angular'; // Importa IonicModule
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Category } from 'src/app/models/category';
import { Store } from '@ngxs/store';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { GetCategories } from 'src/app/state/categories/categories.actions';
import { CategoriesState } from 'src/app/state/categories/categories.state';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  standalone: true,
  styleUrls: ['./categories.page.scss'],
  imports: [IonicModule, CommonModule, TranslateModule] // Asegúrate de agregar estos módulos
})
export class CategoriesPage implements OnInit {

  public categories : Category[];

  constructor(
    private store : Store,
    private loadingController: LoadingController,
    private translate: TranslateService,
    private navController: NavController,
    private navParams: NavParams
  ) {
    this.categories = [];
  }

  ngOnInit() {
    this.loadData();
  }

  async loadData () {

    const loading = await this.loadingController.create({
      message: this.translate.instant('label.loading'),
    });

    await loading.present();

    

    this.store.dispatch(new GetCategories()).subscribe({
      next: () => {
        this.categories = this.store.selectSnapshot(CategoriesState.categories);
        console.log(this.categories);
      }, error: (err) => {
        console.error(err);
      },
      complete: () => {
        loading.dismiss();
      }
    })

  }

  goToProducts(category: Category) {
    this.navParams.data['idCategory'] = category._id;
    this.navController.navigateForward('list-products');

  }

}

