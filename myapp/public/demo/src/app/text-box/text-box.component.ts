import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild
} from '@angular/core';
import { TobedoneService } from '../tobedone.service';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {
  inputvariable: string;
  afterEditText: string;
  addButton = true;
  todos: TodoItem[] = [];
  @ViewChild('txt') templateReftxt: ElementRef;
  constructor(private todoServices: TobedoneService) {}

  ngOnInit() {}
  add(txt) {
    // console.log(txt);
    // this.inputvariable = txt;
    const todoItem = {
      id: null,
      idArchived: false,
      todo: txt,
      isCompleted: false
    };
    this.todoServices.postTodos(todoItem).subscribe(
      () => {
        debugger;
      },
      err => alert('Failed to add')
    );
  }

  onEditText(editText: string) {
    alert(editText);
    // console.log(this.templateReftxt);
    this.templateReftxt.nativeElement.value = editText;
    this.addButton = false;
  }

  update(text: string) {
    console.log(text);
    this.afterEditText = text;
  }

  afterUpdateClick() {
    this.addButton = true;
  }
}
