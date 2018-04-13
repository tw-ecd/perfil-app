import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';
import { HomeComponent } from './components/home/home.component';
import { QuizzComponent } from './components/quizz/quizz.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'quizz',
    component: QuizzComponent
  },
  {
    path: 'subscribe/:id',
    component: SubscriptionFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
