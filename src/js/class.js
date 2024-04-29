

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

const task = new Task ('Отвезти кошку на стрижку');
task.counter();
console.log(task);

task.setName('Подготовить документы в ИФНС');
task.counter();
console.log(task);
