
import { Component, OnInit, Input } from '@angular/core';
import { Globals } from './../../global';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-sub-message',
  templateUrl: './sub-message.component.html',
  styleUrls: ['./sub-message.component.scss']
})
export class SubMessageComponent implements OnInit {

  @Input('message') message: any;
  constructor(private globals: Globals,
              private storage: StorageService) {}

  ngOnInit(): void {
  }

  messageMenu() {
    const index = this.globals.messagesList.indexOf(this.message);
    this.globals.messagesList.splice(index, 1);
    this.storage.setMessages(this.globals.messagesList);
  }

}
