import { Component, OnInit } from '@angular/core';
import { FurbyService } from '../furby.service';
import { Furby } from '../models/furby';


@Component({
  selector: 'app-furbies-list',
  templateUrl: './furbies-list.component.html',
  styleUrls: ['./furbies-list.component.scss']
})
export class FurbiesListComponent implements OnInit {

  furbies: Furby[] = [];
  selectedFurby: Furby;

  constructor(private furbyService:  FurbyService) { }

  ngOnInit() {
    this.furbies = [];
    this.furbyService.getFurbies().subscribe( furby => {
      this.furbies.push(furby);
      this.selectedFurby = this.furbies[0];
    });
  }

  onSelectFurby(furby: Furby) : void {
    this.selectedFurby = furby;
  }
}
