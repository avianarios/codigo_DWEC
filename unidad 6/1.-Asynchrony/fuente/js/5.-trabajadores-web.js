import mostrarMensaje from './mostrarMensajes.js';
import tareaPesada from './tareapesada.js';


// Ejecución de código síncrono
document.getElementById('sincrono').addEventListener('click', () => {
    mostrarMensaje("Calculando...(la interfaz se bloquea. Este mensaje no se verá)", "mensajeSincrono");
    // Bloquea el hilo principal
    const result = tareaPesada();
    mostrarMensaje(`El resultado es: ${result}`, "mensajeSincrono");
});

// Ejecución de código con trabajador web
document.getElementById('trabajador').addEventListener('click', () => {
    mostrarMensaje("Calculando...(la interfaz no se bloquea, prueba a lanzar mouseover)", "mensajeTrabajador");

    // Crear el trabajador web. el argumento type: module permite importar código. Así, definimos la funcón contadorPorconsola en un módulo y la usamos para el código síncrono y el asíncrono.
    // La ruta es donde encontrar al trabajador es relativa al HTML donde se carga este js
    const worker = new Worker(new URL('../js/trabajador.js', import.meta.url), { type: 'module' });     //parcel no permite crear Worker con rutas relativas cuando se usa una cadena de texto como parámetro. Para solucionarlo, se crea un objeto URL

    //const worker = new Worker('../js/trabajador.js', { type: 'module' });
//    const worker = new Worker('../js/trabajador.js');

    // Escuchar mensajes del trabajador
    worker.onmessage = (evento)=> {
        if (evento.data.mensaje=="terminado"){
            worker.terminate(); // Detener el trabajador después de usarlo
            mostrarMensaje(`Resultado de la ejecución: ${evento.data.resultado}`, "mensajeTrabajador");
        }else{
            mostrarMensaje(`${evento.data.mensaje}`, "mensajeTrabajador");
        }
    };

    // Enviar un mensaje al trabajador para iniciar la tarea
    worker.postMessage('comienza');
});