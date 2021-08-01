//  HW2

// Task 1

const citiesAndCountries = {
  Киев: 'Украина',
  'Нью-Йорк': 'США',
  Амстердам: 'Нидерланды',
  Берлин: 'Германия',
  Париж: 'Франция',
  Лиссабон: 'Португалия',
  Вена: 'Австрия'
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
