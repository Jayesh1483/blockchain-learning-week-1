/*
Task:
- Create a JavaScript object to represent a Book, with properties for the title, author, and the number of pages.
- Add a method to the object that logs a description of the book to the console.
*/

/*
Notes:
1. We have created a Javascript object through object literal which suffice our requirement to define our properties
2. We defined the properties title, author and the number of pages using a key value pair
3. We have defined an object method as 'description' function which return the description of the properties using a template literal
4. Once the function is logged in the console it will return the description of the book.  
*/

//Code
const book = {
    title: 'Mastering Bitcoin',
    author: 'Andreas M. Antonopoulos',
    numberOfPages: 282,
    description: function () {
      return `The book ${this.title} is written by ${this.author} and consist of ${this.numberOfPages} pages.`;
    },
  };
  
  console.log(book.description());