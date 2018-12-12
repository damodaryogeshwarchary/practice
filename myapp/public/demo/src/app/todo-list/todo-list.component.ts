import {
  Component,
  OnInit,
  Input,
  ElementRef,
  EventEmitter,
  Output,
  OnChanges,
  ViewChild
} from '@angular/core';
import { TodoItem } from '../todo-item';
import { TobedoneService } from '../tobedone.service';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnChanges {
  todos: TodoItem[] = [];
  hoverText: string;
  // edit = 'edit';
  // delete = 'delete';
  // archieve = 'archive';
  inputValueInTextBox: string;
  index: number;
  indexs: number;
  postTodos: TodoItem;
  success: number;
  editId: number;

  @Input() myinput: string;
  @Input() editInput: string;
  // @Input() enableAddButton: boolean;
  @Output() editText: EventEmitter<string> = new EventEmitter();
  @Output() enableAddButton: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('check') checking: ElementRef;

  constructor(private todoService: TobedoneService) {}

  ngOnInit() {
    // this.todosFromServices();
    this.todoService.todosUpdated.subscribe((data: TodoItem[]) => {
      this.todos = data;
    });
  }

  ngOnChanges(changes) {
    // this.addition(); // without backend
    if (this.myinput) {
      debugger;
      this.postTodosFromServices();
    }

    if (this.editInput) {
      this.updatingList();
    }
  }

  // not called
  addition() {
    // console.log(this.myinput);   //staring myinput will be undefined
    if (this.myinput) {
      this.todos.push({
        id: null,
        idArchived: false,
        todo: this.myinput,
        isCompleted: false
      });
    }
  }

  todosFromServices() {
    this.todoService.getTodos().subscribe((data: TodoItem[]) => {
      this.todos = data;
    });
  }

  postTodosFromServices() {
    if (this.myinput) {
      this.postTodos = {
        id: null,
        idArchived: false,
        todo: this.myinput,
        isCompleted: false
      };
      // console.log(this.postTodos);
      // this.todoServices.postTodos(this.todos);
      this.todoService.postTodos(this.postTodos).subscribe((data: TodoItem) => {
        this.todos.push(data);
        this.myinput = null;
      });
    }
  }

  hover(text) {
    // console.log(text);
    this.hoverText = text;
  }

  onEditText(text, id) {
    this.inputValueInTextBox = text;
    this.editText.emit(this.inputValueInTextBox);
    this.editId = id;
  }

  updatingList() {
    if (this.editInput) {
      this.afterUpdateClick(this.editInput);
    }
  }
  afterUpdateClick(text: string) {
    if (text) {
      const editedText = {
        todo: text
      };
      this.todoService
        .afterUpdateClick(editedText, this.editId)
        .subscribe((data: ArrayType) => {
          this.onGetEditData(data);
        });
    }
  }

  onGetEditData(data: ArrayType) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === +data[0]) {
        this.todos[i].todo = data[1];
        // this.enableAddButton = true;
        this.enableAddButton.emit();
      }
    }
  }
  onDeleteText(id: number) {
    // console.log(text);
    if (id) {
      // console.log(id);
      // const idNum = Number(id: numbe);
      this.todoService.deleteTodos(id).subscribe((data: number) => {
        // console.log(data);
        this.onGetDeleteData(data);
        // this.success = data;
      });
      // this.indexs = this.todos.indexOf(text);
      // this.todos.splice(this.indexs, 1);
    }
  }

  onGetDeleteData(data: number) {
    for (let i = 0; i < this.todos.length; i++) {
      // console.log(this.todos[i].id);
      if (this.todos[i].id === +data) {
        this.todos.splice(i, 1);
        // console.log(this.todos);
        // console.log(this.todos.splice(i, 1));
      }
    }
  }

  onArchieveText(id: number) {
    this.todoService.archiveTodos(id).subscribe((data: number) => {
      // console.log(data);
      this.onGetArchiveData(data);
    });
  }

  onGetArchiveData(id: number) {
    for (let i = 0; i < this.todos.length; i++) {
      // console.log(this.todos[i].id);
      if (this.todos[i].id === +id) {
        this.todos[i].idArchived = true;
        console.log(this.todos);
      }
    }
  }

  onCheck(isCompleted: boolean, id: number) {
    if (isCompleted === true) {
      // this.check = false;
      this.todoService
        .completeTodos(isCompleted, id)
        .subscribe((data: ArrayType) => {
          // console.log(data);
          this.onGetCompleteData(data);
        });
    } else {
      // this.check = true;
      this.todoService
        .completeTodos(isCompleted, id)
        .subscribe((data: ArrayType) => {
          // console.log(data);
          this.onGetCompleteData(data);
        });
    }
  }

  onGetCompleteData(data: ArrayType) {
    for (let i = 0; i < this.todos.length; i++) {
      // console.log(this.todos[i].id);
      if (this.todos[i].id === +data[0]) {
        if (data[1] === 'true') {
          this.todos[i].isCompleted = false;
          console.log(this.todos[i].isCompleted);
        } else {
          this.todos[i].isCompleted = true;
          console.log(this.todos[i].isCompleted);
        }
      }
    }
  }
}
