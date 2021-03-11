
import { Component, OnInit } from '@angular/core';
import { MessageModel } from './models/message/message'
import { Globals } from './global';
import { StorageService } from './services/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Middle-test';
  textArea: string = '';
  isEmojiPickerVisible: boolean = false;
  datePipe = '';
  setDob = '';
  currentDate: number = Date.now();
  messagesList: any = [];
  messagesId = 0;
  constructor(public globals: Globals,
              private storage: StorageService) {}

  ngOnInit(){
    this.storage.getMessages();
    this.messagesList = this.globals.messagesList;
  }

  addEmoji(event: any) {
    this.textArea = `${this.textArea}${event.emoji.native}`;
    this.isEmojiPickerVisible = false;
  }

  messageSave() {
    let dateToday: number = Date.now();
    let message: MessageModel = new MessageModel();

    this.textArea = this.textArea.trim();
    if (this.textArea) {
      this.messagesId++;

      message.id = this.messagesId;
      message.date_format = dateToday;
      message.text = this.textArea;
      this.textArea = '';

      this.messagesList.push(message);
      this.globals.messagesList = this.messagesList;
      this.storage.setMessages(this.globals.messagesList);
    }
  }
}
