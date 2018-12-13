import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NvD3Module } from 'angular2-nvd3';

import { AppComponent } from './app.component';
import { D3Component } from './d3/d3.component';

@NgModule({
  declarations: [AppComponent, D3Component],
  imports: [BrowserModule, FormsModule, HttpModule, NvD3Module],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
