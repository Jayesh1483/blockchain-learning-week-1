/*
Task:
- Write a JavaScript function called **`isPalindrome`** that takes a string as a parameter and 
returns **`true`** if the string is a palindrome and **`false`** if it is not.
*/

/*
Notes:
1. We defined a function 'isPalindrome' which take inputString as a parameter
2. We defined an in function variable 'len' which contains the length of the inputString
3. A 'for' loop has been created to iterate each element of the string
4. An 'If' statement is declared which compares the two string element, here the inputString[i] have the elements from the beginning and inputString[len - 1- i] have the element from the end of the string
5. With every increment of the value of i, the if statement compares each element from the start and end
6. If the elements are similar it return a true expression, else it return false
7. We called and stored the value of the function in a variable output and logged it in the console
*/

//Code

function isPalindrome(inputString) 
{
    let len = inputString.length;

    for( let i = 0; i< len; i++) 
    {
        if( inputString[i] === inputString[len -1 -i]) 
        {
            return true;
        }
        else 
        {
            return false;
        }


    }


};

let output = isPalindrome('helleh');

console.log(output);