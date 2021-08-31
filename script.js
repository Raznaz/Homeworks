// HW 6

//  Task 1

const arr = ['Vasya', 'Petya', 'Alexey'];

const removeUser = function (arr, index) {
  return arr.splice(index, 1);
};

// console.log(removeUser(arr, 1));
// console.log(arr);

//  Task 2

const obj = { name: 'Vasya', age: 1 };

const getAllKeys = function (obj) {
  return Object.keys(obj);
};

getAllKeys(obj); /// ["name", "age"]
console.log(getAllKeys(obj));

// Task 3

const getAllValues = function (obj) {
  const arrValues = [];
  for (const key in obj) {
    arrValues.push(obj[key]);
  }
  return arrValues;
};

// console.log(getAllValues(obj));

// Task 4

const firstObj = {
  id: 777,
  name: 'VASYA',
};

const secondObj = {
  id: 888,
  name: 'KATYA',
};

const insertIntoArr = function (object, idCandidate) {
  let myIndex = null;
  condidateArr.forEach((obj, index) => {
    if (obj._id === idCandidate) {
      myIndex = index;
    }
  });
  return condidateArr.splice(myIndex, 0, object);
};

// insertIntoArr(firstObj, '5e216bc941925a438f823873');
// insertIntoArr(secondObj, '5e216bc9a9a703233fd5ef11');
// console.log(condidateArr);

// Task 5

class Condidate {
  constructor(obj) {
    this.obj = obj;
  }

  state() {
    let addressArr = this.obj.address.split(', ');
    return addressArr[2];
  }
}

const condidate = new Condidate(condidateArr[40]);
// const condidate = new Condidate(condidateArr[0]);

// Task 6

const getCompanyNames = function () {
  companyNamesArr = [];
  condidateArr.forEach(obj => {
    if (obj.company) companyNamesArr.push(obj.company);
  });

  return [...new Set(companyNamesArr)];
};

getCompanyNames();

// Task 7

const getUsersByYear = function (year) {
  const idArr = [];
  condidateArr.forEach(obj => {
    if (year === new Date(obj.registered).getFullYear()) {
      idArr.push(obj._id);
    }
  });

  return idArr;
};

// console.log(getUsersByYear(2015));
// console.log(getUsersByYear(2019));

// Task 8

const getCondidatesByUnreadMsg = function (unreadMsg) {
  const arrInstanceCand = [];
  const regEx = /\d+/;
  condidateArr.forEach(obj => {
    let unMsg = +regEx.exec(obj.greeting);
    if (unMsg === unreadMsg) {
      arrInstanceCand.push(new Condidate(obj));
    }
  });
  return arrInstanceCand;
};

// console.log(getCondidatesByUnreadMsg(8));
// console.log(getCondidatesByUnreadMsg(6));

// Task 9

const getCondidatesByGender = function (gen) {
  const arrInstanceCandByGen = [];
  condidateArr.forEach(obj => {
    if (obj.gender === gen) {
      arrInstanceCandByGen.push(new Condidate(obj));
    }
  });
  return arrInstanceCandByGen;
};

console.log(getCondidatesByGender('male'));
console.log(getCondidatesByGender('female'));

// Task 10

Array.prototype.myReduce = function (func) {
  let a = 0;
  for (let i = 0; i < this.length; i++) {
    func((a = a + this[i]));
  }
  return a;
};

const arrNumb = [2, 3, 4, 5, 6];
let res = arrNumb.myReduce((acc, item) => acc + item);
// console.log(res);

// myJoin

Array.prototype.myJoin = function (separator = ',') {
  let newStr = '';
  if (separator === undefined) separator = ',';
  for (let index = 0; index < this.length; index++) {
    newStr +=
      typeof this[index] === 'number' || typeof this[index] === 'string'
        ? this[index]
        : '';
    newStr += index >= this.length - 1 ? '' : separator;
  }
  return newStr;
};

const arrNumb2 = [2, 3, 4, null, 6, 'hi', undefined, 9];

// console.log(arrNumb2.myJoin('+'));
// console.log(arrNumb2.myJoin());
// console.log(arrNumb2.myJoin(undefined));
// console.log(arrNumb2.myJoin(5));
