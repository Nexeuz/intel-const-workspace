import { Component, OnInit } from '@angular/core';
import {ImagesQuery} from '../../../../core/state/images/images.query';
import {Observable} from 'rxjs';
import {HitsEntity} from '../../../../core/interfaces/pixa-bay-img';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'intc-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.scss']
})
export class SearchImageComponent implements OnInit {

  images$: Observable<HitsEntity[]>;
  loading$: Observable<boolean>;
  constructor(private imagesQuery: ImagesQuery) {
    this.loading$ = this.imagesQuery.selectLoading();
    this.images$ =  this.imagesQuery.selectAll()
      .pipe(
        shareReplay(1)
      );
  }

  ngOnInit(): void {
  }

}
