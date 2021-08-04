// HW3

// Task 1

function Emploee(emploee) {
  this.id = emploee.id;
  this.name = emploee.name;
  this.surname = emploee.surname;
  this.salary = emploee.salary;
  this.workExperience = emploee.workExperience;
  this.isPrivileges = emploee.isPrivileges;
  this.gender = emploee.gender;
}

const emploee = emplyeeArr[0];
const employeeObj = new Emploee(emploee);

// Task 2

Emploee.prototype.getFullName = function () {
  return this.name + ' ' + this.surname;
};

// Task 3

let createEmployesFromArr = arr => {
  return arr.map(obj => {
    return new Emploee(obj);
  });
};

const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);

console.log(emplyeeConstructArr);

// Task 4

const getFullNamesFromArr = arr => {
  return arr.map(obj => {
    return obj.getFullName();
  });
};

getFullNamesFromArr(emplyeeConstructArr);

console.log(getFullNamesFromArr(emplyeeConstructArr));

// Task 5

const getMiddleSalary = arr => {
  let totalSalary = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSalary += arr[i].salary;
  }

  return Math.round(totalSalary / arr.length);
};

getMiddleSalary(emplyeeConstructArr);

console.log(getMiddleSalary(emplyeeConstructArr));

// Task 6

const getRandomEmployee = arr => {
  let randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
};

getRandomEmployee(emplyeeConstructArr);

console.log(getRandomEmployee(emplyeeConstructArr));

// Task7
Object.defineProperty(Emploee.prototype, 'fullInfo', {
  get() {
    let str = '';
    for (const key in this) {
      if (Object.hasOwnProperty.call(this, key)) {
        str += key + ' - ' + this[key] + ', ';
      }
    }
    return str;
  },

  set(obj) {
    for (let key in obj) {
      if (this[key] !== undefined) {
        this[key] = obj[key];
      }
    }
  }
});

employeeObj.fullInfo = { name: 'Вася', salary: 9000, email: 'ex@mail.ua' };
console.log(employeeObj);
console.log(employeeObj.fullInfo);
