import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [HomePage, MessagesComponent],
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  // exports: [MessagesPage],
})
export class HomePageModule {}
