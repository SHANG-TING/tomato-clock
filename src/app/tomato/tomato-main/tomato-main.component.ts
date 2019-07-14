import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TomatoService } from '../tomato.service';

@Component({
  selector: 'app-tomato-main',
  templateUrl: './tomato-main.component.html',
  styleUrls: ['./tomato-main.component.scss'],
})
export class TomatoMainComponent implements OnInit {
  constructor(private todoService: TodoService, public tomato: TomatoService) {}

  ngOnInit() {}
}
