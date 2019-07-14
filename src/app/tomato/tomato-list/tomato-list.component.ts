import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TomatoService } from '../tomato.service';

@Component({
  selector: 'app-tomato-list',
  templateUrl: './tomato-list.component.html',
  styleUrls: ['./tomato-list.component.scss'],
})
export class TomatoListComponent implements OnInit {
  get data() {
    return new Map([
      ['TODO', this._todoService.todos.filter(x => !x.isCompleted)],
      ['DONE', this._todoService.todos.filter(x => x.isCompleted)],
    ]);
  }

  name: string;

  constructor(
    private _todoService: TodoService,
    public _tomoto: TomatoService,
  ) {}

  ngOnInit() {}

  addTodo() {
    if (!this.name) {
      return;
    }

    this._todoService.newTodo(this.name);
    this.name = '';
  }
}
