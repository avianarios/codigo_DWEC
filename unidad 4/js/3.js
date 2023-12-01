class TresEnLinea{
    casillas = [[" - "," - "," - "],
                [" - "," - "," - "],
                [" - "," - "," - "]];

    turno = "x";

    jugadasGanadoras = [
        // Filas
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        // Columnas
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        // Diagonales
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];

    ganador = "";

    //Devuelve un string con el tablero. 
    mostrarTablero = () => {
        let tablero = ""; 

        for (let fila of this.casillas) {
            for(let casilla of fila){
                tablero += casilla;
            }
            tablero += "\n";
        }

        return tablero; 
    }

    //Cambia el turno
    cambiarTurno = () => {
        (this.turno == "x") ? this.turno = "o" : this.turno = "x"; 
    }

    //Pone ficha en el tablero si la casilla está vacía
    ponerFicha = (x,y) => {

        if((x < 0 || x > 3) || (y < 0 || y > 3)){
            return false; 
        }

        if(this.casillas[x][y] == " - "){ //Solo pone ficha si está vacía la casilla 
            this.casillas[x][y] = " "+this.turno+" "; 
            return true; 
        }
    }

    //Calcula si hay ganador.
    calcularGanador = () => { 

        for (let jugada of this.jugadasGanadoras) {
            let [a, b, c] = jugada;
            if (this.casillas[a[0]][a[1]] !== " - " && 
                this.casillas[a[0]][a[1]] === this.casillas[b[0]][b[1]] &&
                this.casillas[a[0]][a[1]] === this.casillas[c[0]][c[1]] ){
              
                this.ganador = this.casillas[a[0]][a[1]]; 
                return true;
            }
          }
        
          return false;
        
    }

}

let ganador; 
let jugadas = 0; 
let juego = new TresEnLinea(); 

while(!juego.calcularGanador() && jugadas < 9){ //Comprobamos si hay ganador o hay empate

    let x = prompt("Turno de " + juego.turno +" Introduce x(0-2)");
    let y = prompt("Turno de " + juego.turno +" Introduce y(0-2)");

    let resultado = juego.ponerFicha(x,y);

    if(!resultado) {
        console.log("Casilla ya ocupada."); 
        continue
    }; 

    console.log(juego.mostrarTablero());
    juego.cambiarTurno();
    jugadas++; 

}


//Mostramos el ganador
console.log("Fin del juego"); 
if(jugadas == 9){
    console.log("Empate");
}else{
    console.log("El ganador es: " + juego.ganador);
}


