import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FilteredFlickrPhoto } from './../../models/flickr-photo';
import {
  getFlickrImagesSelector,
  getIsLoadingSelector,
  getKeywordSelector,
} from '../../state/app.state';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FlickrImageSearchService } from 'src/app/services/flickr-image-search.service';
import { getFlickrImagesAction } from 'src/app/state/flickr-search-page/flickr-search.actions';

@Component({
  selector: 'app-flickr-searched-images',
  templateUrl: './flickr-searched-images.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlickrSearchedImagesComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.select(getIsLoadingSelector);
  pagescroll$ = new BehaviorSubject<number>(1);
  value = this.pagescroll$.value;
  searchresults$: Observable<FilteredFlickrPhoto[]> = this.store.select(
    getFlickrImagesSelector
  );
  keyword$: Observable<string> = this.store.select(getKeywordSelector);
  constructor(private store: Store, private flickerimageservice: FlickrImageSearchService) {}

  ngOnInit(): void {}

  onScroll() {
    this.pagescroll$.next(this.value + 1);
    this.store.dispatch(getFlickrImagesAction({ keyword: 'cats', pagecount: this.pagescroll$.value }));
  }
}
