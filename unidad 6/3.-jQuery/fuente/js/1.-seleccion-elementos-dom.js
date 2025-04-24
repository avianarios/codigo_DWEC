import $ from 'jquery';  // Usando ES6 imports

$(()=> {
    // Mostrar elementos seleccionados en consola al hacer clic en el botón
    $('#showSelections').on("click",()=> {
        console.log($('#miEncabezado')); // Seleccionar el encabezado por ID
        console.log($('.miClase')); // Seleccionar los elementos por clase
        console.log($('p')); // Seleccionar todos los párrafos
        console.log($('h1, h2, h3')); // Seleccionar los encabezados h1, h2, h3
        console.log($('#contenedor p')); // Seleccionar los párrafos dentro del contenedor
        console.log($('li:first')); // Seleccionar el primer elemento <li>
        console.log($('li:last'));  // Seleccionar el último elemento <li>
        console.log($('input[type="text"]')); // Seleccionar el input de tipo texto
        console.log($('input[type="checkbox"]')); // Seleccionar el input de tipo checkbox
        console.log($('a[href^="https://"]')); // Seleccionar los enlaces que comienzan con "https://"
        console.log($('div:visible')); // Seleccionar los divs visibles
        console.log($('div:hidden')); // Seleccionar los divs ocultos
        console.log($('tr:odd')); // Seleccionar las filas impares
        console.log($('tr:even')); // Seleccionar las filas pares
        console.log($('li:first-child')); // Seleccionar el primer hijo de tipo <li>
        console.log($('li:nth-child(3)')); // Seleccionar el tercer hijo de tipo <li>
    });
});