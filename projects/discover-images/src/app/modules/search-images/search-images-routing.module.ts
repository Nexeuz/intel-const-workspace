import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchImageComponent} from './pages/search-image/search-image.component';

const routes: Routes = [
  {
    path: '',
    component: SearchImageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchImagesRoutingModule { }
