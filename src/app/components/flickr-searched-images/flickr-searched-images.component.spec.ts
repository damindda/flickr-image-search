import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickrSearchedImagesComponent } from './flickr-searched-images.component';

describe('FlickrSearchedImagesComponent', () => {
  let component: FlickrSearchedImagesComponent;
  let fixture: ComponentFixture<FlickrSearchedImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlickrSearchedImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrSearchedImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
