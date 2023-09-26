//Bad coding style. Confusing for newers. Error-prone
//How would you translate the following line using if else statements?
i=5
j=0
i != j ? i > 0 ? console.log(Math.max(i, j)) : console.log(i) : console.log(0);


/*coding style
What’s wrong with the code style below?*/

function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else
{
  alert(pow(x,n))
}


//operators
//What are the final values of all variables a, b, c and d after the code below?
let a = 1, b = 1;
let c = ++a;
let d = b++;

//What are the values of a and x after the code below?
let a = 2;
let x = 1 + (a *= 2);

//What are results of these expressions?
"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2

/*Here’s a code that asks the user for two numbers and shows their sum.
It works incorrectly. The output in the example below is 12 (for default prompt values).
Why? Fix it. The result should be 3.*/

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(a + b); // 12


//comparisons
//What will be the result for these expressions?
5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"


//Conditional branching
//Will alert be shown?
if ("0") {
  alert( 'Hello' );
}

/*Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”*/

/*Show the sign
Using if..else, write the code which gets a number via prompt and then shows in alert:

    1, if the value is greater than zero,
    -1, if less than zero,
    0, if equals zero.

In this task we assume that the input is always a number.*/

/*Rewrite 'if' into '?'
Rewrite this if using the conditional operator '?':*/

let result;
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}


/*Rewrite 'if..else' into '?'
Rewrite if..else using multiple ternary operators '?'.
For readability, it’s recommended to split the code into multiple lines.*/

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}