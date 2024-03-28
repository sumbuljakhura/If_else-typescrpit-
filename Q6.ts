// Q6=Write a program that calculates the Body Mass
//  Index (BMI) and categorizes it.
let weight = 50; // Weight in kilograms
let heightInInches = 5.5; // Height in inches
let heightInMeters = heightInInches / 39.370; // Convert height to meters
console.log("Height in meters:", heightInMeters);

let bmi = weight / (heightInMeters * heightInMeters); // BMI calculation

console.log("BMI:", bmi.toFixed(2)); // Display BMI rounded to two decimal places

if (bmi < 18.5) {
    console.log("Underweight");
} else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("Normal weight");
} else if (bmi >= 25 && bmi < 29.9) {
    console.log("Overweight");
} else {
    console.log("Obese");
}
