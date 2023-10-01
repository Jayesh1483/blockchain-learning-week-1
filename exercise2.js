/*
Task:
- Write a JavaScript program that logs numbers from 1 to 100.
- For multiples of 3, log "Fizz" instead of the number.
- For multiples of 5, log "Buzz" instead of the number.
- For numbers which are multiples of both 3 and 5, log "FizzBuzz". */

/*
Notes: 
1.We have run a for loop to iterate all number from 1 to 100 to be logged in the program
2. We used an if statement to identify all numbers which were multiple of both 3 and 5.
3. We used else if statement to identify the multiples of 3 and 5 as well
4. We logged all values in the console */

//Code
for (numbers = 1; numbers < 101; numbers++) {
  if (numbers % 3 === 0 && numbers % 5 === 0) {
    console.log("FizzBuzz");
    continue;
  } else if (numbers % 3 === 0) {
    console.log("Fizz");
    continue;
  } else if (numbers % 5 === 0) {
    console.log("Buzz");
    continue;
  }

  console.log(numbers);
}
