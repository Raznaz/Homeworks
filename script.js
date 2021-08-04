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
