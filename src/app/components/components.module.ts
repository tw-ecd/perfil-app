import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PhotoTakerComponent } from './photo-taker/photo-taker.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';

import { PersonService } from '../providers/person.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    PhotoTakerComponent,
    SubscriptionFormComponent,
    HomeComponent
  ],
  providers: [PersonService]
})
export class ComponentsModule { }
