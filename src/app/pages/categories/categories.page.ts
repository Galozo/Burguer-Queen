import { Component, OnInit } from '@angular/core';
import { IonicModule, LoadingController, NavController, NavParams } from '@ionic/angular'; // Importa IonicModule
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Category } from 'src/app/models/category';
import { Select, Store } from '@ngxs/store';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { GetCategories } from 'src/app/state/categories/categories.actions';
import { CategoriesState } from 'src/app/state/categories/categories.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  standalone: true,
  styleUrls: ['./categories.page.scss'],
  imports: [IonicModule, CommonModule, TranslateModule] // Asegúrate de agregar estos módulos
})
export class CategoriesPage  {

   @Select(CategoriesState.categories)
  private categories$: Observable<Category[]>;

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

  ionViewWillEnter(){
    this.loadData();
  }



  async loadData () {

    const loading = await this.loadingController.create({
      message: this.translate.instant('label.loading'),
    });

    await loading.present();

    

    this.store.dispatch(new GetCategories());
    this.categories$.subscribe({
      next: () => {
        this.categories = this.store.selectSnapshot(CategoriesState.categories);
        console.log(this.categories);
        loading.dismiss();
      }, error: (err) => {
        console.error(err);
        loading.dismiss();
      }
    })

  }

  goToProducts(category: Category) {
    this.navParams.data['idCategory'] = category._id;
    this.navController.navigateForward('list-products');

  }

  refreshCategories($event) {

    this.store.dispatch(new GetCategories());

    $event.target.complete();
  }
}

