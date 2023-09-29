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





