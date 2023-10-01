/*
Task:
Write a JavaScript function called calculateFactorial that takes a number as a parameter and returns its factorial.
*/


/*
Notes:
Factorial is termed as n! is the product of all positive integers from 1 to that number n! = n* n-1* n-2* n-3...
1. We defined a function 'calculateFactorial' which takes 'num' as an input
2. Defined a in function variable x with a value 1
3. First we covered the factorial of both 0 and 1 which is equal to 1 using 'if' and or statement which means if any of these are true it will return the value of X = 1
4. If the number provided is greater than 1, we used 'for' loop to iterate the value from 1 to num, so the loop can cover all positive number untill num 
5. We product the value of i with x and stored the value in x, this will increment the value of x till the loop run and return the overall product at the end of the loop
6. If the value is a non-positive number we returned a statement 'Number is not positive'
7. We called and stored the value of the function in a variable output and logged it in the console 
*/

//Code

function calculateFactorial (num) 
{
    let x = 1;
    if(num === 0 || num === 1) 
    {
        return x;

    }
    else if(num > 1)
    {
        for( let i =1; i <= num; i++)
        {
            x *= i;
        }

        return x;
    }
    else
    {
        return "Not a positive number";

    }
}


const output = calculateFactorial(7);

console.log(output);