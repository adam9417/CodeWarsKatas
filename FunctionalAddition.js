function add(n) {
  const addOne = number => n + number;
  return addOne;
}

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(add(1)(3), 4, 'add one to three equals four')
  });
});

/* Create a function add(n)/Add(n) which returns a function that always adds n to any number

Note for Java: the return type and methods have not been provided to make it a bit more challenging.

var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6 */