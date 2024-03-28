// Q8= write a simple calculate.
// 1.Add
// 2.Sub
// 3.mul
// 4.div
let operation = 'sub'; // Change this to 'sub', 'mul', or 'div' for different operations
let num8_1 = 10;
let num8_2 = 5;
let result;

if (operation === 'add') {
    result = num8_1 + num8_2;
} else if (operation === 'sub') {
    result = num8_1 - num8_2;
} else if (operation === 'mul') {
    result = num8_1 * num8_2;
} else if (operation === 'div') {
    if (num8_2 === 0) {
        result = "Error: Division by zero!";
    } else {
        result = num8_1 / num8_2;
    }
} else {
    result = "Error: Invalid operation!";
}

console.log("Result:", result);
