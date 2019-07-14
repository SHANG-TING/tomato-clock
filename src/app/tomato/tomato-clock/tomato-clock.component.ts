import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tomato-clock',
  templateUrl: './tomato-clock.component.html',
  styleUrls: ['./tomato-clock.component.scss']
})
export class TomatoClockComponent implements OnInit {
  @Output() play = new EventEmitter();


  playing = false;

  constructor() { }

  ngOnInit() {
  }

  onPlay() {
    this.play.emit(this.playing)
  }

}