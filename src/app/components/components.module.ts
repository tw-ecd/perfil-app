import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoTakerComponent } from './photo-taker/photo-taker.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';

import { PersonService } from '../providers/person.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PhotoTakerComponent,
    SubscriptionFormComponent
  ],
  providers: [PersonService]
})
export class ComponentsModule { }
