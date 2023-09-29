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


//Write the code using if..else which would correspond to the following switch:
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

//Rewrite the code below using a single switch statement:
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}