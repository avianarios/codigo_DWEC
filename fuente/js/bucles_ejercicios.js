//What is the last value alerted by this code? Why?
let i = 3;
while (i) {
  alert( i-- );
}


//For every loop iteration, write down which value it outputs and then compare it with the solution.
let i = 0;
while (++i < 5) alert( i );

let i = 0;
while (i++ < 5) alert( i );


//For each loop write down which values it is going to show. Then compare with the answer.
for (let i = 0; i < 5; i++) alert( i );

for (let i = 0; i < 5; ++i) alert( i );

//Use the for loop to output even numbers from 2 to 10.

//Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}


/*Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.*/

/*An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself. 
Write the code which outputs prime numbers in the interval from 2 to n. P.S. The code should work for any n, not be hard-tuned for any fixed value.*/