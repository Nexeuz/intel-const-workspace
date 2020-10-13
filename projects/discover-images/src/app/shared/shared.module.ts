import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
    declarations: [HeaderComponent, SearchBarComponent],
  exports: [
    HeaderComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
