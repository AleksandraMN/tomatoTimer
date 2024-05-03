import {Task} from './class';


export class Tomato {
  constructor(obj = {time: 25, pause: 5, bigPause: 15, tasks: []}) {
    this.time = obj.time; // время выполнения
    this.pause = obj.pause; // пауза
    this.bigPause = obj.bigPause; // большой перерыв
    this.tasks = obj.tasks; // массив задач
    this.taskActive = null; // активная задача
    this._timerId = null;
    this.out = {minutes: '', seconds: ''}; // таймер
  }

  addTask(task) {
    this.tasks.push(task);
  }

  doActive(id) {
   this.taskActive = this.tasks.filter(task => task.id === id);  
  }

  getTimeRemaining(deadline) {
    const diff = deadline - new Date();
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    this.out.minutes = minutes < 10 ? '0' + minutes : minutes;
    this.out.seconds = seconds < 10 ? '0' + seconds : seconds;
    this.cbChange ? this.cbChange(this.out) : null;
    if (diff <= 0) {
      clearInterval(this._timerId);
      // увеличение счетчика
      this.taskActive[0].count = this.increaseСounter(this.taskActive[0].id);
      this.init();
    }
  }
  
  cbChange(timer) {
    // console.log(document.querySelector('.window__timer-text').textContent);
    document.querySelector('.window__timer-text').textContent = `${timer.minutes}:${timer.seconds}`;
  }

  start(deadline) {
    this.getTimeRemaining(deadline);
    this._timerId = setInterval(this.getTimeRemaining.bind(this, deadline), 1000);
  }

  init() {
    if (this.taskActive !== null) {
      const deadline1 = new Date(Date.now() + (60 * 1000 * this.time + 999));
      const deadline2 = new Date(Date.now() + (60 * 1000 * this.pause + 999));
      const deadline3 = new Date(Date.now() + (60 * 1000 * this.bigPause + 999));
      // console.log(deadline1);
        if (this.taskActive[0].count === 0 || this.taskActive[0].count === 2 || this.taskActive[0].count === 4 || this.taskActive[0].count === 6) {
          this.start(deadline1);
        }
        console.log(this.taskActive[0].count);
        if (this.taskActive[0].count === 1 || this.taskActive[0].count === 3 || this.taskActive[0].count === 5) {
          this.start(deadline2);
        }
        if (this.taskActive[0].count === 7) {
          this.start(deadline3);
        }
    } else {
      throw new Error(`${this.constructor.taskActive}: not found`);
   }
  }

  increaseСounter(id) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === id) {
        const task = this.tasks[i];
        task.counter();
        return this.tasks[i].count;
      }
    }
  }
}

