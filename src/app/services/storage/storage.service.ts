import { Injectable } from '@angular/core';
import { Globals } from './../../global';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private globals: Globals) {
  }

  getMessages() {
      this.globals.messagesList = JSON.parse(localStorage.getItem('middle-test_messages') || '');
      console.log('(storage)');
      console.log(this.globals.messagesList);
  }

  setMessages(messages: any) {
    localStorage.setItem('middle-test_messages', JSON.stringify(messages));
  }
}
