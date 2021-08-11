// HW 4

// Task 1

class Student {
  constructor(enrolle) {
    this.id = Student.getId();
    this.name = enrolle.name;
    this.surname = enrolle.surname;
    this.ratingPoint = enrolle.ratingPoint;
    this.schoolPoint = enrolle.schoolPoint;
    this.course = enrolle.course;
    this.isSelfPayment = Student.checkStudents(this, this.ratingPoint);
  }

  static listOfStudents = [];
  static id = 1;

  static getId() {
    return this.id++;
  }

  static checkStudents(obj, ratePoint) {
    if (ratePoint > 800) {
      this.listOfStudents.push(obj);
      this.listOfStudents
        .sort((a, b) => {
          if (a.ratingPoint < b.ratingPoint) return 1;
          if (a.ratingPoint > b.ratingPoint) return -1;
          return b.schoolPoint - a.schoolPoint;
        })
        .splice(5);
      for (let i = 0; i < this.listOfStudents.length; i++) {
        if (i >= 0 && i <= 4) {
          this.listOfStudents[i].isSelfPayment = false;
        } else {
          this.listOfStudents[i].isSelfPayment = true;
        }
      }
      return false;
    } else {
      return true;
    }
  }
}

studentArr.map(obj => {
  new Student(obj);
});

// new Student(studentArr[0]);
// new Student(studentArr[1]);
// new Student(studentArr[2]);
// new Student(studentArr[5]);

//  Task 2

class CustomString {
  reverse(str) {
    // return str.split('').reverse().join(''); //  вариант c методами c методами

    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    return newStr;
  }

  ucFirst(str) {
    // return str[0].toUpperCase() + str.slice(1);  //  вариант c методами с методами

    let newStr = '';
    for (let i = 1; i < str.length; i++) {
      newStr += str[i];
    }
    return str[0].toUpperCase() + newStr;
  }

  ucWords(str) {
    // return str.replace(/(^\w|\s\w)/g, m => m.toUpperCase()); // вариант c методами

    let splitStr = str.split(' ');
    let newStr = '';

    for (let i = 0; i < splitStr.length; i++) {
      let leftWord = '';
      let word = splitStr[i];
      let firstLetter = word[0].toUpperCase();

      for (let k = 1; k < word.length; k++) {
        leftWord += word[k];
      }
      newStr += firstLetter + leftWord + ' ';
    }
    return newStr;
  }
}

const myString = new CustomString();

// Task 3

class Validator {
  checkIsEmail(string) {
    let lastAtPos = string.lastIndexOf('@');
    let lastDotPos = string.lastIndexOf('.');

    return (
      lastAtPos < lastDotPos &&
      lastAtPos > 0 &&
      string.indexOf('.') > 0 &&
      string.indexOf('@@') == -1 &&
      string.indexOf('.@') == -1 &&
      string.length - lastDotPos > 2 &&
      lastDotPos > 2
    );
  }

  checkIsDomain(domain) {
    let res = domain.match(
      /((http|ftp|https):\/\/)?[a-z0-9\-_]+(\.[a-z0-9\-_]+)+([a-z0-9\-\.,@\?^=%&;:/~\+#]*[a-z0-9\-@\?^=%&;/~\+#])?/g
    );
    if (res == null) {
      return false;
    } else {
      return true;
    }
  }

  checkIsDate(date) {
    let newDate = date.split(/[\/\.-]/);
    if (
      newDate.length === 2 ||
      (newDate.length === 3 &&
        !isNaN(Date.parse(newDate[2] + '-' + newDate[1] + '-' + newDate[0])))
    ) {
      return true;
    } else {
      return false;
    }
  }

  checkIsPhone(phoneNumber) {
    let number = '';
    for (let i = 0; i < phoneNumber.length; i++) {
      number = phoneNumber.trim().split('');
      if (
        phoneNumber[0] === '+' &&
        phoneNumber[1] === '3' &&
        phoneNumber[2] === '8' &&
        phoneNumber.length >= 13
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
}

const valid = new Validator();
