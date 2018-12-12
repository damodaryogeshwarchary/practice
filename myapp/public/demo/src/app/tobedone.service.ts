import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class TobedoneService {
  getTodosUrl = 'api/todos';
  postTodosUrl = 'api/todos/add';
  deleteTodosUrl;
  archiveTodosUrl;
  completeTodosUrl;
  editTodosUrl;
  private todosUpdated$ = new Subject<any[]>();

  constructor(private http: HttpClient) {}

  get todosUpdated() {
    return this.todosUpdated$.asObservable();
  }

  getTodos() {
    return this.http.get(this.getTodosUrl);
  }
  postTodos(txt) {
    return this.http.post(this.postTodosUrl, txt).pipe(
      tap(() => {
        debugger;
        this.refreshTodos();
      })
    );
  }
  private refreshTodos() {
    debugger;
    this.getTodos().subscribe((data: any[]) => this.todosUpdated$.next(data));
  }

  deleteTodos(txt: number) {
    // console.log(txt);
    this.deleteTodosUrl = `api/todos/delete/${txt}`;
    return this.http.delete(this.deleteTodosUrl);
  }
  archiveTodos(txt: number) {
    this.archiveTodosUrl = `api/todos/archive/${txt}`;
    return this.http.put(this.archiveTodosUrl, null);
  }
  completeTodos(txt: boolean, id: number) {
    this.completeTodosUrl = `api/todos/complete/${txt}/${id}`;
    return this.http.put(this.completeTodosUrl, null);
  }
  afterUpdateClick(editInput: object, id: number) {
    this.editTodosUrl = `api/todos/edit/${id}`;
    return this.http.put(this.editTodosUrl, editInput);
  }
}
