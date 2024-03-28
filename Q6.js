// Q6=Write a program that calculates the Body Mass
//  Index (BMI) and categorizes it.
var weight = 50; // Weight in kilograms
var heightInInches = 5.5; // Height in inches
var heightInMeters = heightInInches / 39.370; // Convert height to meters
console.log("Height in meters:", heightInMeters);
var bmi = weight / (heightInMeters * heightInMeters); // BMI calculation
console.log("BMI:", bmi.toFixed(2)); // Display BMI rounded to two decimal places
if (bmi < 18.5) {
    console.log("Underweight");
}
else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("Normal weight");
}
else if (bmi >= 25 && bmi < 29.9) {
    console.log("Overweight");
}
else {
    console.log("Obese");
}
