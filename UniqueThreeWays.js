const uniqueValuesFilter = (array) =>
  array.filter(
    (currentValue, index, arr) => arr.indexOf(currentValue) === index
  );

const uniqueValuesReduce = (array) =>
  array.reduce(
    (acc, currentValue) =>
      acc.includes(currentValue) ? acc : [...acc, currentValue],
    []
  );

const uniqueValuesSet = (array) => [...new Set(array)];

console.log(uniqueValuesSet([1, 1, 1, 3, 4, 4, 5, 5, 6, 7, 8, 8, 9]));
