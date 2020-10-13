import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SearchBarCategoryComponent } from './components/search-bar-category/search-bar-category.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {RouterModule} from '@angular/router';



@NgModule({
    declarations: [HeaderComponent, SearchBarComponent, SearchBarCategoryComponent, SpinnerComponent],
  exports: [
    HeaderComponent,
    SearchBarComponent,
    SearchBarCategoryComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule { }
