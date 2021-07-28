// HW1

// Task 1

/* const num = 20;

 for (let i = 1; i <= num; i++) {
  if (i % 3 === 0) {
    console.log(i, 'FizBuz');
  } else if (i % 2 === 0) {
    console.log(i, 'Fiz');
  } else {
    console.log(i, 'Buz');
  }
}
 */

// Task 2

/* const num2 = 7;
let factorial = 0;

for (let i = num2; i > 0; i--) {
  factorial ? (factorial *= i) : (factorial = i);
}

console.log(`factorial ${num2}! = ${factorial}`); */

// Task 3

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weekAmount = 8;
let amountReamPaperOfPeriod = 0;

const showReamPaper = function () {
  let totalSheetsPeriod = consumptionPerWeek * weekAmount;
  if (!(totalSheetsPeriod % sheetsInReamPaper === 0)) {
    amountReamPaperOfPeriod =
      (totalSheetsPeriod - (totalSheetsPeriod % sheetsInReamPaper)) /
        sheetsInReamPaper +
      1;
  } else {
    amountReamPaperOfPeriod = totalSheetsPeriod / sheetsInReamPaper;
  }
  return amountReamPaperOfPeriod;
};

console.log('Минимальное количесво пачек ', showReamPaper());
