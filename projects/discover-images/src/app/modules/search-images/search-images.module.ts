import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchImageComponent } from './pages/search-image/search-image.component';
import {SearchImagesRoutingModule} from './search-images-routing.module';
import { ImageComponent } from './components/image/image.component';



@NgModule({
  declarations: [SearchImageComponent, ImageComponent],
  imports: [
    CommonModule,
    SearchImagesRoutingModule
  ]
})
export class SearchImagesModule { }
