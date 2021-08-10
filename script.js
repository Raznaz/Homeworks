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
