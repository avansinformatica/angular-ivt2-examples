import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Chat } from '../models/chat';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chatsession',
  templateUrl: './chatsession.component.html',
  styleUrls: ['./chatsession.component.scss']
})
export class ChatsessionComponent implements OnInit {

  chat: Chat = null;

  chatForm : FormGroup;

  constructor(
      private chatService: ChatService, 
      private formBuilder: FormBuilder 
    ) { }

  ngOnInit() {
    this.chatService.getMessage().subscribe( chat => {
      this.chat = chat;
    });

    this.chatForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit() {
    console.log( this.chatForm.value)
    this.chatService.sendMessage( new Chat (
      this.chatForm.value.name, this.chatForm.value.message));
  }

}
