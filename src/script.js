import './js/main';
import './js/class';
import './js/tomato';

import './scss/index.scss';
import {Tomato} from './js/tomato';
import {Task} from './js/class';

const buttonPrimary = document.querySelector('.button-primary');
const buttonSecondary = document.querySelector('.button-secondary');
export const m = document.querySelector('.window__timer-text');

const task1 = new Task('Подготовить документы в ИФНС');
// task1.counter();
console.log(task1);
task1.count;

const task2 = new Task('Посмотреть лекцию №5');
console.log(task2);

const tomato = new Tomato();
console.log(tomato);
tomato.addTask(task1);
tomato.doActive(task1.id);
console.log(tomato.taskActive);
console.log(tomato);


buttonPrimary.addEventListener('click', () => {
  tomato.init(); // инициализация
  buttonPrimary.remove();
  buttonSecondary.addEventListener('click', () => {
    buttonSecondary.remove();
  });
});
