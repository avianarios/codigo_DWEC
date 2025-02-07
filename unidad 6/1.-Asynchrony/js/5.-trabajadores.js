import mostrarMensaje from './mostrarMensajes.js';
import contadorPorConsola from './contadorPorConsola.js';


// Ejecución de código síncrono
document.getElementById('sincrono').addEventListener('click', () => {
    mostrarMensaje("Calculando...(la interfaz se bloquea. Este mensaje no se verá)", "mensajeSincrono");
    // Bloquea el hilo principal
    const result = contadorPorConsola();
    mostrarMensaje(`El resultado es: ${result}`, "mensajeSincrono");
});

// Ejecución de código con trabajador web
document.getElementById('trabajador').addEventListener('click', () => {
    mostrarMensaje("Calculando...(la interfaz no se bloquea)", "mensajeTrabajador");

    // Crear el trabajador web. el argumento type: module permite importar código. Así, definimos la funcón contadorPorconsola en un módulo y la usamos para el código síncrono y el asíncrono.
    const worker = new Worker('./worker.js', { type: 'module' });

    // Escuchar mensajes del trabajador
    worker.onmessage = (evento)=> {
        if (evento.data=="terminado"){
            worker.terminate(); // Detener el trabajador después de usarlo
            mostrarMensaje(`Resultado de la ejecución: ${evento.data}`, "mensajeTrabajador");
        }else{
            mostrarMensaje(`${evento.data}`, "mensajeTrabajador");
        }
    };

    // Enviar un mensaje al trabajador para iniciar la tarea
    worker.postMessage('comienza');
});