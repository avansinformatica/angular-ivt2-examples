import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/components/images/image.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Image } from '../image.model';
import { Router } from '@angular/router';
import { AlertService } from '../../alert/alert.service';

@Component({
  selector: 'app-file-upload-body',
  templateUrl: './image.upload.component.html'
})
export class ImageUploadComponent implements OnInit {
  
  imageSrc: string = undefined;

  // Define image categories. Could/should be fetched from database.
  public categories: any[] = [
    { name: 'General', value: 'general'},
    { name: 'Art', value: 'art'},
    { name: 'Architecture', value: 'architecture'},
    { name: 'Other', value: 'other'},
  ]

  imageForm = new FormGroup({
    data: new FormControl(''),
    imagename: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl('')
  });

  constructor(
    private imageService: ImageService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit() { }

  /**
   * When a file is selected, show it as a preview. This also generates a 
   * base64 string from the image, which can be send to the server API to be stored in dtb.
   * 
   * @param files 
   */
  onSelectFile(event) {
    console.log('onSelectFile')
    if (event.target.files && event.target.files[0]) {
      const imageFile: File = event.target.files[0]
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      console.dir(event.target.files[0])
      reader.onload = (event) => {
        // called once readAsDataURL is completed
        // set the image value to the Base64 string -> can be saved in dtb
        this.imageForm.patchValue({ 
          imagename: imageFile.name,
          data: reader.result
        })
        // set the image src -> so that it can be displayed as preview
        this.imageSrc = reader.result as string;
      }
    }
  }

  /**
   * When the upload button is pressed.
   */
  uploadFile() {
    console.log('uploadFile');
    this.imageService.uploadImage(this.imageForm.value as Image)
      .subscribe(
        data => {
          console.log('Success!');
          this.router.navigate(['/images'])
          this.alertService.success('Image added successfully.')
        }, 
        error => {
          console.log(error);
          // Better handle this error, display message or alertbox!
          this.alertService.error('<strong>Connection error:</strong> ' + error + '<br/>(Is de server bereikbaar?)')
        });
  }
}
