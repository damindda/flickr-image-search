import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/flickr-image-search',
    pathMatch: 'full',
  },
  {
    path: 'flickr-image-search',
    loadChildren: () =>
      import('./modules/flickr-search-page/flickr-search-page.module').then(
        (module) => module.FlickrSearchPageModule
      ),
  },
  {
    path: '**',
    component: NotfoundpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
