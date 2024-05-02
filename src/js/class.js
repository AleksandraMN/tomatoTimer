

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
};


// task.setName('Подготовить документы в ИФНС', 2);
// task.counter();

const task1 = new Task('Подготовить документы в ИФНС');
console.log(task1);
const task2 = new Task('Посмотреть лекцию №5');
console.log(task2);
