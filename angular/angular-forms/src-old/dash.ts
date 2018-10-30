import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';
import { forkJoin } from 'rxjs/observable/forkJoin';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-dash',
  templateUrl: 'src/dash.html'
})
export class dash implements OnInit {
  fileTypes = [
    {name:'html'},
    {name:'ts'},
    {name:'js'},
    {name:'css'}
  ];
  sometext = 'Some text ...';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {}
  click_me(): void {
    this.sometext = '';
    forkJoin([
      of(this.first_()),
      of(this.second_())
      ]).subscribe(val => {
        this.sometext = 'done...';
      })
  }
first_(): Observable<any> {
    this.http.get<any>('data/sampledata.json', this.httpOptions)
        .do(val => {
            this.sometext = val.items[0].value;
        });
}

second_(): Observable<any> {
    this.http.get<item[]>('data/sampledata.json', this.httpOptions)
        .do(val => {
            this.sometext = val.items[1].value;
        });
  }
}
