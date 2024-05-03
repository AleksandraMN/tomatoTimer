
export class Task {
  constructor(name, count = 0) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.count = count;
  }

  setName(value) {
    this.name = value;
  }

  counter() {
    this.count++;
  }

  deleteCounter() {
    this.count = 0;
  }
};
