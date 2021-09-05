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

// Task 3

const checkboxContainer = document.querySelector('.form-container');
let mainArr = [];

const getPersonsRickMortyById = () => {
  fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then(({ results }) => {
      mainArr = results;
      render(results);
    });
};

const filter = (type) => {
  console.log(type.id, type.checked);
  if ((type.id === 'male' || type.id === 'female') && type.checked) {
    const newArr = mainArr.filter(
      ({ gender }) => gender.toLowerCase() === type.id,
    );
    render(newArr);
  } else if ((type.id === 'alive' || type.id === 'dead') && type.checked) {
    const newArr = mainArr.filter(
      ({ status }) => status.toLowerCase() === type.id,
    );
    render(newArr);
  } else {
    render(mainArr);
  }
};

const render = (arr) => {
  document.querySelector('.container').innerHTML = '';
  arr.forEach(({ name, species, status, location: { name: city }, image }) => {
    const elem = document.createElement('div');
    let classDead = null;
    elem.classList.add('card');
    if (status === 'Dead') {
      classDead = 'dead';
    }
    elem.innerHTML = `
		    <div class="card-info">
		      <div class="title">
		        <h1>${name}</h1>
		        <div class="status">
		          <div class="live-status ${classDead}"></div>
		          <p>${species} -- ${status}</p>
		        </div>
		      </div>
		      <div class="content">
				<p>${city}</p>
		      </div>
		    </div>
		    <div class="card-image">
		      <img
		        src=${image}
		        alt="Img"
		      />
		    </div>
  
			`;
    document.querySelector('.container').append(elem);
  });
};

checkboxContainer.addEventListener('click', (e) => {
  const target = e.target;
  filter(target);
});

getPersonsRickMortyById();
