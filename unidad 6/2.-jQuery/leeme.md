# jQuery

1. [Introducción a jQuery](#1--introducción-a-jquery)
2. [Instalación y uso de jQuery](#2--instalación-y-uso-de-jquery)
3. [Primeros pasos con jQuery](#3--primeros-pasos-con-jquery)
4. [Selección de elementos](#4--selección-de-elementos)
5. [Modificación de atributos y propiedades](#5--modificación-de-atributos-y-propiedades)
6. [Eventos](#6--eventos)
7. [Modificación del DOM](#7--modificación-del-dom)
8. [Navegación por el DOM](#8--navegación-por-el-dom)
9. [Filtrado](#9--filtrado)
10. [Efectos](#10--efectos)
11. [Asincronía (AJAX)](#11--asincronía-ajax)

---

# 1- Introducción a jQuery

jQuery es una biblioteca de JavaScript que fue creada para simplificar la manipulación del DOM (Modelo de Objetos del Documento), el manejo de eventos, la animación, y las solicitudes HTTP (AJAX). Fue muy popular durante los primeros años de desarrollo web debido a su capacidad para resolver diferencias de compatibilidad entre navegadores y hacer que las tareas comunes en JavaScript fueran más fáciles de implementar.

Las características principales de jQuery son:

- **Selección y manipulación del DOM** Permite seleccionar elementos de una página HTML con una sintaxis sencilla y realizar operaciones sobre ellos.
- **Manejo de eventos** Facilita la asignación de manejadores de eventos a los elementos
- **Proporciona métodos para agregar efectos y animaciones** 
- **Facilita las solicitudes asíncronas** sin tener que escribir mucho código, permitiendo actualizar partes de la página sin recargarla completamente.
- **Compatibilidad entre navegadores** jQuery fue diseñado para manejar las diferencias de implementación de JavaScript entre navegadores, lo que permitía que el código funcionara de manera consistente en todos los principales navegadores de la época.
- **Encadenamiento de métodos**, que permite hacer cosas como lo siguiente:
    ```javascript
    $("#miParrafo")
        .text("Este es un nuevo texto")
        .css("color", "blue")
        .css("font-size", "20px")
        .fadeOut(2000);
    ```

En los últimos años, el uso de jQuery ha disminuido debido a varias razones:

- **Mejora de JavaScript nativo**: Las capacidades de JavaScript moderno (como las API de manipulación del DOM, las promesas y `fetch` para AJAX) han mejorado significativamente, haciendo que muchas de las funcionalidades de jQuery sean innecesarias.
- **Frameworks modernos**: Librerías y frameworks como React, Vue y Angular han ganado popularidad, proporcionando soluciones más completas y optimizadas para construir aplicaciones web.

Aunque jQuery sigue siendo ampliamente utilizado, especialmente en proyectos más antiguos, muchos desarrolladores optan por no usarlo en proyectos nuevos, ya que la mayoría de sus funcionalidades pueden lograrse con JavaScript puro o con otros frameworks más modernos.

----

# 2- Instalación y uso de jQuery

Se puede usar jQuery mediante la inclusión de un enlace a un CDN (Content Delivery Network) o instalándolo mediante node

## 1. Uso como recurso remoto (CDN)
Para probar jQuery o para proyectos pequeños, se puede usar un CDN:
  ```html
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
  ```

  Esto es cómodo porque no hay que configurar nada, sólo incluir el enlace al CDN

## 2. Uso como fichero local
Se descarga el fichero, se almacena en un directorio y se enlaza en la cabecera
  ```html
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  ```
  
## 3. Uso como recurso local
Ideal para para proyectos más complejos y avanzados, donde se necesita poder cambiar la configuración.

Instalarlo en local mediante node tiene una serie de ventajas:
  - La **actualización es más sencilla**, ya que sólo hay que hacer `npm update` para actualizar los paquetes a la versión más alta sin pasar al siguiente número (por ejemplo, actualiza de la 3.6 a la 3.9, pero no a la 4.0) o `npm update paquete@latest` o `npx npm-check-updates -u` para actualizar un paquete concreto o todos los paquetes, respectivamente, a la última versión, aunque implique un cambio mayor. Con un CDN hay que conectarse de vez en cuando, descargar el fichero cuando cambie la versión y ponerlo en el directorio correcto.
  - **Control de versiones**: Con npm, se puede especificar la versión exacta a usar en el proyecto, o incluso se puede fijar un rango de versiones compatibles para evitar sorpresas cuando se actualicen las dependencias.
  - **Empaquetado y optimización**: Al usar un empaquetador como Webpack o Parcel el empaquetador se encargará de optimizar el código (minificarlo, dividirlo en trozos, etc.). Esto permite gestionar mejor el tamaño y la estructura del proyecto.
  - **No depender de un CDN**: Los CDNs pueden fallar y dejar a la web sin el recurso.

  Con esta opción, el fichero de clases de tailwindcss que se usa es el menor posible, porque no incluye las clases que no se utilizan y, además, si se usa un empaquetadaor, el código estará minimizado. Como desventaja, está que hay que **configurar el entorno** y **compilar el código tailwindcss** para que se genere un fichero sólo con las clases necesarias.

  Los pasos para instalar tailwindcss en node son:

  1. **Instalar Node.js**.

  2. **Iniciar el proyecto desde su directorio con `npm init`**.  
    Responde a las preguntas para generar el archivo `package.json`, que es el archivo de configuración para Node.js.  
    No uses mayúsculas, espacios o caracteres especiales en el campo «name».

  3. **Instalar jQuery** para node como una dependencia necesaria para producción
      ```bash
      npm install jquery
      ```
  
  4. **Instalar y configurar el empaquetador** para incluir el CSS, prefijar, minimizar y empaquetar. En este caso parcel también se ocupará de tomar el código js de jquery en node_modules e incluirlo en nuestro proyecto
      ```bash
      npm install --save-dev parcel
      ```

  5. **Configurar parcel para que use jQuery como un módulo** en `package.json`
      ```json
      "type": "module",
      ```

  5. **Importar jquery en el archivo principal js**. El empaquetador se ocupará de coger el fichero js de jquery de node_modules y empaquetarlo. 
      ```javascript
      //Usando ES6
      import $ from 'jquery';
      ```

  6. **Configurar el html para que importe js como un módulo** con `type="module"`
      ```html
      <script type="module" src="../js/1.-seleccion-elementos-dom.js" defer></script>
      ```

----

# 3- Primeros pasos con jQuery
Todo script de jQuery solía empezar con lo siguiente:
 ```javascript
$(document).ready(()=>{
  // código jquery 
});
 ```
que en esencia significa, "ejecuta el código cuando se haya cargado el DOM y el documento esté listo". Su equivalente en javascript sería:
```javascript
document.addEventListener("DOMContentLoaded", ()=>{ 
  // resto de código
});
```

Esto aseguraba que el código sólo se ejecutaba cuando el DOM estuviera cargado, pero desde que se usa defer en el encabezado, ya no es necesario usarlo en JavaScript. Sin embargo, en jQuery sigue siendo necesario ponerlo. No obstante, la sintaxis anterior está obsoleta siendo la siguiente la moderna:
```javascript
$(() => {
   // Código jQuery aquí
});
```


 **`$()`**, que es una función global de jQuery fundamental. Es el núcleo de jQuery, el punto de entrada a la biblioteca y devuelve un objeto `jQuery`, que permite seleccionar y manipular elementos del DOM, manejar eventos, realizar peticiones AJAX y ejecutar código cuando el documento está listo.


----

# 4- Selección de elementos


La selección de elementos es una de las características más importantes de jQuery, ya que permite manipular el DOM de manera eficiente. jQuery utiliza selectores similares a los de CSS, lo que facilita la búsqueda y manipulación de elementos en la página.

- **Seleccionar por ID**. Para seleccionar un elemento con un ID específico, se usa `#` seguido del nombre del ID:
    ```javascript
    $('#miElemento'); // Selecciona el elemento con id="miElemento"
    ```

- **Seleccionar por Clase**. Para seleccionar todos los elementos que tienen una clase específica, se usa `.` seguido del nombre de la clase:
    ```javascript
    $('.miClase'); // Selecciona todos los elementos con class="miClase"
    ```

- **Seleccionar por Etiqueta**. Para seleccionar todos los elementos de un tipo específico, se usa el nombre de la etiqueta:
    ```javascript
    $('p'); // Selecciona todos los párrafos <p>
    ```

- **Seleccionar Múltiples Elementos**. Se pueden seleccionar múltiples elementos separando los selectores con una coma:
  ```javascript
  $('h1, h2, h3'); // Selecciona todos los encabezados h1, h2 y h3
  ```

- **Seleccionar un elemento dentro de otro** Para seleccionar elementos dentro de un contenedor específico, se encadenan los selectores:
  ```javascript
  $('#contenedor p'); // Selecciona todos los <p> dentro del elemento con id="contenedor"
  ```

- **Seleccionar el primer y último elemento**. Para seleccionar el primer o el último elemento de un conjunto de elementos:
  ```javascript
  $('li:first'); // Primer elemento <li>
  $('li:last');  // Último elemento <li>
  ```

- **Seleccionar por atributo**
  ```javascript
  $('input[type="text"]'); // Selecciona todos los inputs de tipo texto
  $('a[href^="https://"]'); // Selecciona todos los enlaces que comienzan con "https://"
  $('img[alt$="logo"]');    // Selecciona todas las imágenes cuyo atributo alt termina en "logo"
  ```

- **Seleccionar elementos visibles e invisibles**
  ```javascript
  $('div:visible');   // Selecciona todos los divs visibles
  $('div:hidden');    // Selecciona todos los divs ocultos
  ```

- **Seleccionar elementos pares e impares**
  ```javascript
  $('tr:odd');  // Filtra las filas impares de una tabla (0-based index)
  $('tr:even'); // Filtra las filas pares de una tabla (0-based index)
  ```

- **Seleccionar elementos con filtros adicionales** jQuery permite seleccionar elementos con filtros adicionales, como `:first-child`, `:last-child`, `:nth-child(n)`, etc.
  ```javascript
  $('li:first-child');  // Selecciona el primer hijo <li> de su contenedor
  $('li:nth-child(3)'); // Selecciona el tercer <li> dentro de su lista
  ```

----

# 5- Modificación de atributos y propiedades

En jQuery es posible modificar atributos y parámetros de elementos HTML de manera sencilla usando métodos específicos.

## Atributos:
- Son los valores definidos directamente en el marcado HTML de un elemento, como `alt` o `src`.
- Se almacenan en el DOM tal como fueron definidos en el HTML.
- No reflejan siempre el estado actual de los elementos, por lo que, si cambias una propiedad en JavaScript, no necesariamente se actualiza el atributo en el DOM, y viceversa.
- Se interacciona con ellos a través de los métodos `getAttribute()` y `setAttribute()`.

## Propiedades:
- Son los valores que el navegador mantiene dinámicamente y que reflejan el estado actual de un elemento.
- No están necesariamente sincronizadas con los atributos HTML.
- Se definen a través de los objetos de los elementos en JavaScript y son accesibles a través del operador punto (`.`).


## Modificación de atributos

- **attr()** - Permite obtener y modificar atributos, que están directamente definidos en el HTML y no cambian su estado de forma dinámica. Suelen tener una propiedad asociada con el mismo nombre y, en ese caso, modificar una propiedad puede modificar el atributo.
  ```javascript
  //Obtener el valor de un atributo:
  let src = $('img').attr('src'); // Obtiene el atributo "src" de la primera imagen
  console.log(src);

  //Modificar el valor de un atributo:
  $('img').attr('src', 'nueva-imagen.jpg'); // Cambia el atributo "src" de todas las imágenes

  //Modificar varios atributos a la vez:
  $('a').attr({
    href: 'https://www.ejemplo.com',
    title: 'Enlace de ejemplo'
  });
  ```

- **removeAttr()** - Eliminar Atributos
  ```javascript
  $('input').removeAttr('disabled'); // Elimina el atributo "disabled" de todos los inputs
  ```


- **.css()** permite obtener o establecer propiedades de estilo CSS en elementos del DOM. Funciona de varias maneras:
  1. **Obtener el valor de una propiedad CSS**: Cuando se usa `.css()` con un argumento de solo un nombre de propiedad CSS, devuelve el valor de esa propiedad en el primer elemento de la selección (si existe).
      ```javascript
      //Ejemplo de obtener una propiedad:
      let color = $('#miElemento').css('color');
      console.log(color);  // Muestra el valor de la propiedad 'color' (por ejemplo, 'rgb(0, 0, 0)' si es negro)
      ```
  
  2. **Establecer una propiedad CSS**: Cuando se usa `.css()` con dos argumentos (el nombre de la propiedad y el valor), establece esa propiedad CSS en los elementos seleccionados.
      ```javascript
      //Ejemplo de establecer una propiedad:
      $('#miElemento').css('background-color', 'red');
      ```

  3. **Establecer múltiples propiedades CSS**: También se puede pasar un objeto con varias propiedades y valores para establecer múltiples propiedades de CSS a la vez.
      ```javascript
      //Ejemplo de establecer múltiples propiedades:
      $('#miElemento').css({
          'background-color': 'blue',
          'color': 'white',
          'font-size': '16px'
      });
      ```

  Es importante recordar que si el valor de la propiedad CSS requiere una unidad de medida (como px, %, em, etc.), deberás especificarla al establecer el valor.
    ```javascript
    //Ejemplo con unidad de medida:
    $('#miElemento').css('width', '100px');
    ```

  `.css()` permite obtener o modificar cualquier propiedad css pero, además, hay una serie de métodos que modifican u obtienen propiedades concretºas de css como, por ejemplo, `.width()`, `.height()`, `.innerWidth()`, `.innerHeight()`, etc.

## Modificación de propiedades

- **prop()**. Permite obtener o establecer las propiedades de los elementos DOM, que son valores gestionados por JavaScript y que reflejan el estado actual del elemento, como checked, selected, disabled, etc. En algunos casos, al modificar una propiedad de un elemento, mediante `prop()`, esa modificación también puede reflejarse en el atributo HTML correspondiente. Esto ocurre especialmente cuando el valor de la propiedad está directamente vinculado al atributo
  ```javascript
  //Obtener una propiedad:
  let esChecked = $('input[type="checkbox"]').prop('checked'); // Devuelve true o false
  console.log(esChecked);

  //Modificar una propiedad:
  $('input[type="checkbox"]').prop('checked', true); // Marca todos los checkboxes

  //Crear una propiedad:
  $("#mensaje").prop("miPropiedad", "Texto oculto");
  ```

- **.nombrePropiedad**. Permite leer o darle valor a una propiedad personalizada
    ```javascript
    //La selección de elementos devuelve un objeto jQuery. Cuando se accede a propiedades personalizadas, hay que indicar el índice del objeto con el que se va a trabajar. El resto de métodos lo hacen ellos solos
    $('#campoDeshabilitado')[0].miPropiedad="hola";
    console.log ($('#campoDeshabilitado')[0].miPropiedad);
    ```

- **removeProp()** Elimina una propiedad de un elemento (NO un atributo, sino una propiedad de JavaScript). NO se debe usar en propiedades nativas, sólo personalizadas
  ```javascript
  $("input").prop("disabled", true); // Desactiva el input
  $("input").removeProp("disabled"); // Elimina la propiedad, pero el atributo sigue ahí. Un programador inexperto esperaría que el campo volviera a estar "enabled", pero no porque no se elimina el atributo
  $("input").prop("disabled", false); // Activa el input

  $("#mensaje").removeProp("miPropiedad");  // Funcionará bien
  ```
  
- **val()** - Obtener y Modificar Valores de Formularios
  ```javascript
  //Obtener el valor de un campo de entrada:
  let valor = $('#miInput').val(); // Obtiene el valor del input con id "miInput"
  console.log(valor);

  //Modificar el valor de un campo de entrada:
  $('#miInput').val('Nuevo valor'); // Establece un nuevo valor en el input
  ```

- **data()** - Manejo de Atributos data-*
  ```javascript
  //Obtener el valor de un atributo data-*:
  let info = $('#elemento').data('info'); // Supongamos que el elemento tiene data-info="123"
  console.log(info); // 123

  //Modificar el valor de un atributo data-*:
  $('#elemento').data('info', 456); // Cambia el valor de data-info a 456
  ```

- **text()** - Obtiene o establece el contenido de texto de los elementos seleccionados. A diferencia de `.html()`, no interpreta etiquetas HTML, solo manipula texto plano.
  ```javascript
  $('#miElemento').text('Nuevo texto');  // Cambia solo el texto visible
  ```

- **html()** - Obtiene o establece el contenido HTML de los elementos seleccionados. A diferencia de `.text()`, SÍ interpreta etiquetas HTML.
  ```javascript
  $('#miElemento').html('<b>Texto con negritas</b>');  // Modifica el contenido HTML
  ```

- **width()** - Obtener o modificar el Ancho de un elemento
  ```javascript
  //Obtener el ancho de un elemento:
  let ancho = $('#miElemento').width();
  console.log(ancho);  // Muestra el ancho del elemento

  //Modificar el ancho de un elemento:
  $('#miElemento').width(300);  // Establece el ancho del elemento a 300px
  ```

- **height()** - Obtener o modificar la Altura de un elemento
  ```javascript
  //Obtener la altura de un elemento:
  let altura = $('#miElemento').height();
  console.log(altura);  // Muestra la altura del elemento

  //Modificar la altura de un elemento:
  $('#miElemento').height(200);  // Establece la altura del elemento a 200px
  ```

- **position()** - Obtener la posición de un elemento respecto a su contenedor más cercano con posición relativa.
  ```javascript
  Obtener la posición de un elemento:
  let posicion = $('#miElemento').position();
  console.log(posicion);  // Devuelve un objeto con las propiedades "top" y "left"
  ```

## Modificación de clases 
- **addClass()** Agrega una o varias clases a los elementos seleccionados.
    ```javascript
    //Esto añadirá la clase resaltado al elemento con id miElemento.
    $("#miElemento").addClass("resaltado");

    //También se pueden añadir múltiples clases separadas por espacios:
    $("#miElemento").addClass("resaltado bordeado");
    ```

- **hasClass()** Verifica si un elemento tiene una clase específica y devuelve true o false.
  ```javascript
  if ($("#miElemento").hasClass("resaltado")) {
      console.log("El elemento tiene la clase resaltado");
  }
  ```

- **removeClass()** Elimina una o varias clases de los elementos seleccionados.
  ```javascript
  //Esto elimina la clase resaltado del elemento con id miElemento.
  $("#miElemento").removeClass("resaltado");

  //También se pueden eliminar varias clases a la vez:
  $("#miElemento").removeClass("resaltado bordeado");
  ```

- **toggleClass()** Añade una clase si no está presente y la elimina si ya está aplicada.
  ```javascript
  //Si el elemento no tiene la clase resaltado, se la añade. Si ya la tiene, se la quita.
  $("#miElemento").toggleClass("resaltado");

  //También permite alternar clases dependiendo de un estado booleano:
  $("#miElemento").toggleClass("resaltado", true);  // Fuerza agregar la clase
  $("#miElemento").toggleClass("resaltado", false); // Fuerza eliminar la clase
  ```

----

# 6- Eventos

En jQuery, los **eventos** son mecanismos que permiten a los desarrolladores ejecutar una acción cuando ocurre un evento, como un clic, una pulsación de tecla o un cambio en un formulario. jQuery facilita la asignación de eventos mediante una sintaxis simple.

## Eventos básicos

- **click()**: Se activa cuando se hace clic en un elemento.
  ```javascript
  $('#miElemento').click(function() {
      console.log('¡Has hecho clic!');
  });
  ```

- **dblclick()**: Se activa cuando se hace doble clic en un elemento.
  ```javascript
  $('#miElemento').dblclick(function() {
      console.log('¡Has hecho doble clic!');
  });
  ```

- **hover()**: Se activa cuando el ratón entra o sale de un elemento.
  ```javascript
  $('#miElemento').hover(
      function() {
          $(this).css('background-color', 'yellow');
      }, 
      function() {
          $(this).css('background-color', 'transparent');
      }
  );
  ```

- **focusin()**: Se activa cuando un elemento de formulario obtiene el foco.
  ```javascript
  $('#miInput').focus(function() {
      $(this).css('border', '2px solid blue');
  });
  ```

- **focusout()**: Se activa cuando un elemento de formulario pierde el foco.
  ```javascript
  $('#miInput').blur(function() {
      $(this).css('border', '1px solid gray');
  });
  ```

- **keydown()**: Se activa cuando una tecla es presionada.
  ```javascript
  $('#miInput').keydown(function(event) {
      console.log('Tecla presionada: ' + event.key);
  });
  ```

- **keyup()**: Se activa cuando una tecla es liberada.
  ```javascript
  $('#miInput').keyup(function(event) {
      console.log('Tecla liberada: ' + event.key);
  });
  ```

- **keypress()**: Se activa cuando se presiona una tecla que produce un valor, como las letras o los números.
  ```javascript
  $('#miInput').keypress(function(event) {
      console.log('Tecla presionada con valor: ' + String.fromCharCode(event.which));
  });
  ```

- **submit()**: Se activa cuando se envía un formulario.
  ```javascript
  $('#miFormulario').submit(function(event) {
      event.preventDefault();  // Evita que el formulario se envíe realmente
      console.log('Formulario enviado');
  });
  ```

- **change()**: Se activa cuando el valor de un campo de formulario cambia.
  ```javascript
  $('#miSelect').change(function() {
      console.log('Nuevo valor: ' + $(this).val());
  });
  ```

- **mouseenter()**: Se activa cuando el ratón entra en un elemento.
  ```javascript
  $('#miElemento').mouseenter(function() {
      $(this).css('color', 'green');
  });
  ```

- **mouseleave()**: Se activa cuando el ratón sale de un elemento.
  ```javascript
  $('#miElemento').mouseleave(function() {
      $(this).css('color', 'black');
  });
  ```

- **keydown() / keyup() / keypress()** (Eventos de teclado):
    - **keydown**: Se activa cuando se presiona una tecla.
    - **keyup**: Se activa cuando se suelta una tecla.
    - **keypress**: Se activa cuando una tecla con valor (letra, número) es presionada.

## Métodos de eventos

- **on()**: Permite asignar múltiples tipos de eventos o delegar eventos a elementos dinámicos.
  ```javascript
  $('#miElemento').on('click', function() {
      console.log('¡Clic!');
  });

  // Delegación de dos eventos al contenedor padre pero sólo responderá cuando el evento se dispare en los nodos .elemento. En JS sería como hacer if (event.target && event.target.classList.contains('elemento'))
  $('#miContenedor').on('click dblclick', '.elemento', function() {
      console.log('Elemento clickeado');
  });
  ```

- **off()**: Permite eliminar un evento previamente asignado.
  ```javascript
  $('#miElemento').off('click');  // Elimina el evento de clic
  ```

- **trigger()**: Permite activar un evento de manera programática.
  ```javascript
  $('#miElemento').trigger('click');  // Activa el evento de clic
  ``` 

- **stopPropagation()**: Detiene la propagación de un evento hacia los padres.
  ```javascript
  $('#miElemento').click(function(event) {
      event.stopPropagation();  // Detiene la propagación del evento
      console.log('Clic en miElemento');
  });
  ```

- **preventDefault()**: Previene la acción predeterminada de un evento.
  ```javascript
  $('#miFormulario').submit(function(event) {
      event.preventDefault();  // Previene el envío del formulario
      console.log('Formulario no enviado');
  });
  ```

----

# 7- Modificación del DOM

## Adición

- **.append()**: Añade contenido al final de cada uno de los elementos seleccionados.
    ```javascript
    //Esto agrega un nuevo <p> al final del contenido de #miElemento.
    $('#miElemento').append('<p>Nuevo párrafo al final</p>');
    
    //aunque no es lo común, y por ello no se hablará más de esto, se pueden insertar de esta forma también:
    $('#miElemento').append(function() {
      const nuevoElemento = $('<p></p>').text("Este es un nuevo párrafo creado con jQuery");
      return nuevoElemento;
    });
    ```

- **.prepend()**: Añade contenido al principio de cada uno de los elementos seleccionados.
    ```javascript
    //Esto agrega un nuevo <p> al principio del contenido de #miElemento.
    $('#miElemento').prepend('<p>Nuevo párrafo al principio</p>');
    ```

- **.before()**: Inserta contenido antes de los elementos seleccionados.
    ```javascript
    //Inserta un nuevo párrafo justo antes de #miElemento.
    $('#miElemento').before('<p>Este párrafo está antes de miElemento</p>');
    ```

- **.after()**: Inserta contenido después de los elementos seleccionados.
    ```javascript
    //Inserta un nuevo párrafo justo después de #miElemento.
    $('#miElemento').after('<p>Este párrafo está después de miElemento</p>');
    ```
- **.wrap()**:  Envuelve cada elemento seleccionado con el HTML especificado.
    ```javascript
    //Esto envuelve el elemento #miElemento con un div de clase wrapper.
    $('#miElemento').wrap('<div class="wrapper"></div>');
    ```

- **.wrapAll()**: envuelve todos los elementos seleccionados con un solo contenedor.    
    ```html
    <p>Texto 1</p>
    <p>Texto 2</p>

    <script>
        $("p").wrapAll("<div class='wrapper'></div>");
    </script>

    <!-- Daría como resultado:
    <div class="wrapper">
      <p>Texto 1</p>
      <p>Texto 2</p>
    </div> -->
    ```

## Eliminación

- **.unwrap()**: Elimina el contenedor de un elemento, manteniendo la posición en el DOM de este último.
    ```javascript
    //Esto elimina el contenedor de #miElemento pero mantiene a #miElemento en el DOM.
    $('#miElemento').unwrap();
    ```

- **.remove()**: Elimina completamente los elementos seleccionados del DOM.
    ```javascript
    //Elimina #miElemento del DOM junto con sus hijos y eventos asociados.
    $('#miElemento').remove();
    ```

- **.empty()**: Elimina todos los hijos de los elementos seleccionados, pero mantiene el elemento contenedor.
    ```javascript
    //Esto elimina todo el contenido (hijos) de #miElemento, pero #miElemento sigue existiendo.
    $('#miElemento').empty();
    ```

- **.detach()**: Elimina los elementos seleccionados del DOM, pero los preserva en memoria, por si se quiere volver a insertarlos posteriormente.
    ```javascript
    const elemento = $('#miElemento').detach();
    $('body').append(elemento);  // Vuelve a agregar el elemento en otro lugar
    ```

## Clonado

- **.clone()**: Crea una copia superficial de los elementos seleccionados, incluyendo sus atributos, pero no sus eventos ni datos asociados (a menos que se pase el argumento true).
    ```javascript
    var clon = $('#miElemento').clone();
    $('#miElemento').after(clon);  // Inserta el clon después de #miElemento
    ```

## Reemplazo
- **.replaceWith()**: Sustituye los elementos seleccionados por el contenido especificado.
    ```javascript
    //Reemplaza #miElemento por un nuevo div con el id nuevoElemento.
    $('#miElemento').replaceWith('<div id="nuevoElemento">Nuevo contenido</div>');
    ```
- **.replaceAll()**: Sustituye todos los elementos seleccionados con el contenido especificado. Este contenido puede ser un conjunto de elementos o un solo elemento que se inserta en el lugar de los elementos seleccionados.
    ```javascript
    //Reemplaza todos los elementos .elemento con #nuevoElemento
    $('#nuevoElemento').replaceAll('.elemento');
    ```

----

# 8- Navegación por el DOM

Los siguientes métodos te permiten navegar a través del DOM para seleccionar y manipular elementos de manera eficiente.

## Padres
- `.parent()` Devuelve el **elemento padre** del elemento seleccionado.
  ```javascript
  //Devuelve el **padre directo** de `#miElemento`.
  $('#miElemento').parent();
  ```

- `.parents()` Devuelve todos los **ancestros** del elemento seleccionado, no solo el padre directo, sino todos los elementos que están por encima en la jerarquía.
  ```javascript
  //Devuelve todos los elementos antecesores de `#miElemento`.
  $('#miElemento').parents();
  
  //Filtrado de ancestros
  $('#miElemento').parents('.container');
  ```

- `.parentsUntil(selector)` Encuentra todos los ancestros de un elemento, pero deteniéndose en el selector especificado (sin incluirlo). Es útil cuando se quiere recorrer el DOM sin llegar hasta <html>.
  ```javascript
  //Esto selecciona todos los ancestros de #elemento hasta .contenedor, pero sin incluir .contenedor.
  $("#elemento").parentsUntil(".contenedor");
  ```

## Hijos
- `.children()` Devuelve todos los **hijos** del elemento seleccionado.
  ```javascript
  //Devuelve todos los elementos hijos directos de `#miElemento`.
  $('#miElemento').children();

  //Devuelve todos los hijos directos de #miElemento de tipo p
  $('#miElemento').children('p');
  ```

- `.find()` Devuelve todos los descendientes de un nodo que cumplan una condición.
  ```javascript
  //Devuelve todos los descendientes de #miElemento de tipo p, aunque estén anidados
  $('#miElemento').find('p');
  ```

## Hermanos
- `.siblings()` Devuelve todos los **hermanos** del elemento seleccionado. Son los elementos que comparten el mismo padre.
  ```javascript
  $('#miElemento').siblings();

  //Búqueda sólo de ciertos tipos de elementos hermanos:
  $('#miElemento').siblings('div');
  ```

- `.next()` Devuelve el **hermano siguiente** del elemento seleccionado.
  ```javascript
  $('#miElemento').next();
  ```

- `.prev()` Devuelve el **hermano anterior** del elemento seleccionado.
  ```javascript
  $('#miElemento').prev();
  ```

- `.nextAll()` Devuelve todos los **hermanos siguientes** del elemento seleccionado.
  ```javascript
  $('#miElemento').nextAll();
  ```

- `.prevAll()` Devuelve todos los **hermanos anteriores** del elemento seleccionado.
  ```javascript
  $('#miElemento').prevAll();
  ```
  
- `.nextUntil(selector)`Encuentra todos los elementos hermanos siguientes de un elemento, deteniéndose en el selector especificado.
  ```javascript
  //Esto selecciona los elementos siguientes a #elemento hasta ".limite", sin incluir ".limite".
  $("#elemento").nextUntil(".limite");
  ```

- `.prevUntil(selector)` Encuentra todos los elementos hermanos anteriores de un elemento, deteniéndose en el selector especificado.
  ```javascript
  //Esto selecciona los elementos anteriores a #elemento hasta ".limite", sin incluir ".limite".
  $("#elemento").prevUntil(".limite");
  ```

## Otros
- `.first()` Selecciona el **primer** elemento de un conjunto de elementos.
  ```javascript
  $('#miElemento').parent().children().first();
  ```

- `.last()` Selecciona el **último** elemento de un conjunto de elementos.
  ```javascript
  $('#miElemento').parent().children().last();
  ```

- `.eq()` Devuelve el **elemento en el índice especificado** dentro de un conjunto de elementos.
  ```javascript
  $('#miElemento').siblings().eq(2);
  ```

- `.closest()` Busca el **ancestro más cercano** que coincida con el selector especificado.
  ```javascript
  $('#miElemento').closest('.container');
  ```

-----

# 9- Filtrado

- `.hasClass()` → Verifica si un elemento tiene una clase específica.

- `.filter()` Permite filtrar un conjunto de elementos seleccionados según una condición dada.
  ```javascript
  $('#miElemento').parent().children().filter('.active');
  ```

- `.is()` Comprueba si un elemento cumple con un selector específico.
  ```javascript
  if ($('#miElemento').is(':visible')) {
      console.log('El elemento es visible');
  }
  ```

- `.not()` → Excluye elementos de una selección.

---

# 10- Efectos

Los métodos de **efectos** en jQuery permiten agregar interactividad a los elementos de una página web mediante animaciones, cambios de visibilidad, desplazamientos y otros efectos visuales. Estos métodos son fáciles de usar y pueden ser muy efectivos para mejorar la experiencia del usuario.

## Métodos de Efectos

- **Aparición/Ocultado**. Estos métodos hacen que el elemento desaparezca cambiando su propiedad display. Pueden incluir un parámetro de **duración** opcional (en milisegundos o usando las palabras "slow" y "fast") o una **función de retroceso** para animaciones más suaves. En ese caso, el método cambia su propiedad y, además, su altura y anchura gradualmente.
  - **`.hide()`**: Oculta el elemento seleccionado, estableciendo su `display` a `none`.
    ```javascript
    $('#elemento').hide();
    $("#elemento").hide(2000, ()=>{
        console.log("elemento escondido");
    });
    $("#elemento").hide("slow");
    ```
  - **`.show()`**: Muestra el elemento seleccionado, restableciendo su propiedad `display` a su valor original.
    ```javascript
    $('#elemento').show();
    $("#elemento").show(2000, ()=>{
        console.log("elemento mostrado");
    });
    $("#elemento").show("slow");
    ```
  - `.toggle()` alterna la visibilidad de un elemento. Si está visible, lo oculta; si está oculto, lo muestra.
    ```javascript
    $('#elemento').toggle();
    $("#elemento").toggle(2000, ()=>{
        console.log("elemento mostrado u ocultado");
    });
    $("#elemento").toggle("slow");    
    ```


- **Aparición suave/Desvanecimiento**. Éstos métodos hacen que el elemento desaparezca cambiando la opacidad. Pueden incluir un parámetro de **duración** opcional (en milisegundos o usando las palabras "slow" y "fast") o una **función de retroceso** para animaciones más suaves.
    - **`.fadeIn()`**: Hace que el elemento seleccionado aparezca suavemente al aumentar su opacidad de `0` a `1`. Acepta un parámetro de duración en msg.
      ```javascript
      $('#elemento').fadeIn();
      $("#elemento").fadeIn(2000, ()=>{
          console.log("elemento desvanecido y mostrado");
      });
      $("#elemento").fadeIn("slow");

      ```
    - **`.fadeOut()`**: Hace que el elemento desaparezca suavemente al disminuir su opacidad de `1` a `0`. Acepta un parámetro de duración en msg.
      ```javascript
      $('#elemento').fadeOut();
      $("#elemento").fadeOut(2000, ()=>{
          console.log("elemento desvanecido y oculto");
      });
      $("#elemento").fadeOut("slow");
      ```

    - `.fadeTo()` cambia la opacidad de un elemento a un valor específico (entre `0` y `1`).
      ```javascript
      $('#elemento').fadeTo(1000, 0.5); // 1 segundo para reducir la opacidad a 50%
      ```

    - `.fadeToggle()`combina dos efectos en uno: desvanecer y alternar. Si el elemento está visible, lo desvanecerá (lo ocultará) y, si el elemento está oculto, lo desvanecerá y lo mostrará.
      ```javascript
      $('#elemento').fadeToggle();
      $("#elemento").fadeToggle(2000, ()=>{
          console.log("elemento mostrado u ocultado con fade");
      });
      $("#elemento").fadeToggle("slow");
      ```

- **Deslizado**
  - **`.slideUp()`**: Hace que el elemento se deslice hacia arriba, disminuyendo su altura hasta desaparecer.
    ```javascript
    $('#elemento').slideUp();
    ```
  - **`.slideDown()`**: Hace que el elemento se deslice hacia abajo, aumentando su altura hasta mostrar el contenido completo.
    ```javascript
    $('#elemento').slideDown();
    ```
  - `.slideToggle()` alterna entre los efectos de `slideUp()` y `slideDown()`. Si el elemento está visible, lo desliza hacia arriba (ocultándolo); si está oculto, lo desliza hacia abajo (mostrándolo).
    ```javascript
    $('#elemento').slideToggle();
    ```


- **Animaciones**
  - `.animate()` permite crear animaciones personalizadas mediante la modificación de las propiedades CSS de un elemento a lo largo de un período de tiempo.
    ```javascript
    $('#elemento').animate({
        opacity: 0.5,
        left: '250px'
    }, 1000); // Cambiar opacidad y mover el elemento en 1 segundo
    ```

    Se pueden animar varias propiedades CSS al mismo tiempo (como `width`, `height`, `left`, `top`, `opacity`, etc.) e incluir una función de retroceso que se ejecute cuando termine la animación.

  - `.stop()` Detiene una animación en curso. Esto es útil cuando tienes animaciones consecutivas o quieres evitar que una animación interrumpa otra.
    ```javascript
    $('#elemento').stop();
    ```

  - `.delay()` Retrasa la ejecución de una animación o efecto por un tiempo especificado (en milisegundos o usando las palabras "slow" y "fast").
    ```javascript
    $('#elemento').delay(500).fadeOut(); // Espera 500ms antes de desvanecerse
    ```

- **Secuenciación de funciones**

  - **`.queue()`**: Permite encolar funciones para que se ejecuten en secuencia. Puedes agregar nuevas funciones a la cola de animaciones de un elemento.
    ```javascript
    $('#elemento').queue(function(next) {
        $(this).css('background-color', 'red');
        next(); // Llama a la siguiente función en la cola
    });
    ```

  - **`.dequeue()`**: Ejecuta la siguiente función en la cola.
    ```javascript
    $('#elemento').dequeue(); // Ejecuta la siguiente función en la cola
    ```

## Características importantes de los efectos en jQuery

- **Duración**: Se puede especificar la duración de un efecto en milisegundos o usar palabras clave como `slow` o `fast`.
- **Función de retroceso (callback)**: Se puede ejecutar una función después de que un efecto haya terminado. Esto es útil para encadenar múltiples efectos.
  ```javascript
  $('#elemento').fadeOut(1000, function() {
      console.log('Animación terminada');
  });
  ```

-----

# 11- Asincronía (AJAX)

AJAX (Asynchronous JavaScript and XML) es una técnica utilizada para hacer solicitudes HTTP de manera asíncrona sin necesidad de recargar la página. jQuery proporciona una manera sencilla de realizar solicitudes AJAX usando el método `$.ajax()`, así como otros métodos abreviados. A continuación, se explican dos formas principales de manejar las solicitudes AJAX en jQuery: con **callbacks implícitos** y usando **promesas**.

## 11.1. AJAX con callbacks implícitos

El método `$.ajax()` en jQuery utiliza **callbacks implícitos** para manejar las respuestas de las solicitudes. Los callbacks son funciones que se pasan como argumentos y que se ejecutan cuando se recibe una respuesta del servidor.

### Ejemplo de solicitud AJAX con callbacks implícitos usando la API de Chuck Norris:

```javascript
$(() => {
    const urlRemota = "https://api.chucknorris.io/jokes/random";

    $("#ajax").on ("click", () => {
      $.ajax({
          url: urlRemota,
          method: "GET",
          success: function(data) {
              console.log("Chiste del día:", data.value);
              $("#joke").text(data.value); // Mostrar el chiste en el HTML
          },
          error: function(jqXHR, textStatus, errorThrown) {
              console.log("Error en la solicitud AJAX:", textStatus, errorThrown);
          }
      });
    });
});
```

- `success`: Este callback se ejecuta cuando la solicitud se completa con éxito.
- `error`: Este callback se ejecuta si la solicitud falla.


## 11.2. AJAX con Promesas

jQuery también permite trabajar con promesas al usar el método `$.ajax()`. Las promesas proporcionan una forma más limpia y flexible de manejar las respuestas asíncronas mediante los métodos `.done()`, `.fail()`, y `.always()` para manejar los resultados.

### Ejemplo de solicitud AJAX con promesas usando la API de Chuck Norris:

```javascript
$(() => {
    const urlRemota = "https://api.chucknorris.io/jokes/random";

    $("#ajax").on ("click",() => {
      $.ajax({
          url: urlRemota,
          method: "GET",
      })
      .done((data) => {
          console.log("Chiste del día:", data.value);
          $("#joke").text(data.value); // Mostrar el chiste en el HTML
      })
      .fail((jqXHR, textStatus, errorThrown) => {
          console.log("Error en la solicitud AJAX:", textStatus, errorThrown);
      })
      .always(() => {
          console.log("La solicitud AJAX se ha completado.");
      });
    });
});
```

  - `done()`: Se ejecuta cuando la solicitud se completa con éxito. Recibe los datos de la respuesta como argumento.
  - `fail()`: Se ejecuta si la solicitud falla. Recibe detalles sobre el error.
  - `always()`: Se ejecuta siempre, independientemente de si la solicitud fue exitosa o falló.