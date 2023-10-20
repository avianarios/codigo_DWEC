let ahora=new Date();
let en1970=new Date(0);   //number of miliseconds starting at 01/01/1970. Can be negative for a date before 1970
let hace5anyos = new Date("2018-10-20");
let fecha=new Date(2018, 9, 20, 14, 21, 0, 0); // (year, month (starting at 0), date, hours, minutes, seconds, ms)

console.log (ahora, en1970, hace5anyos, fecha);

//some getters
console.log (
    ahora.getFullYear(),
    ahora.getMonth(),
    ahora.getDay(),
    ahora.getHours(),
    ahora.getDate()
);

//some setters
ahora.setFullYear(2022);
ahora.setMonth(ahora.getMonth()-2);
ahora.setDate(23);
ahora.setMinutes(68);   //adds minutes to current hour, beginning at 0
console.log(ahora);


//substracting dates
console.log (ahora-hace5anyos); //returns nº of miliseconds