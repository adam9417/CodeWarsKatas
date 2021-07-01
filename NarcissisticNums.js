function narcissistic(value) {
  let digits = value.toString().split("");
  let numArray = digits.map(Number);
  let result = 0;
  let basePower = numArray.length;
  for (let i = 0; i < numArray.length; i++) {
    result += Math.pow(numArray[i], basePower);
  }
  return result === value;
}

describe("Narcissistic Function", function () {
  it("should find small numbers are all narcissistic", function () {
    Test.assertEquals(narcissistic(7), true, "7 is narcissistic");
  });

  it("should find these numbers are narcissistic", function () {
    Test.assertEquals(narcissistic(371), true, "371 is narcissistic");
  });
});

/*A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
The Challenge:

Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.*/
