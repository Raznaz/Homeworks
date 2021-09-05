// HW 10 Promise

// Task 1

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rndNum = Math.floor(Math.random() * (7 - 1) + 1);
    if (rndNum >= 1 && rndNum <= 5) {
      console.log('Start the game...');
      resolve(rndNum);
    } else {
      reject();
    }
  }, 2000);
})
  .then((number) => {
    if (number === 1) {
      console.log('Stay here');
    } else {
      console.log(`Go ${number} steps`);
    }
  })
  .catch((err) => {
    console.error('My Error !', err);
  })
  .finally(() => {
    console.log('Exit');
  });

// Task 2

function goToShop(number) {
  if (number >= 4) {
    return Promise.resolve(number);
  } else {
    return Promise.reject('Too low products');
  }
}

function makeDinner() {
  console.log('Start cooking...');
  return Promise.resolve(
    setTimeout(() => {
      console.log('Bon Appetit');
    }, 3000),
  );
}

goToShop(1)
  .then(() => makeDinner())
  .catch((err) => {
    const error = new Error(err);
    error.name = 'Product Error';
    throw error;
  });
