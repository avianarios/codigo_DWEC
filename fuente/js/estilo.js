//Bad coding style. Confusing for newers. Error-prone

i=5
j=0
i != j ? i > 0 ? console.log(Math.max(i, j)) : console.log(i) : console.log(0);

//Same code than above. Brackets could be removed, but for the sake of clarity, it's better to leave them
let i=5;
let j=0;
if ( i!=j ){
    if ( i>0 ){
        console.log( Math.max( i,j ));
    }else{
        console.log( i );
    }
}else{
    console.log( 0 );
}


