export interface FlickrOutput {
  photos:  {
    photo: FlickrPhoto[];
  }
}

export interface FlickrPhoto {
  farm : string;
  id: string;
  secret: string;
  server: string;
  title: string;
}

export interface FilteredFlickrPhoto {
  url: string;
  title: string;
}


