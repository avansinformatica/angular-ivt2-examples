import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Image } from '../image.model';
import { AlertService } from '../../alert/alert.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image.list.component.html',
  styleUrls: ['./image.list.component.css']
})
export class ImageListComponent implements OnInit {

  images: Image[];

  constructor(
    private imageService: ImageService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.imageService.getImages().subscribe(
      images => this.images = images,
      error => {
        console.log(error);
        // Better handle this error, display message or alertbox!
        this.alertService.error('<strong>Connection error:</strong> ' + error + '<br/>(Is de server bereikbaar?)')
      })
  }

}
