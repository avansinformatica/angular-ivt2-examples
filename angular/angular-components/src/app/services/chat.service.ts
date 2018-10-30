import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Chat } from '../models/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatSubject$ = new Subject<Chat>();

  constructor() { }

  sendMessage(chat: Chat) {
    this.chatSubject$.next(chat);
  }

  getMessage(): Observable<Chat> {
    return this.chatSubject$.asObservable();
  }
}
