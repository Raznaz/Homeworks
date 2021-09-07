// HW 10 Promise

// Task 1
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rndNum = Math.floor(Math.random() * 6) + 1;
    console.log('Случайное число', rndNum);
    if (rndNum >= 1 && rndNum <= 5) {
      console.log('Start the game...');
      resolve(rndNum);
    } else {
      reject();
    }
  }, 20);
})
  .then((number) => {
    console.log(number);
    if (number === 1) {
      console.log('Stay here');
    } else {
      console.log(`Go ${number} steps`);
    }
  })
  .catch(() => {
    console.error('Exit');
  });

// Task 2
function goToShop(number) {
  return Promise.resolve(number);
}

function makeDinner() {
  console.log('Start cooking...');
  return Promise.resolve(
    setTimeout(() => {
      console.log('Bon Appetit');
    }, 3000),
  );
}

goToShop(4)
  .then((data) =>
    data < 4 ? Promise.reject('Too low products') : makeDinner(),
  )
  .catch((err) => {
    const error = new Error(err);
    error.name = 'Product Error';
    throw error;
  });

// Task 3
const formContainer = document.querySelector('.form-container');
const inputs = formContainer.querySelectorAll(' input');

const getCharactersById = (...idArr) => {
  // console.log(idArr);
  fetch(`https://rickandmortyapi.com/api/character/${idArr}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      render(data);
    });
};

const render = (results) => {
  console.log(results);
  const container = document.querySelector('.container');
  container.innerHTML = '';
  let dead = null;

  results.forEach(
    ({ name, species, status, location: { name: location }, image }) => {
      dead = status === 'Dead' ? (dead = 'dead') : null;
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML = ` 
        <div class="card-info">
          <div class="title">
            <h1>${name}</h1>
            <div class="status">
              <div class="live-status ${dead}"></div>
              <p>${species} -- ${status}</p>
            </div>
          </div>
          <div class="content">
            <p>${location}</p>
          </div>
        </div>
        <div class="card-image">
          <img
            src=${image}
            alt="Img"
          />
        </div>
  `;
      document.querySelector('.container').append(div);
    },
  );
};

const getCharactersByFilter = (type) => {
  let url = 'https://rickandmortyapi.com/api/character/?';

  inputs.forEach((item) => {
    item.checked = false;
    if (item === type) {
      type.checked = true;
    }
  });

  if (type.id === 'female') {
    url = url + `gender=female`;
  } else if (type.id === 'male') {
    url = url + `gender=male`;
  } else if (type.id === 'alive') {
    url += `status=alive`;
  } else if (type.id === 'dead') {
    url += `status=dead`;
  } else {
    url = 'https://rickandmortyapi.com/api/character/?';
  }

  console.log(url);

  fetch(`${url}`)
    .then((response) => response.json())
    .then((data) => {
      render(data.results);
    });
};

getCharactersById(88, 2, 3, 4, 11, 21, 31, 41, 51, 61, 62, 32, 42, 52, 72, 49);

formContainer.addEventListener('click', (e) => {
  const target = e.target;

  getCharactersByFilter(target);
});
