import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import {HitsEntity } from '../interfaces/pixa-bay-img';

export interface ImagesState extends EntityState<HitsEntity> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'images', idKey: 'id' })
export class ImagesStore extends EntityStore<ImagesState> {

  constructor() {
    super();
  }

}

