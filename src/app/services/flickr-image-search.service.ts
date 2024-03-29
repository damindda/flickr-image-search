import { FlickrOutput } from './../models/flickr-photo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { getFlickrImagesAction, stopLoadingAction } from '../state/flickr-search-page/flickr-search.actions';

@Injectable({
  providedIn: 'root',
})
export class FlickrImageSearchService {
  count: number = 1;
  constructor(private http: HttpClient, private store: Store) {}

  searchKeyword(keyword: string) {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${environment.flickr.key}&tags=${keyword}&format=json&nojsoncallback=1&page=${this.count}&per_page=${this.count*100}`;
    return this.http.get<FlickrOutput>(url).pipe(
      map((response: FlickrOutput) => {
        const urlarray: any = [];
        response.photos.photo.forEach((photo) => {
          const searchedPhotoObject = {
            url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`,
            title: photo.title,
          };
          urlarray.push(searchedPhotoObject);
        });
        this.store.dispatch(stopLoadingAction());
        return urlarray;
      })
    );
  }

  pageScrollLazyLoadData() {



  }
}
