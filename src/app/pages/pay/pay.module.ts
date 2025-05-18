import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayPageRoutingModule } from './pay-routing.module';

import { PayPage } from './pay.page';
import { TranslateModule } from '@ngx-translate/core';
import { LoginComponent } from 'src/app/shared/login/login.component';
import { CreateAccountComponent } from 'src/app/shared/create-account/create-account.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayPageRoutingModule,
    PayPage,
    TranslateModule.forChild(),
    LoginComponent,
    CreateAccountComponent
  ],
  declarations: []
})
export class PayPageModule {}
