import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoTakerComponent } from './photo-taker/photo-taker.component'

const routes: Routes = [
  {
    path: '',
    component: PhotoTakerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
