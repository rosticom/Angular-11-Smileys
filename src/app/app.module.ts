
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SharedComponentsModule } from './components/components.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { Globals } from './global';
import { StorageService } from './services/storage/storage.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    PickerModule,
    SharedComponentsModule
  ],
  exports: [
  ],
  providers: [Globals, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
