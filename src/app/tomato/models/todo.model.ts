export class Todo {
  name: string;
  isCompleted: boolean;
  time: string;
  playCount: number;
  constructor(name: string, isCompleted = false) {
    this.name = name;
    this.isCompleted = isCompleted;
    this.playCount = 0;
  }
}
