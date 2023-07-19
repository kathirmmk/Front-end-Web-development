function bmiCalculator() {
    var weight = document.getElementById("weightkgs").value;
    var height = document.getElementById("heightmtr").value;

    var bmi = weight / (Math.pow(height, 2));

    if (bmi < 18.5) {
        document.getElementById("result").innerHTML = "Your BMI is " + bmi + ".  You are Underweight! Eat healthy.";
    } else if (bmi > 24.9) {
        document.getElementById("result").innerHTML = "Your BMI is " + bmi + ".  You are Overweight! Reduce eating fat.";
    } else if (bmi >= 18.5) {
        document.getElementById("result").innerHTML = "Your BMI is " + bmi + ".  You are Normal! Good Health.";
    } else {
        document.getElementById("result").innerHTML = "Wrong input! Try again.";
    }

}

// less than 18.5 - underweight
// more than 24.9 - overweight
// inbetween - normal