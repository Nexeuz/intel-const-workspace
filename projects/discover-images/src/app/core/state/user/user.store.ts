import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface UserState {
   currentTerm: string;
   categorySelected: string;
}

export function createInitialState(): UserState {
  return {
    currentTerm: '',
    categorySelected: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user' })
export class UserStore extends Store<UserState> {

  constructor() {
    super(createInitialState());
  }

}

