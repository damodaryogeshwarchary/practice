import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';

import { TobedoneService } from './tobedone.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TextBoxComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [TobedoneService],
  bootstrap: [AppComponent]
})
export class AppModule {}
