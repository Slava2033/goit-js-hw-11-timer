import './styles.css';
// Таймер обратного отсчета
// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты. Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.
// Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX. Количество дней может состоять из более чем двух цифр.

function pad(value) {
  return String(value).padStart(2, '0');
}
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = this.getRefs();
  }
  getRefs(selector) {
    const timerBox = document.querySelector(`${this.selector}`);
    const clockDays = timerBox.querySelector('[data-value="days"]');
    const clockHours = timerBox.querySelector('[data-value="hours"]');
    const clockMins = timerBox.querySelector('[data-value="mins"]');
    const clockSecs = timerBox.querySelector('[data-value="secs"]');
    return { clockDays, clockHours, clockMins, clockSecs };
  }
  start() {
    setInterval(() => {
      const startTime = Date.now();
      const time = this.targetDate - startTime;
      this.updateTimer(time);
    }, 1000);
  }

  updateTimer(time) {
    const { clockDays, clockHours, clockMins, clockSecs } = this.refs;
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    clockDays.textContent = days;
    clockHours.textContent = hours;
    clockMins.textContent = mins;
    clockSecs.textContent = secs;
  }
}
const count = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct. 29, 2021'),
});
count.getRefs(count.selector);
console.log(count.start());
// Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.
// const days = Math.floor(time / (1000 * 60 * 60 * 24));
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
// const secs = Math.floor((time % (1000 * 60)) / 1000);

// console.log(getRefs(count.selector));
