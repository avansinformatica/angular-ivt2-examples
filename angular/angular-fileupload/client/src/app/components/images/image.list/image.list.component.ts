import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Image } from '../image.model';
import { AlertService } from '../../alert/alert.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-list',
  templateUrl: './image.list.component.html',
  styleUrls: ['./image.list.component.css']
})
export class ImageListComponent implements OnInit {

  images: Image[];

  constructor(
    private imageService: ImageService,
    private alertService: AlertService,
    private router: Router
  ) {
    // Trick to refresh the component after an image delete. 
    // Force the component to be reloaded after a navigate to the same url. 
    this.router.routeReuseStrategy.shouldReuseRoute = () => { return false; } 
  }

  ngOnInit() {
    this.imageService.getImages().subscribe(
      images => this.images = images,
      error => {
        console.log(error);
        // Better handle this error, display message or alertbox!
        this.alertService.error('<strong>Connection error:</strong> ' + error + '<br/>(Is de server bereikbaar?)')
      })
  }

  public deleteImage(id: string): void {
    this.imageService.deleteImage(id).subscribe(
      success => {
        console.log('image deleted');
        // Here is the other part of the trick to refresh the current component.
        this.router.navigated = false;
        this.router.navigate([this.router.url]);
        this.alertService.success('Image deleted successfully.')
      },
      error => {
        console.log(error);
        this.alertService.error('<strong>Connection error:</strong> ' + error + '<br/>(Is de server bereikbaar?)')
      })
  }
}
