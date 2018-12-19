import { Component, OnInit, OnDestroy, Input } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { FileUploader, FileItem, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-file-upload',
  templateUrl: './upload.file.component.html'
})
export class UploadFileComponent implements OnInit, OnDestroy {

  public uploader: FileUploader;
  
  // Additional info to be stored with the image in the database.
  public imageInfo : {
    imagename: string,
    description: string, 
    category: string,
  }

  // Define image categories. Could/should be fetched from database.
  public categories: any[] = [
    { name: 'General', value: 'general'},
    { name: 'Art', value: 'art'},
    { name: 'Architecture', value: 'architecture'},
    { name: 'Other', value: 'other'},
  ]

  constructor() {

    // Initialize file info object
    this.imageInfo = {
      imagename: '',
      description: '',
      category: ''
    }

    const fileUploaderOptions: FileUploaderOptions = {
      url: environment.serverUrl + '/images'
    };

    this.uploader = new FileUploader(fileUploaderOptions);
    this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
    this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
    this.uploader.onAfterAddingFile = (item) => this.onAfterAddingFile(item);
    this.uploader.onBuildItemForm = (item, form) => {
      // Before uploading the selected file, optionally append additional properties
      // to the form that is being sent. These properties may be defined by the server.
      console.dir(form);
      console.dir(item)
      form.append('your_personal_property_id', JSON.stringify(this.imageInfo));
    };
  }

  /**
   * 
   */
  ngOnInit() {
    console.log(`ngOnInit`)
    console.dir(this.categories)
  }

  /**
   * 
   */
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  /**
   * 
   * @param item 
   * @param response 
   * @param status 
   * @param headers 
   */
  onSuccessItem(
    item: FileItem, 
    response: string, 
    status: number, 
    headers: ParsedResponseHeaders
  ): any 
  {
    const _response = JSON.parse(response);
    console.log('onSuccesItem');
    console.dir(_response);

    // this.moduleService.addModule(_response as Module);

    let message: string;
    if (_response.status && _response.status.message) {
      message = _response.status.message;
    }
    // this.alertService.success(message, false);
  }

  /**
   * 
   * @param item 
   * @param response 
   * @param status 
   * @param headers 
   */
  onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    console.log('onErrorItem');
    // this.alertService.error(JSON.parse(response), false);
  }

  /**
   * When a file is selected for upload, parse the filename, split on '_', 
   * and create the Module object. This info is displayed in the form and 
   * can be altered by the user.
   * 
   * @param item FileItem containing info on the selected file.
   */
  onAfterAddingFile(item: FileItem) {
    console.log('onAfterAddingFile');
    const filename = item.file.name;
    console.log('Filename = ' + filename);
    // this.module = new Module(parts[1], parts[2].split('20').join('_'));
  }

  /**
   * When the upload button is pressed.
   */
  uploadFile() {
    console.log('uploadFile');
    // Send one item from the queue. When sending multiple files at once, send the whole queue.
    this.uploader.queue[0].upload();
  }
}
