import { Component, OnInit } from '@angular/core';
import {ImagesQuery} from '../../../../core/state/images.query';
import {Observable} from 'rxjs';
import {HitsEntity} from '../../../../core/interfaces/pixa-bay-img';

@Component({
  selector: 'intc-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.scss']
})
export class SearchImageComponent implements OnInit {

  images$: Observable<HitsEntity[]>;
  constructor(private imagesQuery: ImagesQuery) {
    this.images$ =  this.imagesQuery.selectAll();
  }

  ngOnInit(): void {
  }

}
