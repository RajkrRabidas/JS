//? assinment Q1
//! Age Category Message – Ask the user for their age. If they areunder 18, print “You are a minor.” If they are between 18 and 60,print “You are an adult.” If they are above 60, print “You are asenior citizen.”

// let age = Number(prompt("Enter you age"))

// if(age < 18){
//     console.log("You are a minor")
// } else if (age >= 18 && age < 60){
//     console.log("You are adult")
// }
// else{
//     console.log("you are a senior citizen ")
// }

//? assinment Q2
//! Even or Odd Sum – Take two numbers from the user using prompt(). If the sum of both numbers is even, print “Even Sum”; otherwise, print “Odd Sum.”

// let num1 = Number(prompt("Enter your first number"));
// let num2 = Number(prompt("Enter your second number"));

// let sum = num1 + num2;

// if (sum % 2 === 0) {
//     console.log("Even Sum");
// } else {
//     console.log("Odd Sum");
// }

//? assinment Q3
//! Character Case Checker – Ask the user for a single character. Check if it's uppercase, lowercase, or neither (not a letter).

// let str = prompt("Enter single character");

// if(str === str.toUpperCase()){
//     console.log("upper case")
// } else if(str === str.toLowerCase()){
//     console.log("lowwer case")
// } else if(!isNaN(str)){
//     console.log("Not a letter")
// } else {

// }

//? assinment Q4
//! Largest of Three Numbers – Take three numbers as input and print the largest number among them without using Math.max().

// let num1 = Number(prompt("Enter your first number"));
// let num2 = Number(prompt("Enter your second number"));
// let num3 = Number(prompt("Enter your third number"));

// if(num1 > num2 && num1 > num3){
//     console.log(num1)
// } else if(num2 > num1 && num2 > num3){
//     console.log(num2)
// } else {
//     console.log(num3)
// }

//? Assinment Q5
//! Leap Year Checker – Ask the user for a year and determine if it's a leap year or not.

// let userInput = Number(prompt("Enter your year and cheak is a leap year"));

// if (userInput % 4 === 0 && !(userInput % 100 === 0)) {
//   console.log("it's a leap year:", userInput);
// } else {
//   console.log("it's not a leap year:", userInput);
// }

//? Assinment Q6
//! Simple Calculator – Ask the user for two numbers and an operator (+, -, *, /). Perform the operation and display the result.

// let num1 = Number(prompt("Enter your first number"));
// let num2 = Number(prompt("Enter your second number"));
// let operator = prompt("Enter an operator (+, -, *, /)");

// let result;

// switch (operator) {
//     case "+":
//         console.log(result = num1 + num2)
//         break;
//     case "-":
//         console.log(result = num1 - num2)
//         break;
//     case "*":
//         console.log(num1 * num2)
//         break;
//     case "/":
//         console.log(num1 / num2)
//         break;

//     default: console.log("Invalid oprater")
// }

//? Assinment Q7
//! Positive, Negative, or Zero – Take a number input and check if it is positive, negative, or zero.


// let inputNumber = Number(prompt("Enter a number"));

// if (inputNumber > 0) {
//     console.log("Positive number");
// } else if (inputNumber < 0) {
//     console.log("Negative number");
// } else {
//     console.log("Zero number");
// }

//? Assinment Q8
//! User Greeting – Ask for the user's name and time (24-hour format). Greet them accordingly:

// let userName = prompt("Enter your name");
// let date = new Date();
// let hr = date.getHours();

// if (hr >= 0 && hr < 12) {
//     console.log("Good Morning", userName);
// } else if (hr >= 12 && hr < 18) {
//     console.log("Good Afternoon", userName);
// } else {
//     console.log("Good Evening", userName);
// }

//? Assinment Q9
//! Traffic Light System – Ask the user for a traffic light color (red, yellow, green). Print appropriate messages: Red: "Stop!" Yellow: "Get Ready!" Green: "Go!"

// let user = prompt("Enter your traffic light color")

// if(user == "red"){
//     console.log("Stop!")
// }else if(user == "yellow"){
//     console.log("Get Ready!")
// }else if(user == "green"){
//     console.log("Go!")
// }else{}

//? Assinment Q10
//! Multiplication Table – Ask the user for a number and print its multiplication table up to 10.

// let num = Number(prompt("Enter a number"))

// for (let i = 1; i <= 10; i++) {
//     let result = num * i
//     console.log(`${num} x ${i} = ${result}`);
// }

//? Assinment Q11
//! 11. Grade Calculator – Ask the user for their marks (0-100). Assign grades based on the range:

// let score = Number(prompt("enter your marks (0-100)"))

// if(score >= 90){
//     console.log("A")
// }else if (score >= 80 && score <= 89) {
//     console.log("B")
// }else if (score >= 70 && score <= 79) {
//     console.log("C")
// }else if (score >= 60 && score <= 69) {
//     console.log("D")
// } 
//  else {
//     console.log("F")
// }

//? Assinment Q12
//! Simple Login System – Set a predefined username and password. Ask the user to enter their credentials using prompt(). If correct, print “Login Successful”; otherwise, print “Incorrect username or password.”

// let username = "Raj"
// let pass = 1234;

// let userName = prompt("Enter your username")
// let userPass = Number(prompt("Enter your Password"))

// if(userName == username && userPass === pass){
//     console.log("Login Succesfully");
// }else{
//     console.log("Incorrect username or password");
// }

//? Assinment Q13
//! Swapping Without Third Variable – Take two numbers from the user and swap their values without using a third variable.

let num1 = Number(prompt("Enter your first number"));
let num2 = Number(prompt("Enter your second number"));

num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;

console.log(num1);
console.log(num2);
