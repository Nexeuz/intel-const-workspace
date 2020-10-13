import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import {ImagesService} from '../../../../core/state/images.service';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'intc-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  search: FormControl = new FormControl('', [Validators.required]);
  constructor(private imagesService: ImagesService,
              private router: Router) { }

  ngOnInit(): void {
  }

  searchImage(): void {
    this.imagesService.get(this.search.value)
      .pipe(
        tap(it => this.router.navigateByUrl('search-image'))
      )
      .subscribe();
  }
}
