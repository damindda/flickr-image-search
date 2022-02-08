import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlickrSearchInputComponent } from 'src/app/components/flickr-search-input/flickr-search-input.component';
import { FlickrSearchResultsPageComponent } from 'src/app/components/flickr-search-results-page/flickr-search-results-page.component';

const routes: Routes = [
  {
    path: '',
    component: FlickrSearchResultsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlickrSearchPageRoutingModule { }
