import {Component, OnInit} from '@angular/core';
import {Image} from './Image';
import {timer} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  images: Image[] = [];

  constructor() {}

  ngOnInit(): void {
    this.images = this.generateImages();
  }

  generateImages(): Image[] {
    const images: Image[] = [];

    for (let idx = 0; idx <= 40; idx++) {
      switch (idx) {
        case 3:
        case 13:
        case 33:
        case 23:
        case 39:
          images.push(new Image(
            'https://picsum.photos/200/200/?random=' + idx, 'big'));
          break;

        case 7:
        case 8:
        case 17:
        case 18:
        case 27:
        case 38:
          images.push(new Image(
            'https://picsum.photos/200/100/?random' + idx, 'horizontal'));
          break;

        case 14:
        case 15:
        case 19:
          images.push(new Image(
            'https://picsum.photos/100/200/?random' + idx, 'vertical'));
          break;

        default:
          images.push(new Image(
            'https://picsum.photos/100/100/?random' + idx, 'default'));
      }
    }
    return images;
  }
}
