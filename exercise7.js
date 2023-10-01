/*
Task:
Write a JavaScript function called fibonacci that takes a number n as a parameter and returns the nth number in the Fibonacci sequence.
*/

/*
Notes:
1. Fibonacci sequence is the sequence of integers where the nth number is a sum of n-1 and n-2 number. 
2. We defined a function 'fibonacci which takes a parameter n 
3. We defined 3 variables x= 0, y= 1 and z = 0
4. Since the first numbers is fibonacci is 0, so we passed the if condition which return x as a output if 'n' is 1
5. If n >1 we will run a 'for' loop from 1 to n 
6. We have set the sequence where 'z' will be equal to sum of x and y, post sum 'y' value will be passed to 'x' and 'y' will take 'z' value, 
this way we will be able to pass the value and satisy the condition of fibonacci (n = n-1 + n-2) and returs the value of z one the loop is completed 
7. We called and stored the value of the function in a variable output and logged it in the console 
*/

//Code

function fibonacci (n) 
{
    let x = 0;
    let y = 1;
    let z = 0;
    if (n === 1)
    {
        return x;
    }
    else if(n>1)
    {

        for (let i = 0; i < n; i++)
        {
            z = x+y;
            x = y;
            y = z;
        }
        return z;
    }

}


const output = fibonacci(21);

console.log(output);