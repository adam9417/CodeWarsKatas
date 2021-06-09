function compareNumbers(a, b) {
  return a - b;
}

function largestPairSum(numbers) {
  numbers.sort(compareNumbers);
  return numbers[numbers.length - 1] + numbers[numbers.length - 2]
}