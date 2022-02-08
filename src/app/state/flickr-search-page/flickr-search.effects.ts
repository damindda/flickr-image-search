import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, exhaustMap, switchMap } from 'rxjs';
import { FlickrImageSearchService } from 'src/app/services/flickr-image-search.service';
import {
  getFlickrImagesAction,
  getFlickrImagesSuccessAction,
  getFlickrImagesErrorAction,
  startLoadingAction,
} from './flickr-search.actions';

@Injectable()
export class ImageSearchEffects {
  constructor(
    private actions$: Actions,
    private flickrImageService: FlickrImageSearchService,
    private store: Store
  ) {}

  loadImages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getFlickrImagesAction),
      exhaustMap((actions) => {
        // startLoadingAction
        this.store.dispatch(startLoadingAction());
        return this.flickrImageService.searchKeyword(actions.keyword, actions.pagecount)
        .pipe(
          map((images) => getFlickrImagesSuccessAction({ data: images })),
          catchError(() =>
            of(
              getFlickrImagesErrorAction({
                error: 'there is an error while getting data',
              })
            )
          )
        );
      })
    );
  });
}
