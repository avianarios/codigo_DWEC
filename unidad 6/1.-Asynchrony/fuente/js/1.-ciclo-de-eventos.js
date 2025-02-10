// Ejemplo 1: Orden de ejecución de promesas
console.log('--- Ejemplo 1 ---');
console.log('Código síncrono 1');

Promise.resolve().then(() => {
    console.log('Promesa resuelta');
});

console.log('Código síncrono 2');

// Ejemplo 2: Promesas vs setTimeout
setTimeout(() => {
    console.log('\n--- Ejemplo 2 ---');
    console.log('Código síncrono 1');

    setTimeout(() => {
        console.log('setTimeout');
    }, 0);

    Promise.resolve().then(() => {
        console.log('Promesa resuelta');
    });
    console.log('Código síncrono 2');
}, 100); // Un pequeño retraso para separar las salidas