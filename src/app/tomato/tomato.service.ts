import { Injectable } from '@angular/core';
import { Todo } from './models/todo.model';
import { TodoService } from './services/todo.service';

const defaultTime = 5000;

@Injectable({
  providedIn: 'root',
})
export class TomatoService {
  currentTodo: Todo;
  otherTodos: Todo[] = [];
  totalTime = defaultTime;
  remainingTime = defaultTime;

  get progress() {
    return (this.totalTime - this.remainingTime) / this.totalTime;
  }

  private interval$: any;
  constructor(private todoService: TodoService) {
    this.init();
  }

  init() {
    const [firstTodo, ...otherTodos] = this.todoService.todos.filter(
      x => !x.isCompleted,
    );
    this.currentTodo = firstTodo;
    this.otherTodos = otherTodos;
  }

  setCurrentTodo(todo: Todo) {
    const todos = this.todoService.todos;
    const index1 = 0;
    const index2 = this.todoService.todos.indexOf(todo);
    [todos[index1], todos[index2]] = [todos[index2], todos[index1]];
  }

  play(todo: Todo) {
    if (this.currentTodo !== todo) {
      this.stop();
      this.setCurrentTodo(todo);
      this.init();
    }

    this.currentTodo = todo;
    this.interval$ = setInterval(() => {
      this.remainingTime = this.remainingTime - 1000;
      if (this.remainingTime <= 0) {
        this.remainingTime = defaultTime;
        clearInterval(this.interval$);
        this.interval$ = null;
      }
    }, 1000);
  }

  pause() {
    if (this.interval$) {
      clearInterval(this.interval$);
      this.interval$ = null;
      return;
    }
  }

  stop() {
    if (this.interval$) {
      clearInterval(this.interval$);
      this.interval$ = null;
      this.remainingTime = defaultTime;
      return;
    }
  }
}
