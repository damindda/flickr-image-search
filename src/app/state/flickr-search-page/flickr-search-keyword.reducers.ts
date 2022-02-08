import { createReducer, on } from '@ngrx/store';
import { searchKeywordsAction } from './flickr-search.actions';

export interface KeywordState {
  keyword: string;
}

export const initialState: KeywordState = {
  keyword: ''
}

export const flickrSearchKeywordReducer = createReducer(
  initialState,
  on(searchKeywordsAction, (state, { keyword }) => ({
    ...state,
    keyword: keyword
  })),
)

export const getKeyword = (state: KeywordState) => state.keyword;

