
export class Tomato {
  constructor({time = 25, pause = 5, bigPause = 15,  tasks = []}) {
    this.time = time;
    this.pause = pause;
    this.bigPause = bigPause;
    this.tasks = tasks;
    this.taskActive = null;
  }

  addTask(x) {
    this.tasks.push(x);
  }

  doActive(y) {
   this.taskActive = this.tasks.filter(task => task.id === y);
  }

  init() {
   if (this.taskActive !== null) {
      let timerId = setInterval(() => {
         increaseСounter(this.taskActive.id);
      }, 0);
      while() {

      }
    } else {
         throw new Error(`${this.constructor.taskActive}: not found`);
      }
   }

  increaseСounter(y) {
   this.tasks.filter((task) => {
     if (task.id === y) {
       task.counter();
       return;
     }
   }) 
  }

}

