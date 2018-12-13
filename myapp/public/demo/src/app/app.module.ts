import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import * as d3 from 'd3';
import { NvD3Module } from 'angular2-nvd3';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';

import { TobedoneService } from './tobedone.service';
import { D3Component } from './d3/d3.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TextBoxComponent,
    TodoListComponent,
    TodoItemComponent,
    D3Component
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NvD3Module],
  providers: [TobedoneService],
  bootstrap: [AppComponent]
})
export class AppModule {}
