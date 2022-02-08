import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { FlickrSearchPageRoutingModule } from './flickr-search-page-routing.module';
import { ImageSearchEffects } from 'src/app/state/flickr-search-page/flickr-search.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlickrSearchPageRoutingModule,
    EffectsModule.forFeature([ImageSearchEffects])
  ]
})
export class FlickrSearchPageModule { }
