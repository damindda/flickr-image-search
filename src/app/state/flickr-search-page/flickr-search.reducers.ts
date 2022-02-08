import { createReducer, on } from '@ngrx/store';
import { FilteredFlickrPhoto } from './../../models/flickr-photo';
import { getFlickrImagesAction, getFlickrImagesSuccessAction, getFlickrImagesErrorAction } from './flickr-search.actions';

export interface FlickerSearchState {
  error: any;
  data: FilteredFlickrPhoto[],
  status: 'pending' | 'loading' | 'error' | 'success'
}

export interface FlickerSearchKeywordState {
  keyword: string;
}

export const initialState: FlickerSearchState = {
  error: null,
  data: [],
  status: 'pending',
}

export const flickrSearchReducer = createReducer(
  initialState,
  on(getFlickrImagesAction, (state) => ({...state, status: 'loading' })),
  on(getFlickrImagesSuccessAction, (state, { data }) => ({
    ...state,
    data: [...state.data, ...data],
    error: null,
    status: 'success'
  })),
  on(getFlickrImagesErrorAction, (state, { error }) => ({...state, error: error })),
)

export const getFlickrImageData = (state: FlickerSearchState) => state.data;

export const getFlickrKeywordData = (state: FlickerSearchKeywordState) => state.keyword;
