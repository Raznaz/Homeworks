// HW8

// Task 1

const form = document.querySelector('form');
let number = +prompt('Введите число', 0);

for (let i = number; i >= 1; i--) {
  const inp = document.createElement('input');
  inp.classList.add('input-item');
  inp.value = `Input ${i}`;
  if (i % 2) {
    inp.classList.add('input-bg');
  }
  if (!(i % 3)) {
    inp.value = null;
    inp.placeholder = 'some text for each third';
  }
  if (i === number) {
    inp.classList.add('margin-zero');
  }
  form.prepend(inp);
}

// Task 2
const sec = 4000;
let pause = null;
let idTimer = null;

const div = document.createElement('div');
div.style.border = '2px solid #f00';
div.style.display = 'inline-block';
const h2 = document.createElement('h2');
const btnStart = document.createElement('button');
const btnStop = document.createElement('button');
btnStart.textContent = 'Start';
btnStop.textContent = 'Stop';
h2.innerHTML = '00 : 00 : 00';
document.body.append(div);
div.append(h2);
div.append(btnStart);
div.append(btnStop);

const clearTime = sec => {
  let hours = Math.floor(sec / (60 * 60));
  let minutes = Math.floor((sec / 60) % 60);
  let seconds = sec % 60;
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return `${hours} : ${minutes} : ${seconds}`;
};

const stopTimer = id => {
  console.log('stop Timer');
  clearInterval(id);
};

const timer = sec => {
  div.style.borderColor = 'green';
  idTimer = setInterval(() => {
    h2.innerHTML = clearTime(sec);
    if (sec <= 0) {
      div.style.borderColor = 'red';
      stopTimer(idTimer);
    }
    pause = sec;
    sec--;
  }, 1000);
};

timer(sec);

btnStop.addEventListener('click', () => {
  console.log(pause);
  div.style.borderColor = '#f90';
  stopTimer(idTimer);
});

btnStart.addEventListener('click', () => {
  timer(pause);
});

// Task 3

const changeColorLastParagraph = selector => {
  const p = document.querySelectorAll(selector);

  p.forEach((paragraph, index) => {
    if (!p[index + 1]) {
      console.log(index);
      p[index].style.backgroundColor = 'red';
    }
  });
};

changeColorLastParagraph('p');

const changeFooterToMain = () => {
  const wrapper = document.getElementById('wrapper');
  const footer = document.getElementById('footer');
  const main = document.getElementById('main');

  wrapper.append(footer);
};

changeFooterToMain();

// Task 4

const INGREDIENTS = {
  cocoa: ['cocoa powder', 'milk', 'sugar'],
  cappuccino: ['milk', 'coffee'],
  smoothie: ['banana', 'orange', 'sugar'],
  'matcha frappe': ['matcha', 'milk', 'ice'],
};

const menu = document.getElementById('menu');

const showMenu = (elem, elemContent) => {
  if (elem.dataset.show === 'true') {
    elem.removeChild(elem.lastChild);
    elem.dataset.show = false;
  }
  if (INGREDIENTS[elemContent]) {
    const ol = document.createElement('ol');
    elem.append(ol);
    elem.setAttribute('data-show', true);
    for (let i = 0; i <= INGREDIENTS[elemContent].length - 1; i++) {
      const li = document.createElement('li');
      li.textContent = INGREDIENTS[elemContent][i];
      ol.append(li);
    }
  }
};

menu.addEventListener('click', event => {
  target = event.target;
  showMenu(target, target.textContent);
});
