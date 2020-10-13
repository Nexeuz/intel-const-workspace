import {Injectable} from '@angular/core';
import {applyTransaction, ID} from '@datorama/akita';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ImagesStore} from './images.store';
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {PixaBayImg} from '../interfaces/pixa-bay-img';
import {Observable, throwError} from 'rxjs';
import {Category} from '../interfaces/category-filter';


@Injectable({providedIn: 'root'})
export class ImagesService {

  constructor(private imagesStore: ImagesStore,
              private http: HttpClient) {
  }

  /**
   *  makes a request for search a image, then set the response data in the store
   * @param term term to search
   * @param category optional, category to filter
   */
  get(term: string, category?: Category): Observable<PixaBayImg> {
    this.imagesStore.setLoading(true);
    const params = new HttpParams()
      .set('key', `${environment.apiKey}`)
      .set('lang', 'es')
      .set('q', `${term}`);
    if (category) {
      params.set('q', `${category}`);
    }
    return this.http.get<PixaBayImg>(`${environment.host}`, { params }).pipe(
      tap(entities => {
        applyTransaction(() => {
          this.imagesStore.setLoading(false);
          this.imagesStore.set(entities.hits);
        });
      }),
      catchError(err => {
        this.imagesStore.setLoading(false);
        return throwError(err);
      })
    );
  }
}
