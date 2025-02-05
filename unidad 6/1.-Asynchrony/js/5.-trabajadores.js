import mostrarMensaje from './mostrarMensajes.js';
import contadorPorConsola from './contadorPorConsola.js';


// Ejecutar código síncrono
document.getElementById('sincrono').addEventListener('click', () => {
    const output = document.getElementById('sync-output');
    mostrarMensaje("Calculando...(la interfaz se bloquea. Este mensaje no se verá)", "mensajeSincrono");

    // Bloquea el hilo principal
    const result = contadorPorConsola();
    mostrarMensaje(`El resultado es: ${result}`, "mensajeSincrono");

//    output.textContent = 'Resultado: ' + result;
});

// Ejecutar código con trabajador web
document.getElementById('trabajador').addEventListener('click', () => {
    //const output = document.getElementById('worker-output');
    mostrarMensaje("Calculando...(la interfaz no se bloquea)", "mensajeTrabajador");

    // Crear el trabajador web. el argumento type: module permite importar código. Así, definimos la funcón contadorPorconsola en un módulo y la usamos para el código síncrono y el asíncrono.
    const worker = new Worker('./worker.js', { type: 'module' });

    // Escuchar mensajes del trabajador
    worker.onmessage = function(event) {
        mostrarMensaje(`${event.data}`, "mensajeTrabajador");
       
//        output.textContent = event.data; // Muestra el resultado
        worker.terminate(); // Detener el trabajador después de usarlo
    };

    // Enviar un mensaje al trabajador para iniciar la tarea
    worker.postMessage('start');
});