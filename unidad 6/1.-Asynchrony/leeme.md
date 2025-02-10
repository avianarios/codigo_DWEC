# Índice

1. [Programación síncrona y asíncrona](#1--programación-síncrona-y-asíncrona)
2. [Ejecución de código JavaScript](#2--ejecución-de-código-javascript)
  1. [El ciclo de eventos](#21--el-ciclo-de-eventos)
  2. [Gestión de las operaciones asíncronas](#22--gestión-de-las-operaciones-asíncronas)
  3. [¿Por qué es necesaria la asincronía en la web?](#23--por-qué-es-necesaria-la-programación-asíncrona-en-la-web)
  4. [Estrategias para mejorar la interactividad](#24--estrategias-para-mejorar-la-interactividad)
3. [Mecanismos para conseguir asincronía](#3--mecanismos-para-conseguir-asincronía)
  1. [Funciones globales](#31--funciones-globales)
  2. [Eventos](#32--eventos)
  3. [Funciones de retorno (callbacks) y eventos](#33--funciones-de-retorno-callbacks-y-eventos)
  4. [Promesas then/catch](#34--promesas-thencatch)
  5. [Promesas async/await](#35--promesas-asyncawait)
  6. [Trabajadores web](#36--trabajadores-web-web-workers)
4. [AJAX (ASynchronous JavaScript and XML)](#4--ajax-asynchronous-javascript-and-xml)
----

# 1- Programación síncrona y asíncrona

En JavaScript, la ejecución de código puede ser **síncrona** o **asíncrona**. Comprender esta diferencia es fundamental para trabajar con operaciones que dependen del tiempo, como la carga de scripts externos, peticiones HTTP o acceso a archivos.

## Programación Síncrona

En un entorno síncrono, las instrucciones se ejecutan en el orden en que aparecen en el código, de forma secuencial y bloqueante. Esto significa que una tarea debe completarse antes de que la siguiente pueda iniciarse. Ejemplo con un proceso pesado:

```javascript
console.log("Inicio");

function procesoPesado() {
    let suma = 0;
    for (let i = 0; i < 1e9; i++) {
        suma += i;
    }
    console.log("Proceso pesado finalizado", suma);
}

procesoPesado();
console.log("Fin");
```

Salida:
```
Inicio
Proceso pesado finalizado 499999999500000000
Fin
```

Aquí, el bucle bloquea la ejecución hasta que termina, lo que hace que "Fin" solo aparezca después de que el proceso pesado se complete.

## Programación Asíncrona

En un entorno asíncrono, algunas operaciones pueden ejecutarse en segundo plano, permitiendo que el programa continúe con otras tareas mientras se espera su finalización. La versión asíncrona del código anterior se puede implementar con `setTimeout`:

```js
console.log("Inicio");

function procesoPesadoAsync() {
    setTimeout(() => {
        let suma = 0;
        for (let i = 0; i < 1e9; i++) {
            suma += i;
        }
        console.log("Proceso pesado finalizado", suma);
    }, 0);
}

procesoPesadoAsync();
console.log("Fin");
```

Salida:
```
Inicio
Fin
Proceso pesado finalizado 499999999500000000
```

Aquí, la función `setTimeout` permite que "Fin" se imprima antes de que el proceso pesado termine, mejorando la fluidez de la aplicación.

---

# 2- Ejecución de código JavaScript

## 2.1- El ciclo de eventos

El **ciclo de eventos** (event loop) define cómo JavaScript maneja la ejecución del código. Para ejecutar un programa, el motor de JavaScript tiene tres estructuras de datos que controlan cúando y cómo se procesará cada instrucción: la **pila de ejecución** (call stack), la **cola de microtareas** (microtasks queue) y la **cola de tareas** (task queue). Estas tres estructuras lanzan instrucciones al hilo principal.

- **Pila de ejecución (Call Stack)**: es donde se coloca el **código síncono** que va a ser ejecutado. Para ejecutar un programa, JavaScript va tomando cada instrucción secuencialmente, en el orden definido en el programa y de forma síncrona, y hace lo siguiente:
  - La analiza para ver si es sintácticamente correcta.
  - Si no lo es, da error y termina. Si lo es, la apila en la pila de ejecución.
  - Si es una instrucción corriente, la ejecuta y la saca de la pila. Si es una llamada a una función, irá apilando y ejecutando cada llamada y la llamada a la función no saldrá de la pila hasta que la ejecución de todas sus instrucciones haya finalizado. 

- **Cola de microtareas (microtasks queue)**: es donde se coloca el **código asíncrono** más urgente como las promesas, las operaciones de la API mutationObserver y las tareas agregadas mediante queueMicroTask(). Se ejecuta cuando la pila de ejecución se quede vacía y una vez que empieza, no pueden ser interrumpidas.

- **Cola de tareas (Task Queue)**: es donde se coloca el **código asíncrono** menos urgente, como los eventos de usuario y de entrada/salida y temporizadores (setTimeout y setInterval). Estas tareas son las que menos prioridad tienen, por lo que se ejecutarán cuando la pila de ejecución y la cola de microtareas estén vacías. Cuando pasan a la pila pueden ser interrumpidas por microtareas.

El **ciclo de eventos** se encarga de mover las tareas de la cola de tareas a la pila de ejecución para ser procesadas siguiendo los siguientes pasos:
1. El event loop revisa constantemente si la pila de ejecución está vacía.
2. Si la pila está vacía, el event loop mueve la primera tarea en la cola de microtareas a la pila de ejecución.
3. Si ésta también está vacía, irá a la cola de tareas en búsqueda de instrucciones
4. El proceso se repite continuamente.


## 2.2- Gestión de las operaciones asíncronas

Las operaciones asíncronas, al colocarse en la cola de tareas, no se ejecutan inmediatamente. Lo harán una vez que la pila de ejecución se vacíe (es decir, que todo el código síncrono se haya ejecutado), las tareas asíncronas comenzarán a moverse desde la cola de tareas a la pila de ejecución. Este mecanismo es el que hace que el código sea no bloqueante.

## Ejemplo:
```javascript
console.log('Inicio');

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('Fin');
```

El orden de ejecución será:

1. **'Inicio'** se imprime primero porque es el primer código síncrono.
2. `setTimeout` se coloca en la cola de tareas. Aunque tiene un retraso de 0 milisegundos, no se ejecuta inmediatamente.
3. **'Fin'** se imprime a continuación, ya que es síncrono.
4. Una vez que la pila de ejecución está vacía, el event loop toma la tarea de la cola de tareas (el callback de `setTimeout`) y la mueve a la pila de ejecución.
5. **'Timeout'** se imprime después de que el código síncrono ha terminado.


## 2.3- ¿Por qué es necesaria la programación asíncrona en la web?
Imaginemos que las siguientes instrucciones fueran síncronas:
```javascript
const img = new Image();
img.src = "https://cataas.com/cat";
document.body.append(img);

//resto de instrucciones
```

La segunda instrucción hace una petición a un recurso externo para descargar una imagen. Esa instrucción hace la petición Y SALE DE LA PILA, pero la petición de imagen tiene que recorrer el camino que separa al cliente del servidor y el servidor tiene que recibirlo, procesarlo y enviar el recurso de vuelva al cliente. Éste tiene que recorrer el camino que los separa, llegar al cliente y éste procesarlo. Y todo eso antes de que la tercera instrucción se ejecute. Lo más seguro es que cuando el mensaje llegue, la tercera instrucción ya se habrá ejecutado y se habrá insertado una imagen vacía en el DOM.

¿Por qué el código síncrono no funciona bien en este caso?
El problema aquí es que las instrucciones se ejecutan de manera síncrona por lo que una instrucción se ejecuta cuando la anterior ha terminado, pero para las instrucciones que realizan una petición de recursos, terminar significa realizar la petición, no recibir la respuesta. La ejecución del resto de instrucciones continúa sin esperar la respuesta, lo que puede generar problemas si el siguiente código depende de ella. 

Solución: hacer que la tercera instrucción espere a que la segunda instrucción, de la que depende, termine de ejecutarse y reciba el recurso que ha solicitado. Esto haría que el hilo principal se bloqueara y el resto de instrucciones no se ejecutase. Para evitar eso, se usa la asincronía. 


## 2.4- Estrategias para mejorar la interactividad
Si un script está realizando cálculos complejos o manipulaciones del DOM, las operaciones asíncronas no bloquean la ejecución del código síncrono, lo que permite que el hilo principal responda rápidamente a otras tareas pero hace que las operaciones asíncronas puedan tardar unos milisegundos en procesarse. El problema viene cuando se están haciendo operaciones más complejas que ocupen mucho tiempo de CPU ya que, en ese caso, las operaciones asíncronas podría tardar más en responder.

Para mejorar la respuesta de las operaciones asíncronas se puede hacer lo siguiente:
- **Dividir tareas grandes en pequeñas**: Si una tarea pesada debe ejecutarse de manera síncrona, se puede dividir en pequeñas tareas síncronas y usar funciones asíncronas para "pausar" entre cada fragmento. Esto permite que el event loop procese otros eventos (como interacciones del usuario) mientras se completan las tareas más pequeñas.
- **Pasar operaciones síncronas a asíncronas**: Esto significa procesar las tareas que iban a ser ejecutadas de forma síncrona, pero que no necesitan inmediatez, de forma asíncrona. Así el código no bloquea la pila de ejecución y permite que se ejecuten tareas asíncronas de manera fluida.
- **Optimización de la UI y manipulación del DOM**: Las actualizaciones del DOM y la manipulación de la interfaz de usuario deben hacerse de manera eficiente para evitar que se acumulen en la pila de ejecución muchas tareas que afecten la respuesta de la aplicación.

----

# 3- Mecanismos para conseguir asincronía

## 3.1- Funciones globales

Las funciones globales `setTimeout` y `setInterval` permiten ejecutar código de manera asíncrona después de un tiempo determinado.
- setTimeout ejecuta una función después de un período de tiempo.
- setInterval ejecuta una función repetidamente a intervalos regulares.

Ambas funciones no bloquean la ejecución del resto del código y, en su lugar, utilizan el event loop de JavaScript para gestionar el retraso.
```javascript
console.log('Antes del setTimeout');
setTimeout(() => {
    console.log('Esto se ejecuta después de 2 segundos');
}, 2000);
console.log('Después del setTimeout');
```
Salida:
```
Antes del setTimeout
Después del setTimeout
Esto se ejecuta después de 2 segundos
```

## 3.2- Eventos

En JavaScript, los eventos son una parte fundamental de la interacción con el usuario, como los clics de botones, desplazamiento de página, o el envío de formularios. Aunque no siempre se les considera "métodos asíncronos", los eventos funcionan de manera asíncrona debido a cómo el motor de JavaScript maneja su ejecución.

Cuando se dispara un evento, como un clic en un botón, JavaScript coloca al manejador del evento en la cola de tareas para que sea ejecutado una vez que la pila de ejecución esté vacía, lo que significa que el código asíncrono (el evento) no interrumpe el flujo síncrono del programa.

Por tanto, el evento no se ejecutará inmediatamente si hay tareas síncronas en la pila de ejecución, pero sí responderá tan pronto como la pila de ejecución esté vacía.

Así, si un script está realizando cálculos complejos o manipulaciones del DOM, el evento de un clic o de otra interacción del usuario podría tardar unos milisegundos en procesarse, ya que el código asíncrono (el evento) no bloquea el hilo de ejecución principal. En operaciones más complejas que ocupen mucho tiempo de CPU, el evento podría tardar más en responder.

```javascript
// Simulación de una operación síncrona compleja
function calcularOperacionLarga() {
    console.log('Iniciando operación larga...');
    for (let i = 0; i < 1e6; i++) {  // Un ciclo largo para bloquear el hilo principal
        // Simulación de tarea intensiva
        console.log(i)
    }
    console.log('Operación larga terminada');
}

document.getElementById('boton').addEventListener('click', () => {
    console.log('¡Clic detectado!');
    setTimeout(() => {  // Usar setTimeout para simular una acción asíncrona
        mostrarMensaje("botón pinchado", "mensajeEvento");
    }, 0);
});

// Ejecutar la operación larga, que bloquea el hilo
calcularOperacionLarga();

```
Salida:
```
Iniciando operación sencilla
Operación sencilla terminada
¡Clic detectado!
Cálculo complejo terminado
Operación compleja solicitada
```

## 3.3- Funciones de retorno (callbacks) y eventos

Hasta ES6 (2015), la asincronía se manejaba mediante funciones de retorno (`callbacks`) y eventos. Un **callback** es una función de respuesta que se pasa como argumento a otra función y que se ejecuta una vez que esta última ha finalizado.

```javascript
//carga de un script de forma dinámica con un callback
function cargarScript(src, callback) {
    var script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.addEventListener('load', callback);
    document.head.append(script);
}
document.getElementById("boton").addEventListener('click', () => {
    cargarScript('https://code.jquery.com/jquery-3.7.1.min.js', () => {
        console.log('jQuery ha sido cargado con éxito');
        $('body').css('background-color', 'lightcoral');
    });
});
```

1. Al pinchar el botón con id "boton", se llama a la funcion cargarScript con dos parámetros, el script a cargar y una función de retorno (callback) que se ejecutará cuando la función cargarScript termine de ejecutarse (esta es la clave)
2. La función cargarScript 
    1. crea un elemento `<script>` en memoria
    2. Le asigna los parámetros `src` y `type`.
    3. Define un evento `load` sobre este script para ejecutar la función callback cuando el script se cargue. La función callback es la definida en el segundo parámetro de cargarScript (es una función de flecha que hace un console.lo gy cambia el background-color del body)
    4. Agrega el script al `head`, momento en el que el navegador inicia su descarga.

El uso del `callback` y del evento `load` garantiza que las acciones que dependen del script cargado (como usar `$` de jQuery) solo se ejecuten cuando el script esté disponible. Sin este mecanismo, podríamos intentar usar jQuery antes de que el navegador lo hubiera descargado y procesado, lo que generaría errores.

Los callbacks son una solución efectiva, pero pueden llevar a código difícil de leer, entender y mantener cuando se encadenan múltiples funciones asíncronas. Es lo que se llama la **pirámide infernal (callback hell)**

```javascript
//Pirámide infernal
function loadScript(scriptName, callback) {
    const script = document.createElement('script');
    script.src = scriptName;

    // Si ocurre un error al cargar el script
    script.onerror = function() {
        callback(new Error('Error al cargar el script: ' + scriptName), null);
    };

    // Si el script se carga con éxito
    script.onload = function() {
        callback(null, script);
    };

    // Se agrega el script al documento para iniciar la carga
    document.head.appendChild(script);
}


loadScript('1.js', function(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', function(error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('3.js', function(error, script) {
          if (error) {
            handleError(error);
          } else {
            // ...continua después de que se han cargado todos los script (*)
          }
        });

      }
    });
  }
});
```

Para abordar esto, en JavaScript moderno se utilizan **promesas** y `async/await`, facilitando la gestión de la asincronía de manera más estructurada.

----

## 3.4- Promesas then/catch
Las promesas surgen en con ES6 (ES2015) para simplificar la gestión del código asíncrono y simplificar la gestión de errores y el encadenamiento de operaciones. Son objetos que representan el estado actual de una operación asíncrona. Una promesa puede estar en uno de tres estados:
- `Pendiente (pending)`: La operación asíncrona aún no ha terminado.
- `Cumplida (fulfilled)`: La operación asíncrona se completó con éxito.
- `Rechazada (rejected)`: La operación asíncrona falló.

El objeto promise proporciona los siguientes métodos:
- `then()`: Maneja el resultado cuando la promesa se resuelve (cuando tiene éxito).
- `catch()`: Maneja los errores cuando la promesa es rechazada.
- `finally()`: Se ejecuta después de que la promesa se resuelva o sea rechazada, independientemente de lo que ocurriera.
- `all()`: Permite esperar múltiples promesas en paralelo y devolver una promesa cuando todas las de la matriz se resuelven. Si alguna es rechazada, `.all()` las rechaza todas.
- `race()`: recibe un array de promesas y devuelve una nueva promesa que se resuelve o rechaza tan pronto como la primera promesa se resuelva o se rechace.
- `allSettled()`: permite esperar que todas las promesas se resuelvan, independientemente de si se resolvieron con éxito o fueron rechazadas. Devuelve un array con objetos que contienen el estado y el valor (o el motivo del rechazo) de cada promesa.
- `any()`: funciona de manera similar a `Promise.race()`, pero en lugar de resolver con la primera promesa que se resuelva, any() resuelve con la primera promesa que no se rechace.

Para ilustrar cómo funcionan las promesas, vamos a usar la API fetch, que es una API que permite manejar conexiones HTTP mediante el uso de: 
- `Request`: Representa una solicitud HTTP. Puedes usarla para personalizar detalles de la solicitud antes de pasarla a fetch().
- Una función `fetch(URL)`, que devuelve una promesa a un objeto Response
- `Response`: Representa la respuesta a una solicitud HTTP realizada con fetch(). Incluye las siguientes propiedades y métodos para trabajar con el cuerpo de la respuesta
    - `ok`: Indica si la respuesta fue exitosa (código 200-299).
    - `status`: Código de estado HTTP de la respuesta.
    - `statusText`: Mensaje asociado al código de estado HTTP.
    - `headers`: Cabeceras HTTP de la respuesta.
    - `url`: URL de la respuesta.
    - `type`: Tipo de respuesta (por ejemplo, "basic", "cors", etc.).
    - `body`: Flujo de datos del cuerpo de la respuesta.
    - `json()`: método que lee la respuesta como un JSON
    - `blob()`: método que lee la respuesta como un blob (binary large object). Se utiliza comúnmente para manejar archivos, como imágenes, videos, audios, o incluso archivos de documentos.
    - `text()`: método que lee la repuesta como texto
- `Headers`: Representa las cabeceras HTTP que puedes agregar a las solicitudes o respuestas. Permite configurar las cabeceras de la solicitud o inspeccionar las cabeceras de la respuesta.
- `FormData`: Aunque no es un objeto exclusivo de la Fetch API, se usa junto con fetch() para enviar datos de formularios (por ejemplo, para realizar una carga de archivos).
 
Flujo de trabajo:
- Se hace una solicitud HTTP con fetch, que devuelve una promesa.
- Se usan los métodos del objeto `promise` para interactuar con dicha promesa
  - `.then` para cuando se resuelve
  -`.catch` para cuando es rechazada
- Esa promesa se resuelve con un objeto `Response`, que representa la respuesta HTTP.
- Se comprueba qué ha respondido el servidor (200, 403, 404, etc.). Se puede usar `response.ok` que comprueba la 200 o `response.status`
- Si la repuesta es 200, se accede a los datos de la respuesta usando los métodos del objeto `response` como `.json()`, `.text()`, o `.blob()`, dependiendo del tipo de respuesta esperada.


```javascript
// Gestionando la asincronía mediante el uso de fetch, que devuelve una promesa. Aquí se gestiona encadenando .then (ES6)
function obtenerChiste(){
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
      // Verificamos que la respuesta sea exitosa
      if (!response.ok) {
        throw new Error('Hubo un problema con la solicitud');
      }
      return response.json(); // Convertimos la respuesta a JSON
    })
    .then(data => {
      // Aquí trabajamos con los datos una vez que la promesa se resuelve
      console.log(data);
    })
    .catch(error => {
      // Si hubo un error (en la solicitud o al procesar los datos)
      console.error('Error:', error);
    });
}

```

```javascript
//Uso de blob
function obtenerFoto(){
    fetch('https://picsum.photos/300')
    .then(response => response.blob())
    .then(blob => {
        const imageURL = URL.createObjectURL(blob);
        const img = `<img src="${imageURL}" alt="Imagen aleatoria"/>`;
        mostrarMensaje(img,"mensajePromesas", false);

    })
    .catch(error => console.error('Error al cargar la imagen:', error));
}
```

```javascript
//Ejemplo de Promise.all
const promesa1 = Promise.resolve(3); // Se resuelve inmediatamente con el valor 3
const promesa2 = Promise.resolve(5); // Se resuelve inmediatamente con el valor 5
const promesa3 = new Promise((resolve, reject) => setTimeout(resolve, 100, 10)); // Se resuelve después de 100 ms con el valor 10

Promise.all([promesa1, promesa2, promesa3])
  .then(values => {
    console.log(values); // [3, 5, 10]
  })
  .catch(error => {
    console.error(error); // Si alguna promesa es rechazada, se maneja aquí.
  });
```

```javascript
// Ejemplo: Evitar el cacheo de imágenes
//La llamada a la API es https://cataas.com/cat PERO si se hacen tres llamadas, el navegador descarga la primera, la mete en caché y, al detectar que el resto viene de la misma URL sirve la primera en vez de hacer las otras dos solicitudes a la API.
// Solución: muchas API ignoran si se le pasan más parámetros de los que necesitan en la URL. Por tanto, se le puede poner la hora de la petición o un número aleatorio como parámetro. El navegador detectará que es otra petición y no servirá la misma imagen desde caché
function generarURL() {
    return `https://cataas.com/cat?${Date.now()}_${Math.random()}`;
  }

// Función para cargar una imagen de forma asíncrona
function cargarImagen(url) {
    //El objeto promise acepta dos argumentos: función que ejecutar si se resuelve la promesa y función a ejecutar si se rechaza
    return new Promise((resolve, reject) => {
      //new Image() crea un objeto JavaScript que se puede utilizar más libremente para tareas en segundo plano como precargar imágenes, manipularlas con un canvas o trabajar con ellas sin la necesidad inmediata de mostrarlas en el DOM (que también se puede).
      const imagen = new Image();
      imagen.src = url;
  
      // Cuando la imagen se cargue correctamente (la imagen se ha descargado con éxito), marcamos la promesa como resuelta (éxito) para poder continuar. Esto hace que el código que estaba esperando la promesa (usando .then()) pueda continuar su ejecución, ahora que tiene la imagen cargada.
      imagen.onload = () => resolve(imagen);
  
      // Si ocurre un error al cargar la imagen marcamos la promesa como rechazada para que el código que estaba esperando .catch continúe su ejecución
      imagen.onerror = () => reject(`Error al cargar la imagen: ${url}`);
    });
}
  
document.getElementById("cargarGatos").addEventListener("click", () => {
    const promesa1 = cargarImagen(generarURL());
    const promesa2 = cargarImagen(generarURL());
    const promesa3 = cargarImagen(generarURL());

    Promise.all([promesa1, promesa2, promesa3])
        .then(imagenes => {
            imagenes.forEach(imagen => {
                document.body.append(imagen);
            });
        })
        .catch(error => {
            console.error(error);
        });
});
```
----

## 3.5- Promesas async/await
La sintaxis de ES2015 (ES6) maneja bien la asincronía, pero permite encadenar varios .then y .catch, lo que puede resultar confuso en ocasiones. ES2017 (ES8) sigue gestionando la asincronía con promesas, pero introduce una nueva sintaxis para manejarlas de manera más legible y estructurada permitiendo escribir código asíncrono con una apariencia más similar al código síncrono. Para ello usa dos elementos que sustituyen a `.then()` y `.catch()`:
  - `async` se antepone a la declaración de la función y hace que ésta devuelva una promesa. Si dentro de la función se devuelve un valor, este se envuelve automáticamente en una promesa resuelta.
  - `await` sólo puede usarse dentro de funciones `async` y permite esperar el resultado de una promesa antes de continuar con la ejecución.
  
  ```javascript
  //Ejemplo de función independiente asíncrona con gestión de errores
  async function obtenerDatos() {
      try {
        let respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud: ${respuesta.status} ${respuesta.statusText}`);
        }
        let datos = await respuesta.json();
        console.log(datos);
      } catch (error) {
          console.error("Hubo un problema al obtener los datos:", error);
      }
  }

  obtenerDatos();
  ```

  ```javascript
  // Ejemplo de gestión de asincronía mediante el uso de fetch con la sintaxis async/await (ES8)
  document.querySelector("botonChiste").addEventlistener("click", async()=>{
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');  //La ejecución se detiene en `await fetch(...)` hasta que la promesa se resuelva, lo que evita el uso de `.then()` anidados.
      if (!response.ok) throw new Error('Hubo un problema con la solicitud');   // Verificamos que la respuesta sea exitosa
      const data = await response.json(); // Convertimos la respuesta a JSON
      console.log(data);  //ya se puede trabajar con los datos recibidos
    } catch (error) {
      console.error('Error:', error);   // Si hubo un error (en la solicitud o al procesar los datos)
    }
  });
  ```

  ```javascript
  //Ejemplo de promise.all para cargar varias imágenes de forma concurrente

  // Función para cargar una imagen, devuelve una promesa
  function cargarImagen(url) {
    //Al objeto promise se le pasan dos argumentos: resolve, la función que ejecutar si se resuelve la promesa, y reject, la función que ejecutar si se rechaza.
    return new Promise((resolve, reject) => {
      const imagen = new Image();
      imagen.src = url;

      // Cuando la imagen se carga, resolvemos la promesa
      imagen.onload = () => resolve(imagen);

      // Si ocurre un error, rechazamos la promesa
      imagen.onerror = () => reject(`Error al cargar la imagen: ${url}`);
    });
  }

  // Función principal para cargar varias imágenes usando async/await
  document.querySelector("botonImagenes").addEventListener("click", async()=>{
    try {
      // await espera hasta que esa promesa se resuelva (o sea rechazada)
      // promise.all devolverá una promesa resuelta cuando todas se resuelvan o se rechazará si alguna no se resuelve
      const imagenes = await Promise.all([
        cargarImagen('https://via.placeholder.com/150'),
        cargarImagen('https://via.placeholder.com/200'),
        cargarImagen('https://via.placeholder.com/250')
      ]);

      // Si todas las imágenes se cargan correctamente, las agregamos al DOM
      imagenes.forEach(imagen => {
        document.body.append(imagen);
      });
    } catch (error) {
      // Si alguna promesa es rechazada (error en la carga de alguna imagen)
      console.error(error);
    }
  });
  ```

###  **Diferencias entre then y async/wait**
| Característica      |  `.then()` | `async/await` |
|--------------------|----------------|------------|
| Lectura del código | Más difícil cuando hay muchas promesas encadenadas | Más legible, se parece a código síncrono |
| Manejo de errores | `.catch()` | `try/catch` |

---

## 3.6- Trabajadores web (web workers)

### Los hilos de ejecución

El motor de JavaScript en la mayoría de los entornos (como el navegador o Node.js) utiliza un solo hilo de ejecución para manejar el código JavaScript. Este hilo se encarga de:
- Ejecutar código síncrono (instrucciones que van directamente a la pila de ejecución).
- Procesar las tareas asíncronas (moviéndolas de la cola de microtareas y de la cola de tareas a la pila de ejecución).

El ciclo de eventos y las estructuras se usan permiten que el motor de JavaScript maneje la asincronía de manera eficiente, sin bloquear el hilo principal. Sin embargo, aún así, con un solo hilo sólo se puede ejecutar una instrucción a la vez. 

¿Qué pasa cuando el código necesita hacer tareas intensivas como, por ejemplo, procesamiento de grandes volúmenes de datos o tareas de cálculo complejas que, normalmente, son síncronas? Que el hilo principal se bloquea. Para solucionar esto, JavaScript ofrece una forma de delegar trabajo a otros hilos mediante los `trabajadores web (web workers)`.

Por tanto, los `trabajadores web` son una característica de JavaScript que permite ejecutar código en segundo plano, en un hilo separado del hilo principal de ejecución para evitar bloquear la interfaz de usuario en situaciones como, por ejemplo:
  - Procesamiento de tareas muy intensivas.
  - Manipulación de grandes cantidades de datos.
  - Operaciones que no requieren interacción con la interfaz de usuario.

### Características:
  - **Hilos separados**: Se ejecutan en un hilo separado, lo que permite la multitarea.
  - **Sin acceso al DOM**: No tienen acceso directo al DOM (Document Object Model) ni a variables globales del hilo principal.
  - **Comunicación por mensajes**: La comunicación entre el hilo principal y el trabajador se realiza a través de mensajes (usando postMessage y escuchando eventos message).


### self
En el contexto de un trabajador web, `self` hace referencia al propio trabajador, es decir, al hilo de ejecución que está corriendo en segundo plano. Es el equivalente a `this` en un entorno de ejecución normal.

Se puede usar para escuchar mensajes (con onmessage), enviar mensajes (con postMessage()), y para importar scripts (con importScripts()).


### Métodos

- **`postMessage(message)`**: Envía un mensaje al trabajador web.
  ```js
  //Para enviar varios mensajes, es mejor hacerlo como un mensaje compuesto en forma de objeto
  //  Evita posibles condiciones de carrera: Si los mensajes se procesan en distinto orden, podrías recibir "terminado" antes de "El resultado es: ...".
  //  Mejora la claridad: Se entiende mejor la estructura del mensaje sin depender del orden de llegada.
  //  Facilita la ampliación: Puedes incluir más información sin necesidad de enviar múltiples mensajes.
  
  // En el hilo principal
  worker.postMessage({ action: 'start', data: 'Hola, trabajador' });

  // En el trabajador web
  self.postMessage({ result: 'Tarea completada' });
  ```

- **`terminate()`**: Detiene el trabajador y libera recursos.
  ```js
  worker.terminate();
  ```

  - **`close()`**: Igual que terminate, pero dentro del trabajado
  ```js
  self.close();
  ```

### Eventos 

- **`message`**: Se activa cuando el trabajador envía un mensaje de vuelta.
  ```js
  worker.onmessage = function(event) {
      console.log('Mensaje del trabajador:', event.data);
  };
  ```
- **`messageerror`**: Se activa cuando ocurre un error al convertir de un formato serializado,como JSON, a objeto, un mensaje recibido por el trabajador web o el hilo principal.

- **`error`**: Se activa si ocurre un error dentro del trabajador.
  ```js
  worker.onerror = function(event) {
      console.error('Error en el trabajador:', event.message);
  };
  ```

### Creación de trabajadores

Los trabajadores web se crean usando el constructor `Worker`, que toma como argumento la URL de un archivo JavaScript que contiene el código que se ejecutará en el hilo separado.
```js
const worker = new Worker('worker.js');
```

#### Opción 1: Creación de trabajadores usando ficheros separados
  1. **Crear el archivo del trabajador** (por ejemplo, worker.js), que contendrá el código que se ejecutará en el hilo separado y el código para gestionar los mensajes que se mandarán al principal y que se recibirán de éste.
  ```js
  // worker.js
  //El tabajador recibe el mensaje del hilo principal
  self.onmessage = function(event) {
      if (event.data=="trabajar"){
        const resultado=hacerCalculos();
        self.postMessage(resultado);
      }else{
        console.log('Mensaje recibido del hilo principal:', event.data);
      }
  };
  ```

  2. **Crear un objeto `worker` en el hilo principal (en `main.js`)** pasándole como argumento al constructor el archivo JavaScript que contiene el trabajador

  ```js
  // main.js
  const worker = new Worker('worker.js');

  // Enviar un mensaje al trabajador
  worker.postMessage('Inicio de tarea');

  // Escuchar mensajes del trabajador
  worker.onmessage = function(event) {
      console.log('Mensaje del trabajador:', event.data);
  };
  ```

  3. **Gestionar la comunicación entre el hilo principal y el trabajador**  
  El hilo principal y el trabajador se comunican mediante el método `postMessage`:
   - El hilo principal usa `worker.postMessage()`.
   - El trabajador usa `self.postMessage()`.


```javascript
//Ejemplo completo de trabajo con un trabajador web
//`main.js` (hilo principal):

// Crear el trabajador
const worker = new Worker('worker.js');

// Enviar un mensaje al trabajador
worker.postMessage('Inicio de tarea');

// Escuchar el mensaje de vuelta del trabajador
worker.onmessage = function(event) {
    console.log('Respuesta del trabajador:', event.data);
};

// Manejar errores del trabajador
worker.onerror = function(error) {
    console.error('Error en el trabajador:', error.message);
};

//`worker.js` (trabajador):
// Escuchar mensajes del hilo principal
self.onmessage = function(event) {
    console.log('Mensaje recibido:', event.data);

    // Realizar una tarea (simulando una tarea pesada)
    let result = 0;
    for (let i = 0; i < 1e6; i++) {
        result += i;
    }

    // Enviar el resultado de vuelta al hilo principal
    self.postMessage('Resultado: ' + result);
};
```


```javascript
//Ejemplo de lo que hace el trabajador pero con una promesa
//DIFERENCIA:
//  - La promesa se coloca en la cola de microtareas. Una vez que se queda vacía la cola, entra en la pila y nadie la desalojará hasta que acabe, monopolizando el hilo principal hasta que termine. 
//  - El trabajador se ejecuta en un hilo separado y nunca bloqueará el hilo principal
function tareaPesada() {
    return new Promise((resolve) => {
        let result = 0;
        for (let i = 0; i < 1e9; i++) { // Bucle pesado
            result += i;
        }
        resolve(result);
    });
}

console.log("Inicio de tarea");

tareaPesada().then((resultado) => {
    console.log("Resultado:", resultado);
});

console.log("Tarea en proceso...");
```

#### Opción 2: Usar la función Blob
**No recomendado**. Cuando el código del trabajador es pequeño se puede definir el trabajador directamente dentro del archivo principal usando el método `Blob`. 
  ```js
  const blob = new Blob([`
      self.onmessage = function(event) {
          let result = 0;
          for (let i = 0; i < 1e6; i++) {
              result += i;
          }
          self.postMessage(result);
      };
  `], { type: 'application/javascript' });

  const worker = new Worker(URL.createObjectURL(blob));

  worker.postMessage('Start');
  worker.onmessage = function(event) {
      console.log('Resultado del trabajador:', event.data);
  };
  ```

----

# 4- AJAX (ASynchronous JavaScript and XML)
AJAX es una técnica de desarrollo web que permite a las aplicaciones web enviar y recibir datos de un servidor de manera asíncrona **sin necesidad de recargar la página completa, recargando sólo las partes afectadas**. Esto mejora la experiencia del usuario al hacer que las aplicaciones sean más rápidas y dinámicas.

Aunque el nombre incluye "XML", AJAX no está limitado a este formato. Hoy en día, es más común usar JSON (JavaScript Object Notation) como formato de intercambio de datos debido a su ligereza y facilidad de uso.

AJAX, por tanto, no es técnica de desarrollo que combina varias tecnologías que, en la práctica moderna, suelen ser JavaScript + Fetch para realizar solicitudes asíncronas. No obstante, no son las únicas
  - **JavaScript y fetch**
  - **Axios con async/await**, una biblioteca de JavaScript para gestionar solicitues HTTP
  - **jQuery con $.ajax()**, que es una biblioteca de JavaScript que simplifica la manipulación del DOM (Modelo de Objetos del Documento), el manejo de eventos, la animación, y las solicitudes HTTP 
  - **Websockets**, que permite una comunicación bidireccional entre el cliente y el servidor a través de un único canal persistente. Es especialmente útil para aplicaciones en tiempo real, como chats o aplicaciones de monitoreo en vivo.
  - **GraphQL con fetch** que es un lenguaje de consulta para APIs y un entorno de ejecución para realizarlas.


## ¿Cómo funciona AJAX?
1. El usuario realiza una acción en la página (por ejemplo, hacer clic en un botón o enviar un formulario).
2. Se envía una solicitud HTTP al servidor en segundo plano.
3. El servidor procesa la solicitud y devuelve una respuesta (generalmente en formato JSON o XML).
4. El programa recibe la respuesta y actualiza las partes de la página afectadas sin recargarla completamente.