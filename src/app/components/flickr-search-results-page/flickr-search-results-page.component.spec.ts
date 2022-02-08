import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickrSearchResultsPageComponent } from './flickr-search-results-page.component';

describe('FlickrSearchResultsPageComponent', () => {
  let component: FlickrSearchResultsPageComponent;
  let fixture: ComponentFixture<FlickrSearchResultsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlickrSearchResultsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrSearchResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
