import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://upload.wikimedia.org/wikipedia/en/b/bb/Rick_and_Morty_season_4.png';
  image3 = 'https://images.wsj.net/im-1803?width=620&size=1.5';

  constructor() { }

  ngOnInit() {
  }

}