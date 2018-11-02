import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user.model';
import { EntityService } from '../../core/base/entity.service';
import { EntitySerializer } from '../../core/base/entity.model';

@Injectable()
export class UsersService extends EntityService<User> {

  /**
   * In this example we fetch the data from a file. 
   * Later this will be the URL to the 
   */
  readonly apiUrl = '../../assets/dummy-courses.json'; 

  constructor(http: Http) {
    super(
      http,
      'assets/dummy-users.json',
      '',
      new EntitySerializer());
  }
}