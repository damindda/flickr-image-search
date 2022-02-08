import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flickr-search-results-page',
  templateUrl: './flickr-search-results-page.component.html',
  styleUrls: ['./flickr-search-results-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlickrSearchResultsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
