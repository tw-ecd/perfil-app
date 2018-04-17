import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';

import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { HomeComponent } from './home/home.component';
import { QuizzComponent } from './quizz/quizz.component';
import { ResultComponent } from './result/result.component';
import { QuestionComponent } from './question/question.component';

import { PersonService } from '../providers/person.service';
import { QuestionService } from '../providers/question.service';
import { AppGlobals } from '../app-globals.service';
import { LocalStorageService } from '../providers/local-storage.service';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    SubscriptionFormComponent,
    HomeComponent,
    QuestionComponent,
    QuizzComponent,
    ResultComponent
  ],
  providers: [PersonService, QuestionService, LocalStorageService, AppGlobals]
})
export class ComponentsModule { }
