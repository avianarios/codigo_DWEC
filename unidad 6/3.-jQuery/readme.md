# jQuery

1. [Introduction to jQuery](#1--introduction-to-jquery)
2. [Installing and using jQuery](#2--installing-and-using-jquery)
3. [First steps with jQuery](#3--first-steps-with-jquery)
4. [Element Selection](#4--element-selection)
5. [Modifying Attributes and Properties](#5--modifying-attributes-and-properties)
6. [Events](#6--events)
7. [DOM Manipulation](#7--dom-modification)
8. [DOM Traversal](#8--dom-navigation)
9. [Filtering](#9--filtering)
10. [Effects](#10--effects)
11. [Asynchrony (AJAX)](#11--asynchrony-ajax)

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


# 2- Installing and using jQuery

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
    
    4. **Install and configure the bundler** to include CSS, prefixing, minimizing and packaging.  In this case parcel will also take the jquery js code in node_modules and include it in our project.
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

# 3- First steps with jQuery
Every jQuery script used to start with the following:
```javascript
$(document).ready((()=>{
  // jquery code 
});
```
which essentially means, ‘execute the code when the DOM is loaded and the document is ready’. Its javascript equivalent would be:
```javascript
document.addEventListener(‘DOMContentLoaded’, ()=>{ 
  // rest of code
});
```

This ensured that the code was only executed when the DOM was loaded, but since defer is used in the header, it is no longer necessary to use it in JavaScript. However, it is still required in jQuery. However, the previous syntax is deprecated and the following is the modern syntax:
```javascript
$(() => {
   // jQuery code here
});
```

 **`$()`**, which is a fundamental jQuery global function. It is the core of jQuery, the entry point to the library and returns a `jQuery` object, which allows you to select and manipulate DOM elements, handle events, perform AJAX requests and execute code when the document is ready.


-----

# 4- Element selection

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


# 5- Modifying attributes and properties

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


# 6- Events

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

# 7- DOM Modification

## Addition

- **.append()**: Adds content at the end of each selected element.
    ```javascript
    // This adds a new <p> at the end of #miElemento content.
    $('#miElemento').append('<p>New paragraph at the end</p>');
    
    // Although uncommon, and therefore not discussed further, elements can also be inserted this way:
    $('#miElemento').append(function() {
      const newElement = $('<p></p>').text("This is a new paragraph created with jQuery");
      return newElement;
    });
    ```

- **.prepend()**: Adds content at the beginning of each selected element.
    ```javascript
    // This adds a new <p> at the beginning of #miElemento content.
    $('#miElemento').prepend('<p>New paragraph at the beginning</p>');
    ```

- **.before()**: Inserts content before the selected elements.
    ```javascript
    // Inserts a new paragraph just before #miElemento.
    $('#miElemento').before('<p>This paragraph is before miElemento</p>');
    ```

- **.after()**: Inserts content after the selected elements.
    ```javascript
    // Inserts a new paragraph just after #miElemento.
    $('#miElemento').after('<p>This paragraph is after miElemento</p>');
    ```

- **.wrap()**: Wraps each selected element with the specified HTML.
    ```javascript
    // This wraps the #miElemento element with a div of class wrapper.
    $('#miElemento').wrap('<div class="wrapper"></div>');
    ```

- **.wrapAll()**: Wraps all selected elements within a single container.
    ```html
    <p>Text 1</p>
    <p>Text 2</p>

    <script>
        $("p").wrapAll("<div class='wrapper'></div>");
    </script>

    <!-- Results in:
    <div class="wrapper">
      <p>Text 1</p>
      <p>Text 2</p>
    </div> -->
    ```

## Removal

- **.unwrap()**: Removes the wrapper of an element, keeping the element itself in the DOM.
    ```javascript
    // This removes the wrapper of #miElemento but keeps #miElemento in the DOM.
    $('#miElemento').unwrap();
    ```

- **.remove()**: Completely removes the selected elements from the DOM.
    ```javascript
    // Removes #miElemento from the DOM along with its children and associated events.
    $('#miElemento').remove();
    ```

- **.empty()**: Removes all children of the selected elements but keeps the container element.
    ```javascript
    // This removes all content (children) of #miElemento, but #miElemento still exists.
    $('#miElemento').empty();
    ```

- **.detach()**: Removes the selected elements from the DOM but keeps them in memory for later reinsertion.
    ```javascript
    const element = $('#miElemento').detach();
    $('body').append(element);  // Reinsert the element elsewhere
    ```

## Cloning

- **.clone()**: Creates a shallow copy of the selected elements, including attributes but not events or associated data (unless true is passed as an argument).
    ```javascript
    var clone = $('#miElemento').clone();
    $('#miElemento').after(clone);  // Inserts the clone after #miElemento
    ```

## Replacement

- **.replaceWith()**: Replaces the selected elements with the specified content.
    ```javascript
    // Replaces #miElemento with a new div with id nuevoElemento.
    $('#miElemento').replaceWith('<div id="nuevoElemento">New content</div>');
    ```

- **.replaceAll()**: Replaces all selected elements with the specified content. This content can be a set of elements or a single element inserted in place of the selected elements.
    ```javascript
    // Replaces all .elemento elements with #nuevoElemento
    $('#nuevoElemento').replaceAll('.elemento');
    ```

----

# 8- DOM Navigation

The following methods allow you to navigate through the DOM to efficiently select and manipulate elements.

## Parents
- `.parent()` Returns the **parent element** of the selected element.
  ```javascript
  //Returns the **direct parent** of `#miElemento`.
  $('#miElemento').parent();
  ```

- `.parents()` Returns all **ancestors** of the selected element, not just the direct parent, but all elements above in the hierarchy.
  ```javascript
  //Returns all ancestor elements of `#miElemento`.
  $('#miElemento').parents();
  
  //Filtering ancestors
  $('#miElemento').parents('.container');
  ```

- `.parentsUntil(selector)` Finds all ancestors of an element, but stops at the specified selector (without including it). Useful when traversing the DOM without reaching <html>.
  ```javascript
  //Selects all ancestors of #elemento up to .contenedor, but does not include .contenedor.
  $("#elemento").parentsUntil(".contenedor");
  ```

## Children
- `.children()` Returns all **children** of the selected element.
  ```javascript
  //Returns all direct child elements of `#miElemento`.
  $('#miElemento').children();

  //Returns all direct children of #miElemento of type p
  $('#miElemento').children('p');
  ```

- `.find()` Returns all descendant nodes of an element that match a condition.
  ```javascript
  //Returns all descendants of #miElemento of type p, even if nested
  $('#miElemento').find('p');
  ```

## Siblings
- `.siblings()` Returns all **siblings** of the selected element. These are elements that share the same parent.
  ```javascript
  $('#miElemento').siblings();

  //Search for only certain types of sibling elements:
  $('#miElemento').siblings('div');
  ```

- `.next()` Returns the **next sibling** of the selected element.
  ```javascript
  $('#miElemento').next();
  ```

- `.prev()` Returns the **previous sibling** of the selected element.
  ```javascript
  $('#miElemento').prev();
  ```

- `.nextAll()` Returns all **next siblings** of the selected element.
  ```javascript
  $('#miElemento').nextAll();
  ```

- `.prevAll()` Returns all **previous siblings** of the selected element.
  ```javascript
  $('#miElemento').prevAll();
  ```
  
- `.nextUntil(selector)` Finds all next sibling elements of an element, stopping at the specified selector.
  ```javascript
  //Selects elements following #elemento up to ".limite", without including ".limite".
  $("#elemento").nextUntil(".limite");
  ```

- `.prevUntil(selector)` Finds all previous sibling elements of an element, stopping at the specified selector.
  ```javascript
  //Selects elements before #elemento up to ".limite", without including ".limite".
  $("#elemento").prevUntil(".limite");
  ```

## Others
- `.first()` Selects the **first** element in a set of elements.
  ```javascript
  $('#miElemento').parent().children().first();
  ```

- `.last()` Selects the **last** element in a set of elements.
  ```javascript
  $('#miElemento').parent().children().last();
  ```

- `.eq()` Returns the **element at the specified index** within a set of elements.
  ```javascript
  $('#miElemento').siblings().eq(2);
  ```

- `.closest()` Finds the **nearest ancestor** that matches the specified selector.
  ```javascript
  $('#miElemento').closest('.container');
  ```

----

# 9- Filtering

- `.hasClass()` → Checks if an element has a specific class.

- `.filter()` Allows filtering a set of selected elements based on a given condition.
  ```javascript
  $('#myElement').parent().children().filter('.active');
  ```

- `.is()` Checks if an element matches a specific selector.
  ```javascript
  if ($('#myElement').is(':visible')) {
      console.log('The element is visible');
  }
  ```

- `.not()` → Excludes elements from a selection.

---

# 10- Effects

jQuery **effects** methods allow adding interactivity to web page elements through animations, visibility changes, transitions, and other visual effects. These methods are easy to use and can significantly enhance user experience.

## Effects Methods

- **Show/Hide**. These methods make elements disappear by changing their `display` property. They can include an optional **duration** parameter (in milliseconds or using the words "slow" and "fast") or a **callback function** for smoother animations. The method modifies the `display` property and gradually adjusts the height and width.
  - **`.hide()`**: Hides the selected element by setting its `display` to `none`.
    ```javascript
    $('#element').hide();
    $("#element").hide(2000, ()=>{
        console.log("element hidden");
    });
    $("#element").hide("slow");
    ```
  - **`.show()`**: Displays the selected element by restoring its `display` property to its original value.
    ```javascript
    $('#element').show();
    $("#element").show(2000, ()=>{
        console.log("element shown");
    });
    $("#element").show("slow");
    ```
  - `.toggle()` toggles the visibility of an element. If it's visible, it hides it; if it's hidden, it shows it.
    ```javascript
    $('#element').toggle();
    $("#element").toggle(2000, ()=>{
        console.log("element toggled");
    });
    $("#element").toggle("slow");    
    ```

- **Fading Effects**. These methods make the element disappear by adjusting opacity. They can include an optional **duration** parameter (in milliseconds or using "slow" and "fast") or a **callback function**.
    - **`.fadeIn()`**: Gradually increases the element's opacity from `0` to `1`.
      ```javascript
      $('#element').fadeIn();
      $("#element").fadeIn(2000, ()=>{
          console.log("element faded in");
      });
      $("#element").fadeIn("slow");
      ```
    - **`.fadeOut()`**: Gradually decreases the element's opacity from `1` to `0`.
      ```javascript
      $('#element').fadeOut();
      $("#element").fadeOut(2000, ()=>{
          console.log("element faded out");
      });
      $("#element").fadeOut("slow");
      ```

    - `.fadeTo()` changes an element's opacity to a specific value (between `0` and `1`).
      ```javascript
      $('#element').fadeTo(1000, 0.5); // 1 second to reduce opacity to 50%
      ```

    - `.fadeToggle()` combines fade and toggle effects. If the element is visible, it fades out; if it's hidden, it fades in.
      ```javascript
      $('#element').fadeToggle();
      $("#element").fadeToggle(2000, ()=>{
          console.log("element toggled with fade");
      });
      $("#element").fadeToggle("slow");
      ```

- **Sliding Effects**
  - **`.slideUp()`**: Slides the element up, reducing its height until it disappears.
    ```javascript
    $('#element').slideUp();
    ```
  - **`.slideDown()`**: Slides the element down, increasing its height until fully visible.
    ```javascript
    $('#element').slideDown();
    ```
  - `.slideToggle()` toggles between `slideUp()` and `slideDown()` effects.
    ```javascript
    $('#element').slideToggle();
    ```

- **Animations**
  - `.animate()` allows creating custom animations by modifying CSS properties over time.
    ```javascript
    $('#element').animate({
        opacity: 0.5,
        left: '250px'
    }, 1000); // Change opacity and move element in 1 second
    ```
    Multiple CSS properties can be animated simultaneously (e.g., `width`, `height`, `left`, `top`, `opacity`, etc.) with an optional callback function executed after the animation ends.

  - `.stop()` Stops an ongoing animation. Useful for preventing overlapping animations.
    ```javascript
    $('#element').stop();
    ```

  - `.delay()` Delays the execution of an animation or effect for a specified time (in milliseconds or using "slow" and "fast").
    ```javascript
    $('#element').delay(500).fadeOut(); // Waits 500ms before fading out
    ```

- **Function Sequencing**
  - **`.queue()`**: Allows queueing functions to be executed in sequence.
    ```javascript
    $('#element').queue(function(next) {
        $(this).css('background-color', 'red');
        next(); // Calls the next function in the queue
    });
    ```

  - **`.dequeue()`**: Executes the next function in the queue.
    ```javascript
    $('#element').dequeue(); // Executes the next function in the queue
    ```

## Important Features of jQuery Effects

- **Duration**: Effects can have a duration specified in milliseconds or using keywords like `slow` or `fast`.
- **Callback Function**: A function can be executed after an effect finishes. This is useful for chaining multiple effects.
  ```javascript
  $('#element').fadeOut(1000, function() {
      console.log('Animation completed');
  });
  ```

----

# 11- Asynchrony (AJAX)

AJAX (Asynchronous JavaScript and XML) is a technique used to make HTTP requests asynchronously without needing to reload the page. jQuery provides an easy way to perform AJAX requests using the `$.ajax()` method, along with other shorthand methods. Below, we explain two main ways to handle AJAX requests in jQuery: with **implicit callbacks** and using **promises**.

## 11.1. AJAX with Implicit Callbacks

The `$.ajax()` method in jQuery uses **implicit callbacks** to handle request responses. Callbacks are functions passed as arguments that execute when a response is received from the server.

### Example of an AJAX request with implicit callbacks using the Chuck Norris API:

```javascript
$(() => {
    const remoteUrl = "https://api.chucknorris.io/jokes/random";

    $("#ajax").click((event) => {
        switch (event.target.id) {
            case "btn-get":
                $.ajax({
                    url: remoteUrl,
                    method: "GET",
                    success: function(data) {
                        console.log("Joke of the day:", data.value);
                        $("#joke").text(data.value); // Display the joke in the HTML
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log("AJAX request error:", textStatus, errorThrown);
                    }
                });
                break;
        }
    });
});
```

- `success`: This callback executes when the request is successfully completed.
- `error`: This callback executes if the request fails.


## 11.2. AJAX with Promises

jQuery also allows working with promises when using the `$.ajax()` method. Promises provide a cleaner and more flexible way to handle asynchronous responses through the `.done()`, `.fail()`, and `.always()` methods.

### Example of an AJAX request with promises using the Chuck Norris API:

```javascript
$(() => {
    const remoteUrl = "https://api.chucknorris.io/jokes/random";

    $("#ajax").click((event) => {
        switch (event.target.id) {
            case "btn-get":
                $.ajax({
                    url: remoteUrl,
                    method: "GET",
                })
                .done((data) => {
                    console.log("Joke of the day:", data.value);
                    $("#joke").text(data.value); // Display the joke in the HTML
                })
                .fail((jqXHR, textStatus, errorThrown) => {
                    console.log("AJAX request error:", textStatus, errorThrown);
                })
                .always(() => {
                    console.log("The AJAX request has completed.");
                });
                break;
        }
    });
});
```

  - `done()`: Executes when the request is successfully completed. It receives the response data as an argument.
  - `fail()`: Executes if the request fails. It receives details about the error.
  - `always()`: Executes always, regardless of whether the request was successful or failed.

