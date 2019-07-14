import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [
    new Todo('todo - 1'),
    new Todo('todo - 2'),
    new Todo('todo - 3'),
    new Todo('todo - 4', true),
  ];
  constructor() {}

  newTodo(todoName: string) {
    const todo = new Todo(todoName);
    this.todos.push(todo);
  }

  removeTodo(idx: number) {
    this.todos.splice(idx, 1);
  }

  complteAll() {
    this.todos.map(x => (x.isCompleted = !x.isCompleted));
  }

  clearAllComplete() {
    this.todos.map(x => (x.isCompleted = false));
  }
}
