import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FlickrAppState, getIsLoadingSelector } from 'src/app/state/app.state';
import { getFlickrImagesAction } from 'src/app/state/flickr-search-page/flickr-search.actions';

@Component({
  selector: 'app-flickr-search-input',
  templateUrl: './flickr-search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlickrSearchInputComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.select(getIsLoadingSelector);

  constructor(private store: Store<FlickrAppState>) {}

  ngOnInit(): void {}

  getSearchedImages(text: string) {
    this.store.dispatch(getFlickrImagesAction({ keyword: text, pagecount: 1 }));
  }
}
