import { Component, OnInit } from '@angular/core';
import { TobedoneService } from '../tobedone.service';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: TodoItem[] = [];

  constructor(private todoservice: TobedoneService) {}

  ngOnInit() {
    this.getTodos();
  }

  public getTodos() {
    this.todoservice.getTodos().subscribe((data: TodoItem[]) => {
      // debugger;
      this.todos = data;
    });
  }
}
