/*
Task:
- Write a JavaScript function called **`hasUniqueChars`** that takes a string as a parameter and returns **`true`** if the string has all unique characters and **`false`** if it does not.
*/

/*
Notes:
1. We declared a function 'hasUniqueChars' having str as a paramater
2. To identify the Unique Chars we compared all char within the string
3. The first for loop runs to iterate the char to be compared and the second loop iterates to compare all the other char with the selected one
4. If the str element matches it return the expression 'false', if not the loop keep on running untill all char are compared
5. Once both the loop gets completed it return the expression 'true'.
6. We called and stored the value of the function in a variable output and logged it in the console  
*/


//Code

function hasUniqueChars(str) 
{
    for(let i = 0; i< str.length; i++)
    {
        for(let j = i+1; j < str.length; j++)
        {
            if (str[i] === str[j])
            {
                return false;
            }
        }
    }
    
    return true;

}

const output = hasUniqueChars('abcdefn');

console.log(output);
