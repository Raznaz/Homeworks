//  HW2

// Task 1

const citiesAndCountries = {
  Киев: 'Украина',
  'Нью-Йорк': 'США',
  Амстердам: 'Нидерланды',
  Берлин: 'Германия',
  Париж: 'Франция',
  Лиссабон: 'Португалия',
  Вена: 'Австрия',
};

const showCapitalOfCountries = obj => {
  const arrCapAndCountr = [];
  for (const key in obj) {
    arrCapAndCountr.push(`${key} - это ${obj[key]}`);
  }
  return arrCapAndCountr;
};

console.log(showCapitalOfCountries(citiesAndCountries));

// Task 2

const amount = 12;
const createMultiArray = num => {
  const mainArr = [];
  for (let i = 0; i < num / 3; i++) {
    mainArr[i] = [];
    for (let k = 0; k < 3; k++) {
      mainArr[i][k] = k + i * 3 + 1;
    }
  }
  return mainArr;
};

console.log(createMultiArray(amount));

// Task 3

const namesOfDays = {
  ru: [
    'Пондельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ],
  en: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
};

const getNameOfDay = (lg, numDay) => {
  let languages = '';
  if (namesOfDays[lg] === undefined || numDay <= 0 || numDay > 7) {
    return `Ошибка! Введите из доступных языков
    ${Object.keys(namesOfDays)} и от 1 до 7
    день недели.`;
  } else {
    return namesOfDays[lg][numDay - 1];
  }
};

console.log(getNameOfDay('en', 7));
console.log(getNameOfDay('fr', 7));

// Taks 4

const numbers = [19, 5, 42, 2, 77];

const sumTwoPosNum = arr => {
  for (let num of numbers) {
    if (num < 0 || num % 1) return;
  }
  let min1 = arr[0];
  let min2 = arr[1];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min1) {
      min2 = min1;
      min1 = arr[i];
    }
  }

  return min1 + min2;
};

console.log(sumTwoPosNum(numbers));

// Task 5

// const binaryNum = [1, 0, 1, 0, 1]; //21
// const binaryNum = [0, 0, 1, 0];  //2
// const binaryNum = [0, 0, 0, 1]; //1
// const binaryNum = [1, 1, 1, 1]; //15
const binaryNum = [1, 0, 0, 0, 1]; //17
// const binaryNum = [1, 1, 1, 0, 0, 1]; //57

const transferNumfromBinaryToTen = arr => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i] * 2 ** (arr.length - 1 - i);
  }
  return result;
};

console.log(transferNumfromBinaryToTen(binaryNum));
