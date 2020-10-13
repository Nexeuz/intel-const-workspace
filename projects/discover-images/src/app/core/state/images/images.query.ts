import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ImagesStore, ImagesState } from './images.store';

@Injectable({ providedIn: 'root' })
export class ImagesQuery extends QueryEntity<ImagesState> {

  constructor(protected store: ImagesStore) {
    super(store);
  }

}
