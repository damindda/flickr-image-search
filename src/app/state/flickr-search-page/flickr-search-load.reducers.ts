import { createReducer, on } from '@ngrx/store';
import { FilteredFlickrPhoto } from '../../models/flickr-photo';
import { startLoadingAction, stopLoadingAction } from './flickr-search.actions';

export interface ImageLoadState {
  isLoading: boolean;
}

export const initialState: ImageLoadState = {
  isLoading: false
}

export const flickrImageLoadReducer = createReducer(
  initialState,
  on(startLoadingAction, (state: ImageLoadState) => ({
    isLoading: true,
  })),
  on(stopLoadingAction, (state: ImageLoadState) => ({
    isLoading: false,
  }))
)

export const getIsLoading = (state: ImageLoadState) => state.isLoading;

