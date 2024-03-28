// Q7=Write a simple number guessing game. Provide a select number and a guess. Based on those numbers give players clues 
// if their guess is higher, lower or correct. 
var selectnum = 7;
var guss = 5;
if (selectnum == guss) {
    console.log("Congratulations! You guessed the correct number.");
}
else if (guss < selectnum) {
    console.log("Try a higher number.");
}
else {
    console.log("Try a lower number.");
}
