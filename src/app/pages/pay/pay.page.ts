import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular'; // Importa IonicModule
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { UserOrderService } from 'src/app/services/user-order.service';
import { TranslateModule } from '@ngx-translate/core';
import { LoginComponent } from "../../shared/login/login.component";
import { CreateAccountComponent } from "../../shared/create-account/create-account.component";

@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  standalone: true,
  styleUrls: ['./pay.page.scss'],
  imports: [IonicModule, CommonModule, TranslateModule, LoginComponent, CreateAccountComponent] // Asegúrate de agregar estos módulos
 // Asegúrate de agregar estos módulos
 // Asegúrate de agregar estos módulos
})
export class PayPage  {

  public showNewAccount: boolean;
  public step: number;

  constructor(
    public userOrderService: UserOrderService,
    private navController: NavController
  ) {
    this.showNewAccount = false;
    this.step = 1;
   }


  ionViewWillEnter() {
    this.showNewAccount = false;
    this.step = 1;
  }


  newAccount() {
    this.showNewAccount = true;
  }

  showLogin() {
    this.showNewAccount = false;
  }

  nextStep() {
    this.step++;
  }

  previousStep(){
    this.step--;
  }

  backHome() {
    this.navController.navigateForward('categories');
  }

}

