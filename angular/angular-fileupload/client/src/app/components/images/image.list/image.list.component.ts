import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Image } from '../image.model';

@Component({
  selector: 'app-image-list',
  templateUrl: './image.list.component.html',
  styleUrls: ['./image.list.component.css']
})
export class ImageListComponent implements OnInit {

  images: Image[];

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit() {
    this.imageService.getImages().subscribe(images => this.images = images)
  }

}
