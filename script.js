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
