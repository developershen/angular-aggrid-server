import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { ServersideGridViewComponent } from './serverside-grid-view/serverside-grid-view.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

const agGridModule = AgGridModule.withComponents([
]);
@NgModule({
  declarations: [
    AppComponent,
    ServersideGridViewComponent,
  ],
  imports: [
    agGridModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
