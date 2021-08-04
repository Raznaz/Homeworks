// HW3

// Task 1

function Emploee(emploee) {
  this.id = emploee.id;
  this.name = emploee.name;
  this.surname = emploee.surname;
  this.salary = emploee.salary;
  this.workExperience = emploee.workExperience;
  this.isPrivileges = emploee.Privileges;
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
