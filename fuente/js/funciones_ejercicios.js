/*The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result:*/

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}

//Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}

/*Is there any difference in the behavior of these two variants?
Rewrite the function using '?' or '||'

The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.*/

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

/*Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

    Using a question mark operator ?
    Using OR ||*/



//Write a function min(a,b) which returns the least of two numbers a and b.
//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result. Create a web-page that prompts for x and n, and then shows the result of pow(x,n).