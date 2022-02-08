import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { FlickerSearchState, FlickerSearchKeywordState, flickrSearchReducer, getFlickrImageData, getFlickrKeywordData } from './flickr-search-page/flickr-search.reducers';
import { flickrImageLoadReducer, getIsLoading, ImageLoadState } from './flickr-search-page/flickr-search-load.reducers';
import { flickrSearchKeywordReducer, getKeyword, KeywordState } from './flickr-search-page/flickr-search-keyword.reducers';
import { FilteredFlickrPhoto } from '../models/flickr-photo';

export interface FlickrAppState {
  flickrsearch: FlickerSearchState;
  isLoading: ImageLoadState,
  keyword: KeywordState,
}

export const reducers: ActionReducerMap<FlickrAppState> = {
  flickrsearch: flickrSearchReducer,
  isLoading: flickrImageLoadReducer,
  keyword: flickrSearchKeywordReducer
};

export const getAppLoadState = createFeatureSelector<ImageLoadState>('isLoading');
export const getFlickrImageState = createFeatureSelector<FlickerSearchState>('flickrsearch');
export const getFlickrSearchKeywordState = createFeatureSelector<KeywordState>('keyword');


export const getIsLoadingSelector = createSelector(
  getAppLoadState,
  getIsLoading
);

export const getFlickrImagesSelector = createSelector(
  getFlickrImageState,
  getFlickrImageData
);

export const getKeywordSelector = createSelector(
  getFlickrSearchKeywordState,
  getKeyword
);

