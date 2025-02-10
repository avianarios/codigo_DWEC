//Los trabajadores web deben estar en un fichero separado
import tareaPesada from './tareapesada.js';

// Escuchar mensajes del hilo principal
//self.onmessage = function(event) {
self.addEventListener("message", evento=>{
    if (evento.data=="comienza"){
        const resultado = tareaPesada();
        self.postMessage({ mensaje: "terminado", resultado});
    }
});