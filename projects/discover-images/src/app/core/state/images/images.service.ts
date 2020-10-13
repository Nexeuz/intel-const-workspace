import {Injectable} from '@angular/core';
import {applyTransaction, ID} from '@datorama/akita';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ImagesStore} from './images.store';
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {PixaBayImg} from '../../interfaces/pixa-bay-img';
import {Observable, throwError} from 'rxjs';
import {Category} from '../../interfaces/category-filter';


@Injectable({providedIn: 'root'})
export class ImagesService {

  constructor(private imagesStore: ImagesStore,
              private http: HttpClient) {
  }

  /**
   *  makes a request for search a image, then set the response data in the store
   * @param term term to search
   * @param category optional, category to filter
   * @param lang to search default es (Spanish)
   */
  get(term: string, category?: Category, lang: string = 'es'): Observable<PixaBayImg> {
    this.imagesStore.setLoading(true);
    const params = this.params(term, category, lang);
    return this.http.get<PixaBayImg>(`${environment.host}`, {params}).pipe(
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

  /**
   * Object builder for params
   * @param term the term to search
   * @param category the category to filter
   * @param lang the lang to filter
   */
  params(term: string, category?: Category, lang: string = 'es'): HttpParams {
    if (category) {
    return  new HttpParams()
        .set('key', `${environment.apiKey}`)
        .set('lang', `${lang}`)
        .set('q', `${term}`)
        .set('category', `${category}`);
    } else  {
     return new HttpParams()
        .set('key', `${environment.apiKey}`)
        .set('lang', `${lang}`)
        .set('q', `${term}`);
    }
  }
}
