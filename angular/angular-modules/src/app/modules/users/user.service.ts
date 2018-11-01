import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Http, RequestOptions, Headers } from '@angular/http';
import { User, UserRole } from './user.model';
import { EntityService } from '../../core/base/entity.service';
import { EntitySerializer } from '../../core/base/entity.model';

@Injectable()
export class UsersService extends EntityService<User> {

  readonly apiUrl = '../../assets/dummy-courses.json'; 

  constructor(http: Http) {
    super(
      http,
      'assets/dummy-users.json',
      '',
      new EntitySerializer());
  }
}