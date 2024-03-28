// Q4=Create a program to check a student 
// grade and percentage.
var eng = 90;
var urdu = 65;
var math = 78;
var total = 300;
var obt = eng + urdu + math;
var percentage = (obt / total) * 100;
console.log("Student percentage is " + percentage + "%");
if (percentage >= 90) {
    console.log("Grade 'A'");
}
else if (percentage >= 80) {
    console.log("Grade 'B'");
}
else if (percentage >= 70) {
    console.log("Grade 'C'");
}
else if (percentage >= 60) {
    console.log("Grade 'D'");
}
else {
    console.log("Grade 'F'");
}
