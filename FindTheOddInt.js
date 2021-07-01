function countNumbers(numArray) {
  let counterObj = {};
  for (let i = 0; i < numArray.length; i++) {
    if (counterObj[numArray[i]] === undefined) {
      counterObj[numArray[i]] = 1;
    } else {
      counterObj[numArray[i]] = counterObj[numArray[i]] + 1;
    }
  }
  return counterObj;
}

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

function findOdd(A) {
  let numObj = countNumbers(A);
  let oddKey;
  for (key in numObj) {
    if (numObj[key] % 2 === 1) {
      oddKey = numObj[key];
    }
  }
  return Number(getKeyByValue(numObj, oddKey));
}

function doTest(a, n) {
  console.log("A = ", a);
  console.log("n = ", n);
  Test.assertEquals(findOdd(a), n);
}
describe("Example tests", function () {
  doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
  doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
  doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
  doTest([10], 10);
  doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
  doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
});

/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.*/
