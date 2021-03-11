import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubMessageComponent } from './sub-message/sub-message.component';
import { DateFormatPipe } from '../pipes/date-format/date-format-pipe.pipe';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SubMessageComponent, DateFormatPipe],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [SubMessageComponent, DateFormatPipe],
  entryComponents: []
})
export class SharedComponentsModule { }