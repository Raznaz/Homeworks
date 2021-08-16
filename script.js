// HW 5

//  Task 1

const sum = function () {
  let sum = 0;

  return function (a) {
    return (sum += a);
  };
};

const counter = sum();

// console.log(counter(3));
// console.log(counter(5));
// console.log(counter(228));

// Task 2

const addData = function () {
  let arr = [];

  return function (elem) {
    if (elem === undefined) {
      arr = [];
    } else {
      arr.push(elem);
    }
    return arr;
  };
};

const getUpdateArr = addData();

// console.log(getUpdateArr(4));
// console.log(getUpdateArr({ name: 'Vasya' }));
// console.log(getUpdateArr(true));
// console.log(getUpdateArr('welcome'));
// console.log(getUpdateArr(7));
// console.log(getUpdateArr());
// console.log(getUpdateArr(5));

// Task 3

const checkTime = function () {
  let startTime = 0;

  return function () {
    if (startTime === 0) {
      let spentTime = Date.now() - startTime;
      startTime = spentTime;
      return 'Enabled';
    } else {
      let spentTime = Date.now() - startTime;
      startTime = Date.now();
      return Math.floor(spentTime / 1000) + ' sec';
    }
  };
};
const getTime = checkTime();

console.log(getTime());

// Task 4

const timer = sec => {
  let interval = setInterval(() => {
    let min = Math.floor(sec / 60);
    let s = sec % 60;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    console.log(`${min}:${s}`);
    sec--;
    if (sec === 0) {
      clearInterval(interval);
      console.log('Time End');
    }
  }, 1000);
};

timer(120);
