import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { PrintComponent } from './print/print.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteModalComponent } from './print/delete-modal/delete-modal.component';
import { CheckPassModalComponent } from './info/check-pass-modal/check-pass-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    PrintComponent,
    DeleteModalComponent,
    CheckPassModalComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    DragDropModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
