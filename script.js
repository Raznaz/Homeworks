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
