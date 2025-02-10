# jQuery

1. [Introduction to jQuery](#1--introduction-to-jquery)
2. [Using jQuery](#2--using-jquery)
3. [Element Selection](#3--element-selection)
4. [Modifying Attributes and Properties](#4--modifying-attributes-and-properties)
5. [Events](#5--events)
6. DOM Manipulation
7. DOM Traversal
8. Filtering
9. Effects
10. Asynchrony (AJAX)

---

# 1- Introduction to jQuery

jQuery is a JavaScript library created to simplify DOM (Document Object Model) manipulation, event handling, animation, and HTTP requests (AJAX). It was very popular in the early years of web development due to its ability to resolve cross-browser compatibility issues and make common JavaScript tasks easier to implement.

The main features of jQuery are:

- **DOM Selection and Manipulation**: It allows selecting HTML elements with a simple syntax and performing operations on them.
- **Event Handling**: It simplifies assigning event handlers to elements.
- **Provides Methods for Adding Effects and Animations**.
- **Facilitates Asynchronous Requests**: It makes it easy to perform AJAX requests without writing much code, allowing parts of a page to be updated without a full reload.
- **Cross-Browser Compatibility**: jQuery was designed to handle differences in JavaScript implementation across browsers, ensuring consistent behavior across all major browsers of its time.
- **Method Chaining**: This allows for operations like the following:
    ```javascript
    $("#myParagraph")
        .text("This is new text")
        .css("color", "blue")
        .css("font-size", "20px")
        .fadeOut(2000);
    ```

In recent years, the use of jQuery has declined for several reasons:

- **Improvements in Native JavaScript**: Modern JavaScript capabilities (such as DOM manipulation APIs, promises, and `fetch` for AJAX) have significantly improved, making many of jQuery's functionalities unnecessary.
- **Modern Frameworks**: Libraries and frameworks like React, Vue, and Angular have gained popularity, providing more comprehensive and optimized solutions for building web applications.

Although jQuery is still widely used, especially in older projects, many developers choose not to use it in new projects, as most of its functionalities can now be achieved with plain JavaScript or other modern frameworks.

---


# 2- Using jQuery

You can use jQuery by including a link to a CDN (Content Delivery Network) or installing it using node

1. **Use as a remote resource**. For testing jQuery or for small projects, you can use a CDN:
    ````html
      <script src=‘https://code.jquery.com/jquery-3.7.1.min.js’ integrity=‘sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=’ crossorigin=‘anonymous’></script>
    ```

   This is convenient because you don't have to configure anything, just include the link to the CDN.

2. **Use as a local file**. Download the file, store it in a directory and link to it in the header
    ````html
      <script src=‘https://code.jquery.com/jquery-3.7.1.min.js’></script>
    ```
  
3. **Use as a local resource**. Ideal for more complex and advanced projects, where you need to be able to change the configuration.

    Installing it locally via node has a number of advantages:
      - **Upgrading is simpler**, as you only need to do `npm update` to upgrade packages to the highest version without going to the next number (e.g. upgrade from 3.6 to 3.9, but not to 4.0) or `npm update package@latest` or `npx npm-check-updates -u` to upgrade a particular package or all packages, respectively, to the latest version, even if it means a major change. With a CDN you have to connect from time to time, download the file when the version changes and put it in the correct directory.
      - **Version control**: With npm, you can specify the exact version to use in your project, or even set a range of compatible versions to avoid surprises when updating dependencies.
      - **Packaging and optimisation**: When using a packager such as Webpack or Parcel, the packager will take care of optimising the code (minifying it, splitting it into chunks, etc.). This allows you to better manage the size and structure of your project.
      - **No dependency on a CDN**: CDNs can fail and leave the website without the resource.

    With this option, the tailwindcss class file used is the smallest possible, because it does not include the classes that are not used and, in addition, if a packager is used, the code will be minimised. On the downside, you have to **configure the environment** and **compile the tailwindcss code** to generate a file with only the necessary classes.

    The steps to install tailwindcss in node are:

    1. **Install Node.js**.

    2. **Start the project from your directory with `npm init`**.  
      Answer the questions to generate the `package.json` file, which is the configuration file for Node.js.  
      Do not use capital letters, spaces or special characters in the ‘name’ field.

    3. **Install jQuery** for node as a required dependency in production
        ````bash
        npm install jquery
        ```
    
    4. **Install and configure the bundler** to include CSS, prefixing, minimizing and packaging
        ```bash
        npm install --save-dev parcel
        ```

    5. **Configure parcel to use jQuery as a module** in `package.json`
        ```json
        "type": "module",
        ```

    6. **Import jquery at the main js file**. Module bundler will take jquery js from node_modules. 
        ```javascript
        //Using ES6
        import $ from 'jquery';
        ```

    7. **configure the html to import js as a module** by using `type="module"`
        ```html
        <script type="module" src="../js/1.-seleccion-elementos-dom.js" defer></script>
        ```

----

# 3- Element selection

**`$()`** is a fundamental jQuery global function. It is the core of jQuery, the entry point to the library and returns a `jQuery` object, which allows you to select and manipulate DOM elements, handle events, perform AJAX requests and execute code when the document is ready.

Element selection is one of the most important features of jQuery, as it allows you to manipulate the DOM efficiently. jQuery uses CSS-like selectors, which makes it easy to find and manipulate elements on the page.

- Select by ID. To select an element with a specific ID, use `#` followed by the ID name:
    ````javascript
    $(‘#myElement’); // Select the element with id="myElement’
    ```

- **Select by Class**. To select all elements that have a specific class, use `.` followed by the class name:
    ````javascript
    $(‘.myClass’); // Select all elements with class="myClass’
    ```

- **Select by Label**. To select all elements of a specific type, the tag name is used:
    ```javascript
    $(‘p’); // Selecciona todos los párrafos <p>
    ```

- **Seleccionar Múltiples Elementos**. Se pueden seleccionar múltiples elementos separando los selectores con una coma:
  ```javascript
  $(‘h1, h2, h3’); // Selecciona todos los encabezados h1, h2 y h3
  ```

- **Seleccionar un elemento dentro de otro** Para seleccionar elementos dentro de un contenedor específico, se encadenan los selectores:
  ```javascript
  $(‘#contenedor p’); // Selecciona todos los <p> dentro del elemento con id="contenedor’
  ```

- **Seleccionar el primer y último elemento**. Para seleccionar el primer o el último elemento de un conjunto de elementos:
  ```javascript
  $(‘li:first’); // Primer elemento <li>
  $(‘li:last’); // Último elemento <li>
  ```

- **Seleccionar por atributo**
  ```javascript
  $(‘input[type=’text‘]’); // Selecciona todos los inputs de tipo texto
  $(‘a[href^=’https://‘]’); // Selecciona todos los enlaces que comienzan con ‘https://’
  $(‘img[alt$=’logo‘]’); // Selecciona todas las imágenes cuyo atributo alt termina en ‘logo’
  ```

- **Seleccionar elementos visibles e invisibles**
  ```javascript
  $(‘div:visible’); // Selecciona todos los divs visibles
  $(‘div:hidden’); // Selecciona todos los divs ocultos
  ```

- **Seleccionar elementos pares e impares**
  ```javascript
  $(‘tr:odd’); // Filtra las filas impares de una tabla (0-based index)
  $(‘tr:even’); // Filtra las filas pares de una tabla (0-based index)
  ```

- **Seleccionar elementos con filtros adicionales** jQuery permite seleccionar elementos con filtros adicionales, como `:first-child`, `:last-child`, `:nth-child(n)`, etc.
  ```javascript
  $(‘li:first-child’); // Selecciona el primer hijo <li> de su contenedor
  $(‘li:nth-child(3)’); // Selecciona el tercer <li> dentro de su lista
  ```

----


# 4- Modifying attributes and properties

In jQuery it is possible to modify attributes and parameters of HTML elements in a simple way using specific methods.

## Attributes:
- These are the values defined directly in the HTML markup of an element, such as `alt` or `src`.
- They are stored in the DOM as defined in the HTML.
- They do not always reflect the current state of the elements, so if you change a property in JavaScript, it does not necessarily update the attribute in the DOM, and vice versa.
- You interact with them through the `getAttribute()` and `setAttribute()` methods.

## Properties:
- These are values dynamically maintained by the browser that reflect the current state of an element.
- They are not necessarily synchronised with HTML attributes.
- They are defined through element objects in JavaScript and are accessible through the dot operator (`.`).


## Attribute modification

- **attr()** - Allows to get and modify attributes, which are directly defined in the HTML and do not change their state dynamically. They usually have a property associated with the same name and, in this case, modifying a property can modify the attribute.
  ````javascript
  //Get the value of an attribute:
  let src = $(‘img’).attr(‘src’); // Get the ‘src’ attribute of the first image.
  console.log(src);

  //Modify the value of an attribute:
  $(‘img’).attr(‘src’, ‘new-image.jpg’); // Changes the ‘src’ attribute of all images.

  //Modify several attributes at once:
  $(‘a’).attr({
    href: ‘https://www.ejemplo.com’,
    title: ‘Example link’
  });
  ```

- **removeAttr()** - Remove Attributes
  ```javascript
  $(‘input’).removeAttr(‘disabled’); // Remove ‘disabled’ attribute from all inputs
  ```


- **.css()** allows you to get or set CSS styling properties on DOM elements. It works in several ways:
  1. **Get the value of a CSS property**: When `.css()` is used with an argument of just a CSS property name, it returns the value of that property in the first element of the selection (if it exists).
      ```javascript
      // Example of getting a property:
      let colour = $(‘#myElement’).css(‘colour’);
      console.log(colour); // Display the value of the ‘colour’ property (e.g. ‘rgb(0, 0, 0, 0)’ if black).
      ```
  
  2. **Set a CSS property**: When using `.css()` with two arguments (the property name and the value), set that CSS property on the selected elements.
      ```javascript
      // Example of setting a property:
      $(‘#myElement’).css(‘background-color’, ‘red’);
      ```

  3. **Set multiple CSS properties**: You can also pass an object with multiple properties and values to set multiple CSS properties at once.
      ````javascript
      //Example of setting multiple properties:
      $(‘#myElement’).css({
          ‘background-color’: ‘blue’,
          ‘colour’: ‘white’,
          ‘font-size’: ‘16px’
      });
      ```

  It is important to remember that if the CSS property value requires a unit of measurement (such as px, %, em, etc.), you must specify it when setting the value.
    ````javascript
    // Example with unit of measure:
    $(‘#myElement’).css(‘width’, ‘100px’);
    ```

  `.css()` allows you to get or modify any css property, but there are also a number of methods that modify or get specific css properties such as `.width()`, `.height()`, `.innerWidth()`, `.innerHeight()`, and so on.

## Property modification

- **prop()**. Allows you to get or set DOM element properties, which are values managed by JavaScript that reflect the current state of the element, such as checked, selected, disabled, etc. In some cases, when modifying a property of an element, via `prop()`, that modification may also be reflected in the corresponding HTML attribute. This is especially the case when the value of the property is directly linked to the attribute
  ```javascript
  //Get property:
  let esChecked = $(‘input[type=’checkbox‘]’).prop(‘checked’); // Return true or false.
  console.log(esChecked);

  //Modify a property:
  $(‘input[type=’checkbox‘]’).prop(‘checked’, true); // Check all checkboxes.

  //Create a property:
  $(‘#message’).prop(‘myProperty’, ‘HiddenText’);
  ```

- **.propertyName**. Allows to read or give value to a custom property
    ````javascript
    /// Element selection returns a jQuery object. When accessing custom properties, you must specify the index of the object to work with. The rest of the methods do it themselves
    $(‘#disabledfield’)[0].myProperty=‘hello’;
    console.log ($(‘#fieldDisabled’)[0].myProperty);
    ```

- **removeProp()** Removes a property from an element (NOT an attribute, but a JavaScript property). Should NOT be used on native properties, only custom ones.
  ````javascript
  $(‘input’).prop(‘disabled’, true); // Disable input
  $(‘input’).removeProp(‘disabled’); // Removes the property, but the attribute is still there. An inexperienced programmer would expect the field to be ‘enabled’ again, but not because the attribute is not removed.
  $(‘input’).prop(‘disabled’, false); // Enable input

  $(‘#message’).removeProp(‘myProperty’); // It will work fine.
  ```
  
- **val()** - Get and Modify Form Values
  ````javascript
  //Get the value of an input field:
  let value = $(‘#myInput’).val(); // Gets the value of the input with id ‘myInput’.
  console.log(value);

  //Modify the value of an input field:
  $(‘#miInput’).val(‘Nuevo valor’); // Establece un nuevo valor en el input
  ```

- **data()** - Manejo de Atributos data-*
  ```javascript
  //Obtener el valor de un atributo data-*:
  let info = $(‘#elemento’).data(‘info’); // Supongamos que el elemento tiene data-info="123’
  console.log(info); // 123

  //Modificar el valor de un atributo data-*:
  $(‘#elemento’).data(‘info’, 456); // Cambia el valor de data-info a 456
  ```

- **text()** - Obtiene o establece el contenido de texto de los elementos seleccionados. A diferencia de `.html()`, no interpreta etiquetas HTML, solo manipula texto plano.
  ```javascript
  $(‘#miElemento’).text(‘Nuevo texto’); // Cambia solo el texto visible
  ```

- **html()** - Obtiene o establece el contenido HTML de los elementos seleccionados. A diferencia de `.text()`, SÍ interpreta etiquetas HTML.
  ```javascript
  $(‘#miElemento’).html(‘<b>Texto con negritas</b>’); // Modifica el contenido HTML
  ```

- **width()** - Obtener o modificar el Ancho de un elemento
  ````javascript
  //Get the width of an element:
  let width = $(‘#myElement’).width();
  console.log(width); // Display the width of the element.

  //Modify the width of an element:
  $(‘#myElement’).width(300); // Set the width of the element to 300px.
  ```

- **height()** - Get or modify the Height of an element.
  ```javascript
  //Get the height of an element:
  let height = $(‘#myElement’).height();
  console.log(height); // Display the height of the element.

  //Modify the height of an element:
  $(‘#myElement’).height(200); // Set the element's height to 200px.
  ```

- **position()** - Get the position of an element relative to its nearest container with relative position.
  ````javascript
  Get the position of an element:
  let position = $(‘#myElement’).position();
  console.log(position); // Return an object with the properties ‘top’ and ‘left’.
  ```

## Class modification 
- **addClass()** Adds one or more classes to the selected elements.
    ````javascript
    // This will add the highlighted class to the element with id myElement.
    $(‘#myElement’).addClass(‘highlighted’);

    //Multiple space separated classes can also be added:
    $(‘#myElement’).addClass(‘bordered highlight’);
    ```

- **hasClass()** Checks if an element has a specific class and returns true or false.
  ```javascript
  if ($(‘#myElement’).hasClass(‘highlighted’)) {
      console.log(‘Element has class highlighted’);
  }
  ```

- **removeClass()** Removes one or more classes from the selected element(s).
  ````javascript
  // This removes the highlighted class from the element with id myElement.
  $(‘#myElement’).removeClass(‘highlighted’);

  //Multiple classes can also be removed at once:
  $(‘#myElement’).removeClass(‘highlighted bordered’);
  ```

- **toggleClass()** Adds a class if it is not present and removes it if it is already applied.
  ````javascript
  //If the element does not have the highlighted class, it is added. If it does, it is removed.
  $(‘#myElement’).toggleClass(‘highlighted’);

  // Also allows toggle classes depending on a boolean state:
  $(‘#myElement’).toggleClass(‘highlighted’, true); // Forces adding the class.
  $(‘#myElement’).toggleClass(‘highlighted’, false); // Forces removal of the class
  ```

  -----


# 5- Events

In jQuery, **events** are mechanisms that allow developers to perform an action when an event occurs, such as a click, a keystroke, or a change to a form. jQuery makes it easy to assign events using a simple syntax.

## Basic events

- **click()**: Triggers when an element is clicked.
  ````javascript
  $(‘#myElement’).click(function() {
      console.log(‘You clicked!’);
  });
  ```

- **dblclick()**: Triggers when an element is double-clicked.
  ````javascript
  $(‘#myElement’).dblclick(function() {
      console.log(‘You double-clicked!’);
  });
  ```

- **hover()**: Triggers when the mouse enters or exits an element.
  ````javascript
  $(‘#myElement’).hover(
      function() {
          $(this).css(‘background-color’, ‘yellow’);
      }, 
      function() {
          $(this).css(‘background-color’, ‘transparent’);
      }
  );
  ```

- **focusin()**: Triggers when a form element gets focus.
  ````javascript
  $(‘#myInput’).focus(function() {
      $(this).css(‘border’, ‘2px solid blue’);
  });
  ```

- **focusout()**: Triggers when a form element loses focus.
  ````javascript
  $(‘#myInput’).blur(function() {
      $(this).css(‘border’, ‘1px solid gray’);
  });
  ```

- **keydown()**: Triggers when a key is pressed.
  ````javascript
  $(‘#myInput’).keydown(function(event) {
      console.log('Key pressed: ’ + event.key);
  });
  ```

- **keyup()**: Triggers when a key is released.
  ````javascript
  $(‘#myInput’).keyup(function(event) {
      console.log('Key released: ’ + event.key);
  });
  ```

- **keypress()**: Triggers when a key is pressed that produces a value, such as letters or numbers.
  ````javascript
  $(‘#myInput’).keypress(function(event) {
      console.log('Key pressed with value: ’ + String.fromCharCode(event.which));
  });
  ```

- **submit()**: Triggered when a form is submitted.
  ````javascript
  $(‘#myForm’).submit(function(event) {
      event.preventDefault(); // Prevents the form from actually being submitted
      console.log(‘Form submitted’);
  });
  ```

- **change()**: Triggers when the value of a form field changes.
  ````javascript
  $(‘#mySelect’).change(function() {
      console.log('New value: ’ + $(this).val());
  });
  ```

- **mouseenter()**: Triggers when the mouse enters an element.
  ````javascript
  $(‘#myElement’).mouseenter(function() {
      $(this).css(‘colour’, ‘green’);
  });
  ```

- **mouseleave()**: Triggers when the mouse leaves an element.
  ```javascript
  $(‘#myElement’).mouseleave(function() {
      $(this).css(‘colour’, ‘black’);
  });
  ```

- **keydown() / keyup() / keypress()** (Keyboard events):
    - **keydown**: Triggered when a key is pressed.
    - keyup**: Triggered when a key is released.
    - keypress**: Triggered when a key with value (letter, number) is pressed.

## Event methods

- on()**: Allows multiple event types to be assigned or events to be delegated to dynamic elements.
  ````javascript
  $(‘#myElement’).on(‘click’, function() {
      console.log(‘Click!’);
  });

  // Delegation of two events to the parent container but it will only respond when the event is fired on the .element nodes. In JS it would be like doing if (event.target && event.target.classList.contains(‘element’))
  $(‘#myContainer’).on(‘click dblclick’, ‘.element’, function() {
      console.log(‘Element clicked’);
  });
  ```

- **off()**: Allows to remove a previously assigned event.
  ```javascript
  $(‘#myElement’).off(‘click’); // Deletes the click event.
  ```

- **trigger()**: Allows to trigger an event programmatically.
  ````javascript
  $(‘#myElement’).trigger(‘click’); // Triggers the click event
  ``` 

- **stopPropagation()**: Stops propagation of an event to the parent.
  ````javascript
  $(‘#myElement’).click(function(event) {
      event.stopPropagation(); // Stops propagation of event
      console.log(‘Click on myElement’);
  });
  ```

- **preventDefault()**: Prevents the default action of an event.
  ````javascript
  $(‘#myForm’).submit(function(event) {
      event.preventDefault(); // Prevent form submission
      console.log(‘Form not submitted’);
  });
  ```

  ----

