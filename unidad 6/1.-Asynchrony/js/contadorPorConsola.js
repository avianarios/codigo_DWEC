// Función para simular una tarea pesada (cálculo intensivo)
export default function contadorPorConsola() {
    let resultado=0;
    for (let i = 0; i < 1e6; i++) {
        resultado+=i;
        console.log(i);
    }
    return resultado;
}