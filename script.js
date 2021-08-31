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
