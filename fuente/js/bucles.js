//while
let i = 0;
while (i < 3) {
  console.log( i++ ); //it outputs i value and then increment it
}

let j = 0;
while (j < 3) {
  console.log( ++j ); //it increments j value and then shows it
}

let k = 5;
while (k) { //elegant way to write k>0
  console.log( k-- ); 
}

//do...while
let l = 0;
do {
  console.log( l++ );
} while (l <= 3);

//for
let asignaturas=["Desarrollo web en entorno cliente",
                 "Diseño de interfaces web", 
                 "Desarrollo web en entorno servidor"];  //matriz
for (let m = 0; m < (asignaturas.length); m++) { // shows 0, then 1, then 2
  console.log(asignaturas[m]);
}

//nested loops
for (let m = 0; m < 3; m++) { // shows 0, then 1, then 2
  for (let n = 0; n < 3; n++) { // shows 0, then 1, then 2
    console.log(m,n);
  }
}

//endless for
for (;;){
  console.log("this loop will never end, unless you press ctrl+c");
}

//you can use break to exit the loop, while it is not recommended. 
//The best way to leave it is the condition

let suma=0;
//bad coding
while (1){  //will repeat forever, 
  suma++;
  if (suma==5) break;
}

//better
suma=0;
while (suma<5){
  suma++;
}

//much better
for (suma=0;suma<5;suma++);
console.log(suma);

//continue will finish the actual iteration and move on to the next one
for (i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;
  console.log(i);
}
//same effect as before, but better coding
for (i = 0; i < 10; i++) {
  if (i % 2) {
    console.log( i );
  }
}

//break/continue can't be used with ?
i=0;
(i<10) ? i++ : continue;