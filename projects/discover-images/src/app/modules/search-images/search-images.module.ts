import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchImageComponent } from './pages/search-image/search-image.component';
import {SearchImagesRoutingModule} from './search-images-routing.module';
import { ModalImageComponent } from './components/modal-image/modal-image.component';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [SearchImageComponent, ModalImageComponent],
  imports: [
    CommonModule,
    SearchImagesRoutingModule,
    SharedModule
  ]
})
export class SearchImagesModule { }
