import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NvD3Module } from 'angular2-nvd3';

import { AppComponent } from './app.component';
import { D3Component } from './d3/d3.component';
import { FrequencyLineChartComponent } from './frequency-line-chart/frequency-line-chart.component';
import { D3RoutingModule } from '../app/d3-routing/d3-routing.module';
import { SelectableLineChartComponent } from './selectable-line-chart/selectable-line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    D3Component,
    FrequencyLineChartComponent,
    SelectableLineChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NvD3Module,
    D3RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
