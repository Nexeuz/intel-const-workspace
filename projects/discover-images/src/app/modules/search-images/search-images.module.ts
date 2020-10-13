import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchImageComponent } from './pages/search-image/search-image.component';
import {SearchImagesRoutingModule} from './search-images-routing.module';



@NgModule({
  declarations: [SearchImageComponent],
  imports: [
    CommonModule,
    SearchImagesRoutingModule
  ]
})
export class SearchImagesModule { }
