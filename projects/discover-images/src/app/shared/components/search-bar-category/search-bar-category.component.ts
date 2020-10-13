import { Component, OnInit } from '@angular/core';
import {ImagesService} from '../../../core/state/images/images.service';
import {UserQuery} from '../../../core/state/user/user.query';
import {switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'intc-search-bar-category',
  templateUrl: './search-bar-category.component.html',
  styleUrls: ['./search-bar-category.component.scss']
})
export class SearchBarCategoryComponent implements OnInit {

  toggleDropDown = false;
  categories = ['none', 'science', 'education', 'people', 'feelings', 'computer', 'buildings'];

  constructor(private imagesService: ImagesService,
              private userQuery: UserQuery) { }

  ngOnInit(): void {
  }

  /**
   * Search images and toggle dropdown
   * @param category to search
   */
  searchByCategory(category): void {
    if (category === 'none') {
      this.userQuery.select(it => it.currentTerm)
        .pipe(
          switchMap(it => this.imagesService.get(it)),
          tap(it => this.toggleDropDown = !this.toggleDropDown)
        ).subscribe();
    } else {
      this.userQuery.select(it => it.currentTerm)
        .pipe(
          switchMap(it => this.imagesService.get(it, category)),
          tap(it => this.toggleDropDown = !this.toggleDropDown)
        ).subscribe();
    }

  }
}
