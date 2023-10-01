/*
Task:
- Declare variables to represent your name, age, and city of residence, and log them to the console.
- Try declaring variables using **`let`**, **`const`**, and **`var`**, and observe the differences.
*/

//Execution of the task with comments and explanation of the variables used:

/*
Notes:
1. We declared a variable User Name as const
2. Declared another variable age using let 
3. Declared city of residence as var
4. Notice how we have mentioned the variable 'userName'and cityOfResidence'. Capitalizing in this way in JavaScript is called camel casing. In camel casing you group words into one,the first word is lowercase, then every word that follows will have its first letter uppercased.
5. We have interpolated variable into log string using template literals. This makes the code readable and we do not have to concatenate the string using + operator
*/

//Code
const userName = "Jayesh";
let age = 27;
var cityOfResidence = "Delhi";
console.log(
  `The name of user is ${userName}, whose age is ${age} and his city of residence is ${cityOfResidence}.`
);
