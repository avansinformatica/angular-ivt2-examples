import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Injectable } from '@angular/core'

/**
 * For all information:
 *
 * https://github.com/angular/in-memory-web-api
 *
 */
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    let users = [
      {
        id: 0,
        gender: 'male',
        name: {
          title: 'mr',
          first: 'Anthony',
          last: 'User'
        },
        email: 'a.user@server.com',
        picture: {
          large: './assets/images/anonymous-person.png',
          medium: './assets/images/anonymous-person.png',
          thumbnail: './assets/images/anonymous-person.png'
        },
        nat: 'ES'
      },
      {
        id: 1,
        gender: 'male',
        name: {
          title: 'mr',
          first: 'John',
          last: 'Anotheruser'
        },
        email: 'j.anotheruser@server.com',
        picture: {
          large: './assets/images/anonymous-person.png',
          medium: './assets/images/anonymous-person.png',
          thumbnail: './assets/images/anonymous-person.png'
        },
        nat: 'ES'
      }
    ]
    return { users }
  }
}
