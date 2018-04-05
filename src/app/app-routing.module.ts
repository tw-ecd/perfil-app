import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoTakerComponent } from './components/photo-taker/photo-taker.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';

const routes: Routes = [
  {
    path: '',
    component: PhotoTakerComponent
  },
  {
    path: 'subscribe',
    component: SubscriptionFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
