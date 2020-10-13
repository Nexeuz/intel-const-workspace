import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ImagesService} from '../../../core/state/images/images.service';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {UserStore} from '../../../core/state/user/user.store';
import {UserQuery} from '../../../core/state/user/user.query';

@Component({
  selector: 'intc-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  search: FormControl = new FormControl('', [Validators.required]);

  constructor(private imagesService: ImagesService,
              private router: Router,
              private userStore: UserStore,
              private userQuery: UserQuery) {
  }

  ngOnInit(): void {
    this.userQuery.select(it => it.currentTerm)
      .pipe(
        tap(it => this.search.setValue(it))
      ).subscribe();
  }

  /**
   * Search an image and update userStore with current term
   */
  searchImage(): void {
    if (this.search.value !== ''){
      this.userStore.update(state => ({
          ...state,
          currentTerm: this.search.value
        })
      );
      this.imagesService.get(this.search.value)
        .pipe(
          tap(it => this.router.navigateByUrl('search-image'))
        ).subscribe();
    }
  }
}
