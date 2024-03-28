// Q5=Write a program that greets the user based on the time of day. Display good morning, good afternnon or good evening based 
// on the time of day when you run the code.

let currentTime = new Date();
let currentHour = currentTime.getHours();
let greeting;

if (currentHour < 12) {
  greeting = "Good morning!";
} else if (currentHour < 18) {
  greeting = "Good afternoon!";
} else {
  greeting = "Good evening!";
}
console.log(greeting);