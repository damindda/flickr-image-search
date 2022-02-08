import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickrSearchInputComponent } from './flickr-search-input.component';

describe('FlickrSearchInputComponent', () => {
  let component: FlickrSearchInputComponent;
  let fixture: ComponentFixture<FlickrSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlickrSearchInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
