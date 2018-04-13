import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';

import { PhotoTakerComponent } from './photo-taker/photo-taker.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { HomeComponent } from './home/home.component';
import { QuizzComponent } from './quizz/quizz.component';

import { PersonService } from '../providers/person.service';
import { QuestionService } from '../providers/question.service';
import { AppGlobals } from '../app-globals.service';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    PhotoTakerComponent,
    SubscriptionFormComponent,
    HomeComponent,
    QuizzComponent
  ],
  providers: [PersonService, QuestionService, AppGlobals]
})
export class ComponentsModule { }
