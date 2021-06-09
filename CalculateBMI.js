function bmi(weight, height) {
  let bmiCalc = weight / Math.pow(height, 2);
  if (bmiCalc > 30) {
    return "Obese";
  }
  if (bmiCalc <= 30 && bmiCalc > 25) {
    return "Overweight";
  }
  if (bmiCalc <= 25 && bmiCalc > 18.5) {
    return "Normal";
  }
  if (bmiCalc < 18.5) {
    return "Underweight";
  }
}