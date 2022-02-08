import { FlickrOutput, FilteredFlickrPhoto } from './../../models/flickr-photo';
import { createAction, props } from '@ngrx/store';
import { FlickrSearchActionTypes } from './flickr-action-types';


export const searchKeywordsAction = createAction(
  FlickrSearchActionTypes.KEYWORD,
  props<{ keyword: string }>()
);

export const getFlickrImagesAction = createAction(
  FlickrSearchActionTypes.KEYWORD,
  props<{ keyword: string, pagecount: number }>()
)

export const getFlickrImagesSuccessAction = createAction(
  FlickrSearchActionTypes.IMAGE_LOAD_SUCCESS,
  props<{ data: FilteredFlickrPhoto[] }>()
)

export const getFlickrImagesErrorAction = createAction(
  '[SEARCH] Flickr Load Failure',
  props<{ error: string }>()
)

export const startLoadingAction = createAction(FlickrSearchActionTypes.START_LOADING);
export const stopLoadingAction = createAction(FlickrSearchActionTypes.STOP_LOADING);

