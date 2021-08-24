// HW7
// condidateArr
// console.log(condidateArr);

// Task 1

const cleanNumberPhone = number => {
  return number.replace(/[\s-]/g, '');
};

const searchCandidatesByPhoneNumber = function (number) {
  const newArr = [];
  condidateArr.map(obj => {
    if (cleanNumberPhone(obj.phone).includes(cleanNumberPhone(number))) {
      newArr.push(obj);
    }
  });
  return newArr;
};

// console.log(searchCandidatesByPhoneNumber('43'));
// console.log(searchCandidatesByPhoneNumber('+1(869) 40'));
// console.log(searchCandidatesByPhoneNumber('+1 (869) 408-3982'));

// Task 2

const getCandidateById = id => {
  return condidateArr.find(obj => {
    if (obj._id === id) {
      let regDate = new Date(obj.registered);
      obj.registered = `${regDate.getDate()}/${regDate.getMonth()}/${regDate.getFullYear()}`;
      return obj;
    }
  });
};

// console.log(getCandidateById('5e216bc9a6059760578aefa4'));

// Task 3

const clearMoney = money => {
  return Math.round(money.replace(/[\$,]/g, ''));
};

const sortCandidatesArr = sortBy => {
  if (sortBy === undefined) return condidateArr;
  return condidateArr.sort((a, b) => {
    if (sortBy === 'asc') {
      return clearMoney(a.balance) - clearMoney(b.balance);
    } else if (sortBy === 'desc') {
      return clearMoney(b.balance) - clearMoney(a.balance);
    }
  });
};
// console.log(sortCandidatesArr());
// console.log(sortCandidatesArr('asc'));
// console.log(sortCandidatesArr('desc'));

// Task 4

const getEyeColorMap = () => {};
