// Q4=Create a program to check a student 
// grade and percentage.
let eng=90;
let urdu=65;
let math=78;
let total=300
let obt=eng+urdu+math;
let percentage= (obt/total)*100;
console.log("Student percentage is "+percentage.toFixed(2)+"%");

if(percentage >= 90){
    console.log("Grade 'A'");
}
else if(percentage >= 80){
    console.log("Grade 'B'");
}
else if (percentage >= 70) {
    console.log("Grade 'C'");
} else if (percentage >= 60) {
    console.log("Grade 'D'");
} else {
    console.log("Grade 'F'");
}