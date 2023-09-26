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


//What is the code below going to output?
alert( null || 2 || undefined );
alert( alert(1) || 2 || alert(3) );
alert( 1 && null && 2 );
alert( alert(1) && alert(2) );
alert( null || 2 && 3 || 4 );

/*Check the range between
Write an if condition to check that age is between 14 and 90 inclusively.
“Inclusively” means that age can reach the edges 14 or 90.


Check the range outside
Write an if condition to check that age is NOT between 14 and 90 inclusively.
Create two variants: the first one using NOT !, the second one – without it.
A question about "if"


Which of these alerts are going to execute?
What will the results of the expressions be inside if(...)?
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

Check the login
Write the code which asks for a login with prompt.
If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
The password is checked as follows:

    If it equals “TheMaster”, then show “Welcome!”,
    Another string – show “Wrong password”,
    For an empty string or cancelled input, show “Canceled”

Please use nested if blocks. Mind the overall readability of the code.
Hint: passing an empty input to a prompt returns an empty string ''. Pressing ESC during a prompt returns null.*/