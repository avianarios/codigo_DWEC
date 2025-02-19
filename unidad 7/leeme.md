 # Índice

1. Entornos de trabajo (Frameworks)
    1. ¿Por qué se necesita un entorno de trabajo?
    2. Entornos de trabajo populares
2. Introducción a vue
    1. Características
    2. Ventajas
3. Instalación y uso de vue
    1. Uso como recurso remoto (CDN)
        1. Compilación global
        2. Compilación de módulos
    2. Uso como recurso local (node)
4. Estilo de codificación
    1. Options API
    2. Compositions API
5. Estructura de una aplicación Vue
    1. Inicialización de un proyecto Vue
    2. Organización del código
    3. Jerarquía y ensamblaje de componentes
        1. `App.vue` El contenedor principal
        2. Componentes padres e hijos
        3. Componentes dináimcos
6. Componentes de un solo archivo (SFC, single-file component)
    1. Estructura de un componente
        1. script
        2. template
        3. style
    2. Convenciones sobre los componentes
7. Directivas
    1. Vinculación entre atributos y propiedades (v-bind)
    2. Renderización condicional (v-if, v-else y v-else-if)
    3. Renderización dinámica de listas (v-for)
    4. Gestión de eventos (v-on)
    5. Creación de vínculos bidireccionales (v-model)
    6. Mostrar u ocultar dinámicamente un elemento (v-show)
    7. Establecer contenido de un elemento (v-text y v-html)
8. Reactividad
9. Interacción entre componentes
    1. Inserción de contenido
    2. Comunicación
        1. Propiedades y eventos
        2. v-model y eventos
        3. defineModel
10. Propiedades computadas
  
-----

# 1. Entornos de trabajo (frameworks)

Los entornos de trabajo en el lado del cliente (frameworks frontend) son herramientas y bibliotecas que facilitan el desarrollo de la parte de una aplicación web que interactúa directamente con el usuario. Éstos proporcionan estructuras y componentes reutilizables que ayudan a los desarrolladores a crear interfaces de usuario dinámicas y atractivas de manera más eficiente.


## 1.1. ¿Por qué se necesita un entorno de trabajo (Framework)?

En el desarrollo web moderno, construir aplicaciones complejas y dinámicas desde cero utilizando solo JavaScript, HTML y CSS puede volverse complicado y repetitivo. Los frameworks y librerías frontend surgen para simplificar este proceso, ofreciendo herramientas y estructuras que permiten a los desarrolladores trabajar de manera más eficiente. Aquí las razones principales por las que son necesarios:

1. **Productividad:**  
   Los frameworks y librerías proporcionan componentes y funcionalidades preconstruidas, lo que reduce la cantidad de código que los desarrolladores deben escribir manualmente. Esto acelera el desarrollo y permite enfocarse en la lógica del negocio en lugar de reinventar la rueda.

2. **Organización del código:**  
   Proporcionan una estructura clara y bien definida para organizar el código, lo que facilita el mantenimiento y la escalabilidad de las aplicaciones, especialmente en proyectos grandes.

3. **Manejo del DOM:**  
   Manipular el DOM directamente con JavaScript puro puede ser tedioso y propenso a errores. Los frameworks y librerías abstraen esta complejidad, ofreciendo formas más sencillas y eficientes de actualizar la interfaz de usuario.

4. **Reactividad y estado:**  
   Muchos frameworks modernos incluyen sistemas de gestión de estado y reactividad, que permiten que la interfaz de usuario se actualice automáticamente cuando cambian los datos. Esto simplifica la creación de aplicaciones dinámicas e interactivas.

5. **Compatibilidad y estándares:**  
   Los frameworks suelen manejar las diferencias entre navegadores y aseguran que el código funcione de manera consistente en todos ellos, lo que ahorra tiempo en pruebas y ajustes.

6. **Comunidad y ecosistema:**  
   Los frameworks populares cuentan con grandes comunidades y ecosistemas de herramientas, plugins y recursos que facilitan el desarrollo. Esto incluye soluciones para enrutamiento, pruebas, optimización y más.

7. **Rendimiento optimizado:**  
   Muchos frameworks utilizan técnicas avanzadas, como el DOM virtual o la compilación en tiempo de construcción, para mejorar el rendimiento de las aplicaciones.


En resumen, los frameworks y librerías frontend son herramientas esenciales para agilizar el desarrollo, mejorar la calidad del código y crear aplicaciones modernas, dinámicas y eficientes. Su uso no es obligatorio, pero en la mayoría de los casos, son una gran ayuda para enfrentar los desafíos del desarrollo web actual.


## 1.2. Entornos de trabajo populares

 Algunos de los frameworks más populares son:

## 1. **React**
   - **Desarrollado por:** Facebook.
   - **Características:** Es una librería de JavaScript para construir interfaces de usuario basadas en componentes. Utiliza un enfoque declarativo y un DOM virtual para optimizar el rendimiento.
   - **Popularidad:** Ampliamente adoptado en la industria, con una gran comunidad y ecosistema de herramientas (como Next.js para SSR y Gatsby para sitios estáticos).
   - **Uso:** Ideal para aplicaciones dinámicas y de una sola página (SPA).

## 2. **Angular**
   - **Desarrollado por:** Google.
   - **Características:** Es un framework completo basado en TypeScript que incluye herramientas para manejar el enrutamiento, gestión de estado, y pruebas integradas. Sigue el patrón MVC (Modelo-Vista-Controlador).
   - **Popularidad:** Muy utilizado en aplicaciones empresariales y proyectos grandes debido a su estructura robusta.
   - **Uso:** Perfecto para aplicaciones complejas y de gran escala.

## 3. **Vue.js**
   - **Desarrollado por:** Evan You (ex-desarrollador de Google).
   - **Características:** Es un framework progresivo que puede ser adoptado gradualmente. Combina lo mejor de React y Angular, ofreciendo un sistema reactivo y un enfoque basado en componentes.
   - **Popularidad:** Ha ganado mucha popularidad por su facilidad de uso y flexibilidad.
   - **Uso:** Ideal para proyectos pequeños y medianos, pero también escalable para aplicaciones más grandes.

## 4. **Svelte**
   - **Desarrollado por:** Rich Harris.
   - **Características:** A diferencia de otros frameworks, Svelte traslada el trabajo del navegador al momento de compilación, generando código JavaScript altamente optimizado. No utiliza un DOM virtual.
   - **Popularidad:** Está ganando popularidad rápidamente debido a su simplicidad y rendimiento.
   - **Uso:** Perfecto para aplicaciones que requieren alto rendimiento y un enfoque minimalista.

## 5. **Ember.js**
   - **Desarrollado por:** Yehuda Katz y otros colaboradores.
   - **Características:** Es un framework opinado que sigue convenciones sobre configuraciones. Ofrece una estructura sólida y herramientas integradas para el desarrollo de aplicaciones ambiciosas.
   - **Popularidad:** Menos popular que React o Angular, pero aún muy utilizado en ciertos nichos y proyectos grandes.
   - **Uso:** Ideal para aplicaciones complejas y de larga duración.

## 6. **Preact**
   - **Desarrollado por:** Jason Miller.
   - **Características:** Es una alternativa ligera a React, con una API compatible pero mucho más pequeña en tamaño (alrededor de 3KB). Es ideal para proyectos donde el rendimiento y el tamaño son críticos.
   - **Popularidad:** Popular en proyectos que necesitan optimización extrema.
   - **Uso:** Perfecto para aplicaciones que requieren carga rápida y eficiencia.

## 7. **Solid.js**
   - **Desarrollado por:** Ryan Carniato.
   - **Características:** Es un framework reactivo que se enfoca en la simplicidad y el rendimiento. Utiliza un sistema de reactividad granular para actualizar solo las partes necesarias de la interfaz.
   - **Popularidad:** Aunque relativamente nuevo, está ganando atención por su enfoque innovador.
   - **Uso:** Ideal para aplicaciones que necesitan alta reactividad y rendimiento.

Cada uno de estos entornos de trabajo tiene sus propias fortalezas y casos de uso específicos. La elección del framework o librería adecuada dependerá de las necesidades del proyecto, la experiencia del equipo y los objetivos a largo plazo.

------

# 2. Introducción a vue

Vue.js es un entorno de trabajo (framework) progresivo de JavaScript diseñado para construir interfaces de usuario interactivas y dinámicas. Fue creado por Evan You y se lanzó por primera vez en 2014. Vue se destaca por su simplicidad y flexibilidad, lo que lo hace accesible tanto para desarrolladores principiantes como experimentados.

## 2.1. Características

1. **Componentes reutilizables**:
   - Vue se basa en un sistema de componentes que permite a los desarrolladores crear elementos de interfaz de usuario reutilizables. Cada componente encapsula su propio HTML, CSS y JavaScript, facilitando la organización y el mantenimiento del código.

2. **Reactividad**:
   - Vue utiliza un sistema reactivo que permite que los datos y la interfaz de usuario estén sincronizados automáticamente. Cuando los datos cambian, la vista se actualiza de manera eficiente para reflejar esos cambios.

3. **Directivas**:
   - Vue proporciona directivas (atributos especiales en el HTML) que permiten manipular el DOM de manera sencilla. Por ejemplo, `v-bind` se utiliza para enlazar atributos y `v-if` para renderizar elementos condicionalmente.

4. **Transiciones y animaciones**:
   - Vue facilita la implementación de transiciones y animaciones en las aplicaciones, proporcionando una API integrada para manejar efectos visuales de manera sencilla.

5. **Enrutamiento**:
   - Con Vue Router, los desarrolladores pueden gestionar la navegación entre diferentes vistas de una aplicación de manera eficiente, permitiendo la creación de aplicaciones de una sola página (SPA) con rutas definidas.

6. **Ecosistema y comunidad**:
   - Vue tiene un ecosistema en crecimiento con herramientas como Vue CLI para la configuración de proyectos, Vuex para la gestión del estado de la aplicación y una comunidad activa que contribuye con plugins y bibliotecas.

## 2.2. Ventajas

- **Curva de aprendizaje suave**: Vue es fácil de aprender y usar, especialmente para aquellos que ya están familiarizados con HTML, CSS y JavaScript.
- **Flexibilidad**: Puede ser utilizado tanto para proyectos pequeños como para aplicaciones grandes y complejas.
- **Documentación clara**: Vue cuenta con una documentación extensa y bien organizada, lo que facilita el aprendizaje y la resolución de problemas.

Vue.js es una excelente opción para desarrolladores que buscan una solución ligera y flexible para construir aplicaciones web modernas. Su enfoque progresivo permite a los desarrolladores adoptarlo de manera incremental, integrándolo en proyectos existentes o utilizándolo como la base para nuevas aplicaciones.

---

# 3. Instalación y uso de vue

Se puede usar jQuery mediante la inclusión de un enlace a un CDN (Content Delivery Network) o instalándolo mediante node

## 3.1. Uso como recurso remoto (CDN)
Se puede usar un CDN, pero no se podrán usar la sintaxis de componentes de fichero único (SFC)

    ```html
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    ```

### Ventajas
- Es **rápido** empezar un proyecto Vue así, porque no es necesario usar Node.js
- Es **fácil**, ideal para proyectos pequeños, prototipos o para aprender Vue rápidamente.


### Inconvenientes
- **No se puede usar componentes o Single-File Components (SFC)** (archivos .vue)
- No se puede usar herramientas modernas como carga en caliente (hot-reloading), optimizaciones de construcción, o división de código.
- Es más **difícil organizar y escalar el código en proyectos grandes**.
- **No está optimizado para producción**, ya que no se pueden aplicar técnicas como minificación, sacudida de árbol (tree-shaking), o compresión.

Con esta forma de incorporar Vue al proyecto, se pueden utilizar dos versiones de vue: Compilación global (Global Build, que expone Vue como una variable global) o Compilación de módulos ES (ES Module Build, que usa módulos ES).


### 3.1.1. Compilación global o versión global ("global build")

Esto implica:
    - Vue se carga como una variable global del objeto `window`, por lo que se puede usar desde el código JavaScript, sin importarlo.
    - Vue ya está preempaquetado, no es necesario empaquetadores para compilar.

Esta versión es ideal para proyectos pequeños, pero no escala bien en proyectos grandes o complejos

Ejemplo:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue desde CDN</title>
  <!-- Incluir Vue desde un CDN -->
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
  <article id="app">
    {{ message }}
  </article>

  <script>
    // Usar Vue desde el objeto global "window"
    const { createApp } = Vue;

    // Crear una aplicación Vue
    createApp({
      data() {
        return {
          message: '¡Hola, Vue!'
        };
      }
    }).mount('#app'); // Montar la aplicación en el article con id="app"
  </script>
</body>
</html>
```

### 3.1.2. Compilación de módulos ES o versión de módulos ES (ES module build)
Es una forma moderna de usar Vue.js directamente en el navegador, pero sin depender de la variable global (window.Vue). En su lugar, se utiliza la sintaxis de módulos ES (import/export) para cargar Vue.

Hay que usar `type="module"` en el HTML al importarlo 

Ejemplo:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue con ES Module Build</title>
</head>
<body>
  <article id="app">
    {{ message }}
  </article>

  <!-- Usar Vue como un módulo ES -->
  <script type="module">
    // Importar Vue desde un CDN
    import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

    // Crear una aplicación Vue
    createApp({
      data() {
        return {
          message: '¡Hola, Vue!'
        };
      }
    }).mount('#app'); // Montar la aplicación en el article con id="app"
  </script>
</body>
</html>
```

En este caso, Vue se importa explícitamente usando la sintaxis de módulos ES (import). Esto evita contaminar el espacio global (window) y reduce el riesgo de conflictos con otras bibliotecas.

El uso de módulos ES facilita la migración a un entorno de desarrollo con herramientas como Vite o Webpack en el futuro y el uso de modularidad.

## 2. Uso como recurso local (node)

### Ventajas
- Se puede usar archivos .vue (Single-File Components (SFC)), que encapsulan la plantilla, lógica y estilos en un solo archivo.
- Se pueden usar herramientas modernas como 
    - Recarga en caliente (Hot-reloading): Los cambios en el código se reflejan automáticamente en el navegador sin necesidad de recargar la página.
    - Optimizaciones: Minificación, sacudida de árbol (tree-shaking), y división de código para mejorar el rendimiento.
    - Soporte para TypeScript, SCSS, etc.
- Escalabilidad mucho mayor.
- Rendimiento mayor en producción.
- Se pueden integrar otras herramientas y bibliotecas.

### Inconvenientes
- Hay que instalar y configurar node. Se tarda un poco más en empezar.

### Pasos para instalarlo

1. Instalar node, como mínimo la 18.3

2. Crear el armazón de vue
    ```bash
    npm create vue@latest
    ```

- ¿Qué diferencia hay entre **create** e **install --save-dev**? 
    - **npm install** se usa para instalar paquetes o dependencias en un proyecto ya existente. Por ejemplo, si ya tienes un proyecto y quieres añadir Vue, React, o cualquier otra librería, usas npm install.
    - **npm create** algunos paquetes incluyen una herramienta de andamiaje (no es exclusivo de vue). `npm create vue@latest` lanza dicha herramienta, llamada `create-vue`, lo que preguntará sobre el nombre del proyecto y la instalación, o no, de herramientas opcionales, creará una estructura inicial de archivos y carpetas y configurará dependencias básicas.

- ¿Qué diferencia hay entre vue y vue@latest?
    - **vue** instala la última versión estable de vue.
    - **vue@latest** instala la última versión de vue, estable o no.

3. Instalar dependencias del proyecto. El directorio con el proyecto se habrá creado en el anterior paso
    ```bash
    cd nombre-proyecto
    npm install
    ```
    
4. Ejecutar el proyecto
- Para desarollo
    ```bash
    npm run dev
    ```

- Para producción
    ```bash
    npm run build
    ```

| Característica      | CDN                            | Node.js con npm               |
|--------------------|--------------------------------|-------------------------------|
| **Instalación**   | No requiere instalación, solo enlazar el script en el HTML | Requiere instalación con `npm install vue` |
| **Configuración**  | No necesita configuración adicional | Puede requerir configuración con herramientas como Vite o Webpack |
| **Tamaño**        | Puede ser más ligero si se usa en producción con Vue en modo UMD | Puede incluir dependencias adicionales que aumentan el tamaño |
| **Desarrollo**    | Ideal para pruebas rápidas y proyectos pequeños | Mejor para proyectos grandes con herramientas modernas |
| **Módulos**       | Soporta módulos ES6 y también tiene una versión global | Permite el uso de módulos de ES6 y TypeScript |
| **Ecosistema**    | Limitado a lo que ofrece la versión UMD | Compatible con todo el ecosistema de Vue, como Vue Router y Vuex |
| **Rendimiento en producción**   | No optimizado | Optimizado para producción |
| **Soporte de SSR**| No es compatible | Compatible con SSR (Server-Side Rendering) |


----

# 4. Estilo de codificación

En Vue.js, hay dos estilos principales para definir la lógica de los componentes: la **Options API** y la **Composition API**. Ambas permiten lograr los mismos resultados, pero difieren en su enfoque y estilo de escritura. Aquí se van a ver brevemente las dos con el objetivo de reconocer las aplicaciones Vue más antiguas, pero de aquí en adelante **se usara exclusivamente Compositions API**.

## 4.1. Options API

La Options API es el estilo tradicional y original de Vue.js para definir componentes. En este enfoque, la lógica del componente se organiza en diferentes "opciones" o propiedades dentro de un objeto, como data, methods, computed, watch, props, lifecycle hooks, etc.

```vue
<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>
```

Características:
- **Organización por tipo de lógica**: La lógica se separa en diferentes secciones (data, methods, computed, etc.), lo que puede ser intuitivo para proyectos pequeños o desarrolladores nuevos en Vue.
- **Fácil de entender**: Al estar todo organizado en opciones predefinidas, es más fácil seguir el flujo del código.
- **Ideal para componentes simples**: Funciona bien en componentes pequeños o medianos donde la lógica no es demasiado compleja.


## 4.2. Composition API

La Composition API es un enfoque **más moderno y flexible introducido en Vue 3**. En lugar de organizar la lógica por opciones, la Composition API permite agrupar la lógica por funcionalidad, lo que facilita la reutilización y organización del código en componentes más grandes y complejos. **Para usarla con componentes vue es necesario usar node y el atributo `setup` en la etiqueta `script`**.

```vue
<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);

function increment() {
  count.value++;
}
</script>
```

Características:
- **Organización por funcionalidad**: La lógica relacionada se agrupa en funciones o bloques, lo que facilita la reutilización y el mantenimiento.
- **Mejor para componentes complejos**: Es ideal para componentes grandes o aplicaciones con lógica compleja, ya que permite una mejor organización del código.
- **Uso de funciones reactivas**: Se basa en funciones como ref, reactive, computed, y watch para manejar el estado y la reactividad.
- **Reutilización de lógica**: Permite extraer y reutilizar lógica en "composables" (funciones personalizadas), lo que es especialmente útil en proyectos grandes.


## ¿Cuándo usar cada una?

- **Options API**: Es una buena opción para proyectos pequeños, componentes simples o si estás empezando con Vue.js, ya que su estructura es más intuitiva y fácil de entender.
- **Composition API**: Es recomendable para proyectos grandes, componentes complejos o cuando necesitas reutilizar lógica entre varios componentes. También es la opción preferida si estás usando Vue 3 y quieres aprovechar al máximo sus características modernas.


| Característica       | **Composition API (`setup`)** | **Options API (`data`, `methods`, etc.)** |
|---------------------|--------------------------|------------------------------|
| Código más corto y directo | Sí | No |
| Estructura organizada por lógica | Sí | No (separado por opciones) |
| Curva de aprendizaje | Más difícil al inicio | Más fácil para principiantes |
| Reutilización de lógica | Mejor con `composables` | Se requiere `mixins` (más limitado) |
| Soporte en Vue 3 | Recomendado | Todavía funciona, pero no recomendado a futuro |


-----

# 5. Estructura de una aplicación Vue

Antes de profundizar en los componentes de un solo archivo (SFC), es importante entender la estructura de una aplicación Vue y cómo sus componentes se organizan y ensamblan para formar la interfaz final.

## 5.1. Inicialización de un proyecto Vue

Como se ha comentado anteriormente, la forma recomendada de comenzar un proyecto Vue es como un módulo de node. Se puede crear toda la estructura de directorios y ficheros de configuración a mano  o se puede usar una herramienta de andamiaje como **vite@latest** o **vue@latest** (recomendado) que generan una estructura de carpetas y archivos predefinida. 

- **Creación del proyecto**
  ```sh
  <!-- con vite -->
  npm create vite@latest mi-proyecto --template vue
  cd mi-proyecto
  npm install
  npm run dev
  ```

  ```bash
  <!-- con vue -->
  npm create vue@latest
  cd nombr-proyecto
  npm install
  ```

- **Estructura de carpetas y archivos principales:**
  - `src/` Contiene todos los archivos con código fuente de la aplicación, es decir, aquellos que el empaquetador va a procesar, optimizar y transformar de alguna forma.
  - `public/` Almacena archivos estáticos, es decir, aquellos que no van a ser procesador como, por ejemplo, imágenes o tipografías.
  - `node_modules/` Carpeta donde se instalan las dependencias del proyecto.
  - `vite.config.js` Configuración de Vite.
  - `package.json` Lista de dependencias y configuraciones del proyecto.

- **Archivo `main.js` o `main.ts`:**
  Es el punto de entrada de la aplicación, donde Vue se inicializa y se monta el componente principal `App.vue`. La aplicación vue se montará en el elemento con `id="app"` en el `index.html`.
  
  ```js
  import { createApp } from 'vue';
  import App from './App.vue';
  
  createApp(App).mount('#app');
  ```

## 5.2. Organización del código

Dentro de `src/`, la organización de archivos sigue un patrón que facilita la escalabilidad:

- `components/` Contiene componentes reutilizables.
- `assets/` contiene hojas de estilo globales y otros recursos.
- `views/` Cuando se usa Vue Router, almacena vistas principales.
- `store/` cuando se usa Vuex o Pinia, contiene la gestión del estado de la aplicación.

Ejemplo de estructura de `src/`:
```
mi-proyecto/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   ├── views/
│   │   ├── Home.vue
│   │   ├── About.vue
│   ├── store/
│   ├── App.vue
│   ├── main.js
```

## 5.3. Jerarquía y ensamblaje de componentes

Vue funciona creando componentes, que tienen todo el aspecto, estructura y funcionalidad encapsulados e incluyéndolos dentro de otros mayores a modo de **piezas de Lego**, ensamblándose en una jerarquía para construir la aplicación.

Cada componente tiene tres secciones, que veremos con profundidad un poco más adelante: `script`, `template` y `style`, pero que nos harán falta para saber cómo se incluyen unos componentes en otros.

### 5.3.1. `App.vue`: El contenedor principal
El componente principal, llamado `App.vue`, es creado por la herramienta de andamiaje `create-vue`, llamada con `npm create vue@latest` y es el primero que se monta en el DOM cuando se inicializa la aplicación Vue. En él se insertan algunos o todos los componentes de la aplicación.

`App.vue` actúa como el componente raíz que contiene otros componentes secundarios.

```vue
<!-- Ejemplo de App.vue -->
<!-- Importo los componentes que voy a usar -->
<script setup>
  import Encabezado from './components/Encabezado.vue';
  import Cuerpo from './components/Cuerpo.vue';
  import Pie from './components/Pie.vue';
</script>

<template>
  <!-- Incluyo los componentes importados en mi componente (en este caso el principal, App.vue)-->
  <Encabezado />
  <router-view />
  <Cuerpo />
  <Pie />
</template>
```

Sus funciones son:

1. **Punto de entrada**: El componente principal es el primer componente que se monta en el DOM cuando se inicia una aplicación Vue.

2. **Contenedor de componentes**: Actúa como un contenedor donde se insertan otros componentes. Esto facilita la organización de la interfaz de usuario en bloques de construcción más pequeños y manejables, cada uno con su propia lógica y estilo.

3. **Gestión del estado global**: El componente principal a menudo se utiliza para inicializar y gestionar el estado global de la aplicación mediante herramientas como Vuex. Esto permite que los datos se compartan y se sincronicen entre diferentes componentes de la aplicación.

4. **Configuración inicial**: Es el lugar ideal para realizar configuraciones iniciales, como la configuración de enrutadores (usando Vue Router), la inicialización de servicios y la configuración de opciones globales de Vue.

### 5.3.2. Componentes padres e hijos

Los componentes pueden (y suelen) incluir otros dentro. Para usar un componente dentro de otro, hay que importarlo. En ese momento, el importado pasa a ser el hijo y el importador, el padre.

```vue
<!-- Ejemplo de componente padre Producto.vue -->
<script setup>
  // Importo los componentes que voy a usar en Producto.vue
  import Boton from './Boton.vue';
  import Tarjeta from './Tarjeta.vue';
</script>

<template>
  <article>
    <h1>Bienvenido</h1>
    <!-- Incluyo los componentes Tarjeta.vue y Boton.vue -->
    <Tarjeta />
    <Boton />
  </article>
</template>
```

### 5.3.3. Componentes dinámicos
Se pueden renderizar componentes de forma dinámica usando `:is`: (no te preocupes si no entiendes el código aún, esamos viendo qué se puede hacer, por encima)

```vue
<template>
  <component :is="componenteActual" />
</template>

<script setup>
  import { ref } from 'vue';
  import ComponenteA from './ComponenteA.vue';
  import ComponenteB from './ComponenteB.vue';

  const componenteActual = ref('ComponenteA');
</script>
```

-----

# 6. Componentes de un solo archivo (Single-file components)

Una aplicación web construida con vite está formada por una serie de componentes (componentes de un solo archivo, Single-file components, SFC) interaccionando entre sí. Un componente es un **bloque reutilizable y autónomo de la interfaz de usuario que encapsula, en un fichero .vue, el HTML, JavaScript y CSS** necesario para el funcionamiento de dicho componente:
- Estructura (HTML): Define cómo se ve el componente.
- Comportamiento (JavaScript): Define la lógica y la interactividad del componente.
- Estilos (CSS): Define el aspecto visual del componente.

Los componentes son como bloques de construcción que se combinan para formar una aplicación completa. Por ejemplo, en una aplicación web típica, podrían existir los siguientes componentes:
- Un encabezado.
- Un pie de página.
- Un botón.
- Una tarjeta de producto.
- Un formulario de contacto.

Los componentes, gracias a su enfoque modular, facilitan lo siguiente:
- Reutilizar código en la aplicación.
- La comprensión, mantenimiento y escalado de la aplicación.
- La colaboración con otros equipos.


## 6.1. Estructura de un componente
Un componente, empaquetado en un archivo `.vue`, tiene tres secciones principales: **script, template y style**

### 6.1.1. **`<script setup>`:**  
En esta sección se define la lógica y el comportamiento del componente, utilizando JavaScript (o TypeScript). Esta sección generalmente **importa otros componentes** para trabajar con ellos y, usando setup en vue 3, **exporta auotmáticamente un objeto** que define el comportamiento del componente Vue. 

Además, Vue 3 también importa automáticamente componentes comunes como defineProps o defineEmits cuando detecta que se están usando, evitando que el programador lo tenga que hacer explícitamente.

  Ejemplo:
  ```vue
  <script setup>
    // Definición de una variable normal (sin reactividad por ahora)
    let mensaje = '¡Hola Mundo!'

    // Función para cambiar el mensaje
    const cambiarMensaje = () => {
      mensaje = '¡Mensaje cambiado!'
    }
  </script>
   ```

### 6.1.2. **`<template>`:**  

En esta sección se define la estructura del componente. En versiones anteriores a Vue 3, sólo podría haber una etiqueta como hijo directo de template, así que había que crear un contenedor para el resto de componentes. En esta sección se pueden encontrar los siguientes elementos:

- **Etiquetas HTML**.
- **Componentes Vue**, usando etiquetas personalizadas.
- **Interpolación de texto**, mediante la doble llave {{}} para insertar dinámicamente valores de JavaScript dentro de etiquetas HTML.
- **Directivas**. Permiten controlar el comportamiento del DOM. Dada su extensión y su importancia, se tratará más adelante, en un apartado distinto.
  ```vue
  <!-- Ejemplo de etiquetas HTML, componentes Vue e interpolación -->
  <template>
    <article class="flex-columna">
      <!-- Muestra el valor de mensaje en el campo h1 -->
      <h1>{{ mensaje }}</h1>
      <p class="mini">Un texto cualquiera</p>

      <!-- Llama al componente Boton.vue (previamente hay que importarlo) -->
      <Boton />
    </article>
  </template>
  <script setup>
    import Boton from './Boton.vue'; // Importamos el componente Boton
  </script>
  ```
  
  Dentro de la interpolación se pueden usar expresiones de JavaScript y funciones. Una expresión es cualquier un trozo de código que se evalúa y da como resultado un valor. Truco: que pueda ser devuelto por un return
  ```vue
  <template>
    <article>
      <h1> hola {{ nombre.toUpperCase() }} </h1>
      <p>{{ disponible ? ' y ¡estoy disponible!' : ' lo siento, no estoy disponible :(' }}</p>
      <p>{{ makeid(4) }}</p>
    </article>
  </template>

  <script setup>
      function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
  </script>
  ```

  ```vue
    <!-- Ejemplo de interpolación sencillo con una operación incluida-->
    <template>
      <p>La suma de {{ a }} + {{ b }} es igual a {{ a + b }}.</p>
    </template>

    <script setup>
      const a = 10;
      const b = 5;
    </script>
    ```

    ```vue
    <!-- Ejemplo de interplación de una función -->
    <template>
      <p>{{ obtenerSaludo() }}</p>
    </template>
    
    <script setup>
      function obtenerSaludo() {
        return "¡Hola desde una función!";
      }
    </script>
    ```

    ```vue
    <!-- Ejemplo de interplación de los campos de un objeto -->
    <template>
      <p>Nombre: {{ persona.nombre }}</p>
      <p>Edad: {{ persona.edad }}</p>
    </template>

    <script setup>
      const persona = {
        nombre: "Ana",
        edad: 30
      };
    </script>
    ```

### 6.1.3. **`<style>`:**  
En la sección `style`, que se suele colocar al final del fichero, se definen los estilos CSS para el componente. Esta etiqueta permite usar varias propiedades:
- **scoped**. Los estilos definidos en style sólo se aplican al componente actual. Si no se usa scoped, los estilos se aplican globalmente.
- **lang="scss"**. Permite trabajar directamente con lenguajes como SASS, LESS y Stylus.
- **modules**. Hace que Vue trate los estilos definidos en esta sección como un módulo CSS. Los estilos se exportan como un objeto JavaScript, lo que obliga a usarlos con un espacio de nombres (por ejemplo, $style). Esto ayuda a evitar problemas de colisión de clases cuando múltiples componentes usan las mismas clases. Al usar $style, Vue garantiza que cada componente tenga clases con nombres únicos, incluso si tienen clases con el mismo nombre que otros componentes y se usan ambos en un componente padre. También permite reutilizar clases de un componente en otros, sin que haya conflictos de nombres entre ellos.
   
 
  Ejemplo: El atributo `scoped` asegura que los estilos solo se apliquen a este componente, evitando conflictos con otros componentes cuando ambos se importan en el mismo padre.
    ```vue
    <style scoped>
    button {
      font-weight: bold;
    }
    </style>
    ```

  Ejemplo: el atributo lang permite usar otros lenguajes de estilado
  ```vue
  <style lang="scss">
    $colorPrimario: #3498db;
    $colorSecundario: #2ecc71;

    .contenedor {
      background-color: $colorPrimario;
      padding: 20px;
      border-radius: 10px;
    }

    .boton {
      background-color: $colorSecundario;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      
      &:hover {
        background-color: darken($colorSecundario, 10%);
      }
    }
  </style>
  ```    

  Ejemplo: El atributo `module` permite reutilizar clases de otros componentes
  ```vue
  <!-- ComponenteA.vue -->
  <template>
    <button :class="$style.boton">Haz clic</button>
  </template>

  <style module>
  .boton {
    background-color: blue;
    color: white;
    padding: 10px;
    border-radius: 5px;
  }
  </style>

  <!-- ComponenteB.vue -->
  <template>
  <article :class="estilos.tarjeta">
    <button :class="estilos.boton">Botón en tarjeta B</button>
  </article>
  </template>

  <script setup>
  import estilos from './ComponenteA.vue'; // Importamos el objeto con los estilos
  </script>
  ```

  Ejemplo: Importación de estilos de un fichero .css
  ```vue
  <template>
  <article :class="estilos.tarjeta">
    <button :class="estilos.boton">Botón en tarjeta A</button>
  </article>
  </template>

  <script setup>
  import estilos from './assets/mis-estilos.module.css'; // Importamos el archivo CSS Module
  </script>
  ```

## 6.2. Convenciones sobre los componentes
A pesar de que en HTML la convención estándar es usar kebab-case y cierre manual de etiquetas, Vue hace la traducción automáticamente, por lo que la recomendación de **cómo nombrar los componentes Vue y cómo cerrar las etiquetas** de dichos componentes es usar **PascalCase** para identificar los componentes y diferenciarlos de los elementos HTML nativos y **cierre automático (/>)** para las etiquetas
  
  Ejemplo: Sintaxis recomendada
  ```vue
  <template>
    <article>
      <!-- Cierre automático -->
      <ButtonCounter />
      <UserProfile />
    </article>
  </template>
  ```

  Ejemplo: Sintaxis estándar de HTML
  ```vue
  <!-- Sintaxis estándar de HTML -->
  <template id="app-template">
    <article>
      <!-- Usar kebab-case y cierre explícito -->
      <button-counter></button-counter>
      <button-counter></button-counter>
      <button-counter></button-counter>
    </article>
  </template>
  ```

Respecto a la colocación del código, aunque no hay un orden obligatorio para las secciones `<template>`, `<script>` y `<style>`, el orden más común y recomendado es:
  - `<template>`: Primero se define la estructura del componente, ya que es lo más relevante a la hora de leer el código.
  - `<script>`: Luego se define la lógica del componente, donde se manejan los datos y la funcionalidad.
  - `<style>`: Finalmente, se aplican los estilos específicos del componente.

-----

# 7. Directivas
Las **directivas** se utilizan en la sección `template` de un componente y permiten controlar el comportamiento del DOM. Las directivas son mucho más poderosas si se las combina con la [reactividad](#7--reactividad), que veremos en la sección 7.

Las directivas que aquí se van a tratar son:
- **`v-bind`**, para la vinculación entre variables y atributos
- **`v-if`, `v-else` y `v-else-if`**, para la renderización condicional de contenido
- **`v-for`**, para la renderización de listas
- **`v-on`**, para la gestión de eventos
- **`v-model`**, para la creación de vínculos bidireccionales
- **`v-show`** para mostrar u ocultar un elemento
- **`v-text` y `v-html`** para insertar contenido textual o HTML sustituyendo al que haya (aunque no funcionan en la versión 3.5)

Hay más directivas, pero no las considero fundamentales como, por ejemplo 
- **`v-pre`** para evitar interpolación
- **`v-cloack`** para ocultar contenido hasta que Vue lo procese
- **`v-once`** para renderización única
- **`v-memo`** para la optimización del renderizado


## 7.1. Vinculación entre atributos y propiedades (v-bind)
**v-bind** permite enlazar dinámicamente atributos de un elemento HTML con propiedades del componente. Así, si el valor del atributo del elemento HTML cambia en la sección script del componente, que se ejecuta antes de renderizar el DOM, el atributo tomará el valor de la propiedad en el componente. Si el valor de la propiedad es cambiado más adelante por otro componente, el valor del atributo cambiará automáticamente SÓLO SI se define la propiedad como reactiva (lo veremos más adelante).
   
La sintaxis es `<article v-bind:<nombre-atributo>="propiedad">` o, de forma abreviada, `<article :<nombre-atributo>="propiedad">`. Desde Vue 3.4, si el nombre del atributo coincide con del de la propiedad del componente, se abreviar aún más con `<article :id>`

### Ejemplo 1: vinculación  tradicional y abreviada
  ```vue
  <template>
    <!-- Sintaxis completa. Enlaza el atributo id con la propiedad id del componente -->
    <article v-bind:id="miID"></article>
    <!-- Sintaxis abreviada -->
    <article :id="miID"></article>
  </template>
  <script setup>
    let miID="IDInicial";
    miID="otroID";
  </script>
  ```

### Ejemplo 2: vinculación súper abreviada
  ```vue
  <!-- Sintaxis desde Vue 3.4: Si el atributo y la propiedad tienen el mismo nombre, se puede poner :id -->
  <template>
    <article :id></article>
  </template>
  <script setup>
    let miID="IDInicial";
  </script>
  ```

### Ejemplo 3: vinculación de atributos booleanos

En el caso de atributos **booleanos** como `disabled`, `checked` o `readonly`, si el valor de la propiedad es `true`, Vue incluirá el atributo en el elemento. Si es `false` o `null`, el atributo se eliminará automáticamente. Ejemplo:

  ```vue
  <!-- Si esDeshabilitado se evalua a true en el código del componente, el botón tendrá el campo disabled -->
  <template>
    <button :disabled="esDeshabilitado">Enviar</button>
  </template>
  <script setup>
    import { ref } from 'Vue';
    let esDeshabilitado = ref(false);
  </script>
  ```

### Ejemplo 4: Vinculación entre un input y un párrafo

Se vincula la variable nombre al atributo value y se define una función que gestionará el evento @input (actualizaNombre) que actualizará el valor de la variable cuando el usuario cambie el input. Se muestra su valor en pantalla con el mostacho.

  ```vue
  <template>
    <fieldset>
      <legend>Formulario</legend>
      <label>
        Nombre:
        <input type="text" :value="nombre" @input="actualizaNombre" />
      </label>
      <p>Tu nombre es: {{ nombre }}</p>
    </fieldset>
  </template>

  <script setup>
  import { ref } from 'vue';
  let nombre = ref('');

  function actualizaNombre(event) {
    nombre.value = event.target.value;
  }
  </script>
  ```

### Ejemplo 5: Vinculación entre un select y un párrafo
  ```vue
  <template>
    <p>Selecciona tus intereses:</p>
    <label>
      <input 
        type="checkbox" 
        :checked="intereses.includes('Deporte')" 
        @change="toggleInteres('Deporte')" 
      /> Deporte
    </label>
    <label>
      <input 
        type="checkbox" 
        :checked="intereses.includes('Música')" 
        @change="toggleInteres('Música')" 
      /> Música
    </label>
    <label>
      <input 
        type="checkbox" 
        :checked="intereses.includes('Cine')" 
        @change="toggleInteres('Cine')" 
      /> Cine
    </label>
    <p>Intereses seleccionados: {{ intereses }}</p>
  </template>

  <script setup>
  import { ref } from 'vue';

  const intereses = ref([]);

  function toggleInteres(interes) {
    if (intereses.value.includes(interes)) {
      // Si ya está seleccionado, lo quitamos
      intereses.value = intereses.value.filter(item => item !== interes);
    } else {
      // Si no está seleccionado, lo agregamos
      intereses.value.push(interes);
    }
  }
  </script>
  ```

### Ejemplo 6: vinculación de objetos

También se pueden **vincular objetos**. En este caso se usa el '=' en vez de ':''
  ```vue
  <!-- Sería equivalente a <a :href="atributosEnlace.href" :target="atributosEnlace.target" :title="atributosEnlace.title">Enlace dinámico</a> 
  En este caso no se puede usar la nomenclatura abreviada
  -->
  <template>
    <article v-bind="atributosArticle">
      <a v-bind="atributosEnlace">Enlace dinámico</a>
    </article>
  </template>

  <script setup>
    const atributosEnlace = {
      href: 'https://vuejs.org',
      target: '_blank',
      title: 'Ir a Vue.js'
    };

    const atributosArticle={
      id: 'container',
      class: 'wrapper',
      style: 'background-color:green'
    };
  </script>
  ```

### Ejemplo 7: vinculación de clases

  También se pueden vincular clases. Si la variable se evalúa a false, no aparecerá en el elemento
  ```vue
  <!-- En este ejemplo las clases se insertan siempre. Lo interesante es que, si cambian más adelante, eso se refleje en las clases de p. Eso se consigue con reactividad, que veremos más adelante -->
  <template>
    <p :class="{ activo: esActivo, resaltado: esResaltado }">Texto con clases dinámicas</p>
  </template>

  <script setup>
    const esActivo = true;
    const esResaltado = false;
  </script>

  <style>
    .activo { color: green; }
    .resaltado { font-weight: bold; }
  </style>
  ```

  ```vue
  <!-- En este ejemplo, importante y extra siempre serán insertadas -->
  <template>
    <p :class="[clasePrincipal, 'extra']">Texto con clases dinámicas</p>
  </template>

  <script setup>
    const clasePrincipal = 'importante';
  </script>

  <style>
    .importante { font-size: 20px; }
    .extra { text-decoration: underline; }
  </style>
  ```

### Ejemplo 8: vinculación de estilos
  ```vue
  <!-- En este ejemplo, se insertan estilos en línea -->
  <template>
    <p :style="{ color: colorTexto, fontSize: tamañoFuente + 'px' }">Texto con estilos dinámicos</p>
  </template>

  <script setup>
    const colorTexto = 'blue';
    const tamañoFuente = 18;
  </script>
  ```

  ```vue
  <!-- En este ejemplo se insertan estilos en línea como objetos -->
  <template>
    <p :style="[estilosBase, estilosExtra]">Texto con múltiples estilos</p>
  </template>

  <script setup>
    const estilosBase = { color: 'red', fontWeight: 'bold' };
    const estilosExtra = { textDecoration: 'underline' };
  </script>
  ```

### Ejemplo 9: vinculación de funciones
Se puede ejecutar una función en un atributo de una etiqueta vinculándola con v-bind. Sin embargo, no es recomedable porque las funciones en v-bind se ejecutan en cada actualización del componente, les afecten los cambios o no, lo cual puede ser muy costoso. Se recomienda usar [propiedades computadas](#10-propiedades-computadas) (se verán más adelante)

  ```vue
  <!--En este ejemplo se ejecuta una función en :title. -->
  <template>
    <time :title="toTitleDate(date)" :datetime="date">
      {{ formatDate(date) }}
    </time>
  </template>

  <script setup>
    function toTitleDate(date) {
      console.log('Ejecutando toTitleDate'); // Se ejecuta en cada actualización del componente
      return new Date(date).toLocaleDateString();
    }

    function formatDate(date) {
      return new Date(date).toDateString();
    }
  </script>
  ```

## 7.2. Renderización condicional (v-if, v-else, v-else-if)

**v-if, v-else** y **v-else-if** permiten renderizar elementos condicionalmente. Si la condición evaluada es falsa, el elemento no se renderiza.

### Ejemplo: Renderización condicional
```vue
<template>
  <p v-if="mostrarMensaje">Este mensaje solo se muestra si mostrarMensaje es true.</p>
  <p v-else>Este mensaje sólo se muestra si mostrarMensaje es false</p>
</template>

<script setup>
  import { ref } from 'Vue';
  const mostrarMensaje=ref (true);
</script>
```

  
## 7.3. Renderización dinámica de listas (v-for)
**v-for** permite iterar sobre una lista de elementos y renderizarlos dinámicamente.

### Ejemplo: Renderización de una matriz sencilla
  ```vue
  <template>
    <ul>
      <li v-for="(fruta, indice) in frutas" :key="indice">{{ indice }} - {{ fruta }}</li>
    </ul>
  </template>

  <script setup>
    const frutas = ["Manzana", "Plátano", "Uva"];
  </script>
  ```

### Ejemplo: Renderización de una matriz de matrices
  ```vue
  <template>
    <article>
      <h1>Lista de Productos</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - ${{ product.price }}
        </li>
      </ul>
    </article>
  </template>

  <script setup>
    const products = [
      { id: 1, name: 'Producto 1', price: 10 },
      { id: 2, name: 'Producto 2', price: 20 },
      { id: 3, name: 'Producto 3', price: 30 },
    ];
  </script>
  ```

## 7.4. Gestión de eventos (v-on)

**v-on** permite escuchar eventos del DOM. Su sintaxis es `<button v-on:evento="miMetodo">Haz clic</button>` aunque tiene una forma abreviada `<button @evento="miMetodo">Haz clic</button>`. 

Se pueden usar los típicos eventos: `click`, `dblclick`, `contextmenu`, `mouseover`, `mouseleave`, `focusin`, `focusout`, `input`, `change`, `keyup`, `keydown`, etc. Los eventos de teclado se pueden usar con teclas específicas como, por ejemplo: `@keyup.enter`, `@keydown.tab`, `@keyup.delete`, etc.
    
Esta directiva permite usar algunos modificadores para cambiar el comportamiento del evento como, por ejemplo, 
  - `prevent`, que evita el comportamiento por defecto del evento.
  - `stop`, que detiene la propagación del evento.
  - `self`, que sólo lanza el evento para este elemento, no para sus hijos.
  - `once`, que captura el evento sólo una vez.

### Ejemplo 1: escucha del evento click y llamada al método que lo gestiona
  ```vue
  <!-- Ejemplo de directiva v-on para escuchar el evento click y llamar al método "mostrarAlerta" -->
  <template>
    <button @click="mostrarAlerta">Haz clic</button>
  </template>

  <script setup>
  const mostrarAlerta = () => {
    alert('Botón pulsado');
  };
  </script>
  ```

### Ejemplo 2: escucha del evento click y llamada al método que lo gestiona
  ```vue
  <!-- Ejemplo de paso de argumentos a función de respuesta a evento -->
  <template>
    <button @click.left="saludar('Procopio')" @contextmenu.prevent @click.right="despedir('Procopio')">Pulsa</button>
  </template>

  <script setup>
  const saludar = (nombre) => {
    alert(`Hola, ${nombre}`);
  };
  
  const despedir = (nombre) => {
    alert(`Adiós, ${nombre}`);
  };
  </script>
  ```

```vue
<!-- Ejemplo de uso del objeto evento dentro del manejador de eventos -->
<template>
  <input type="text" @input="mostrarTexto($event)">
</template>

<script setup>
const mostrarTexto = (evento) => {
  console.log('Texto introducido:', evento.target.value);
};
</script>
```

```vue
<!-- Ejemplo del uso de expresiones en línea -->
<template>
  <button @click="console.log(++contador)">Incrementar</button>
</template>
```

```vue
<!-- Ejemplo de uso del modificador .prevent para evitar que el evento haga su función tradicional -->
<template>
  <form @submit.prevent="miFuncion">
    <button type="submit">Enviar</button>
  </form>
</template>
```

```vue
<!-- Ejemplo de uso del modificador.stop para evitar que el evento se propague (burbujeo) -->
<template>
  <article @click="estoNoSeEjecutara">
    <button @click.stop="miFuncion">Haz clic</button>
  </article>
</template>
```

```vue
<!-- Ejemplo de uso del modificador .once para que la función asociada al evento sólo se ejecute una vez -->
<template>
  <button @click.once="miFuncion">Haz clic una vez</button>
</template>
```

## 7.5. Creación de vínculos bidireccionales (v-model)
Como se ha visto anteriormente `v-bind` permite crear un vínculo unidireccional entre dos elementos/componentes. Para que sea bidireccional, hace falta usar `v-bind` para vincular en un sentido y un evento para notificar de cambios en el otro sentido.

Aunque se puede usar para crear un vínculo unidireccional (tiene poco sentido esto porque para eso ya está v-bind), **`v-model` se usa para crear un vínculo bidireaccional**. La **ventaja sobre v-bind es que evita que el programador tenga que ocuparse de la gestión del evento** (definirlo, llamarlo y crear la función que lo gestiona). 

Sin embargo, al igual que con `v-bind`, para que la comunicación sea bidireccional, es necesario hacer uso de la [reactividad](#8-reactividad), concepto que exploraremos más adelante. Por ahora, es suficiente con saber que `v-model` facilita la sincronización automática de datos entre componentes.

Con `v-bind`, hay que indicar a qué atributo asociar la variable, pero con `v-model`, la mayoría de los casos, Vue **decide automáticamente a qué atributo se enlaza la variable**:
- Para un `<input>`...
  - ...de tipo **text**, `v-model` enlaza con el atributo **`value`**.
  - ...de tipo **radio**, se enlaza con el atributo **`value`** y se gestionan los valores seleccionados.

- En un **`checkbox`**, `v-model` no se vincula a un solo atributo, sino que maneja el estado general de los checkboxes.
- En un **`<textarea>`**, enlaza también con el atributo `value`, ya que el valor del campo de texto es el contenido que se introduce dentro del área de texto.
- En un **`<select>`**, la variable asociada con `v-model` contiene los valores seleccionados de las opciones, pero no se vincula directamente a un solo atributo de cada `<option>`.

En componentes personalizados `v-model` por defecto se enlaza a la propiedad **`modelValue`** del componente, pero se puede usar un atributo distinto para enlazar, configurándolo con una `prop` personalizada.
  
### Ejemplo 1: Vinculación entre un input y un párrafo

Este es igual que el ejemplo 4 de `v-bind`, pero usando `v-model`. En este caso, v-model evita tener que declarar el evento y definir la función que lo gestionará, ya que lo hace automáticamente.

  ```vue
    <template>
      <fieldset>
        <legend>Formulario</legend>
        <label>
          Nombre:
          <!-- v-model asocia la variabla "nombre" al atributo "value" -->
          <input type="text" v-model="nombre" />
          <!-- Con v-bind sería así
          <input type="text" :value="nombre" @input="actualizaNombre" /> -->
        </label>
        <p>Tu nombre es: {{ nombre }}</p>
      </fieldset>
    </template>

    <script setup>
      import { ref } from 'vue';

      const nombre = ref('');
      const intereses = ref([]);

      // Con v-bind sería necesario definir la función que maneja el evento
      // function actualizaNombre(event) {
      //   nombre.value = event.target.value;
      // }
    </script>
  ```


### Ejemplo 2: Vinculación entre un select y un párrafo

Este es igual que el ejemplo 5 de `v-bind`, pero usando `v-model`. En este caso, v-model evita tener que declarar el evento y definir la función que lo gestionará, ya que lo hace automáticamente

  <template>
    <p>Selecciona tus intereses:</p>
    <label><input type="checkbox" v-model="intereses" value="Deporte" /> Deporte</label>
    <label><input type="checkbox" v-model="intereses" value="Música" /> Música</label>
    <label><input type="checkbox" v-model="intereses" value="Cine" /> Cine</label>
    <p>Intereses seleccionados: {{ intereses }}</p>
  </template>
  
  <script setup>
    import { ref } from 'vue';
    const intereses = ref([]);
  </script>
    

## 7.6. Mostrar u ocultar dinámicamente un elemento (v-show)

`v-show` permite mostrar u ocultar un elemento dinámicamente, pero sin eliminarlo del DOM. Funciona estableciendo la propiedad `display:none` cuando la condición es false. No hay que confundirlo con `v-if`, que agrega, o no, el elemento al DOM. Al igual que con `v-model`, la [reactividad](#8--reactividad) es necesaria para que el contenido se oculte o se muestre dinámicamente. Esto es porque `v-show` depende de una condición reactiva para modificar el valor de display.

### Ejemplo: Mostrar u ocultar un mensaje
  ```vue
  <template>
    <p v-show="mostrarMensaje">Este mensaje se puede ocultar.</p>
    <button @click="mostrarMensaje = !mostrarMensaje">Cambiar</button>
  </template>

  <script setup>
    import { ref } from 'vue';
    const mostrarMensaje = ref(true);
  </script>
  ```

## 7.7. Establecer contenido de un elemento (v-text y v-html)

`v-text` es una directiva de Vue que se usa para establecer el contenido textual de un elemento, interpretando las etiquetas HTML como texto plano. Funciona de manera similar a la interpolación {{ }}, pero con una diferencia clave: `v-text` reemplaza todo el contenido dentro del elemento, mientras que {{ }} permite mezclar texto con otros elementos o contenido HTML. 

v-html es una directiva en Vue que se usa para insertar contenido HTML dentro de un elemento. A diferencia de v-text, que muestra el HTML como texto plano, v-html interpreta las etiquetas y las renderiza en el DOM, así que hay que tener precaución con insertar contenido sin comprobar o de fuentes no fiables.

**(en la versión 3.5.13 estas directivas no funcionan cuando se intenta sustituir contenido, vite da un error)**

### Ejemplo: Sobreescritura de todo el contenido interno con v-text y v-html

Si tiene contenido interno NO FUNCIONA (aunque vue dice que lo reemplaza). El compilador da un error y no es posible evitarlo.

  ```vue
  <template>
    <!-- Esto no funciona -->
    <!-- <p v-text="mensaje">Este texto va ser totalmente machacado</p>
    <p v-html="mensaje">Este texto va ser totalmente machacado</p>-->

    <p v-text="mensaje"></p>
    <p v-html="mensaje"></p>
    
  </template>

  <script setup>
    const mensaje = '<p>¡Vue te va a encantar!<p>';
  </script>
  ```

------

# 8. Reactividad

La reactividad es el mecanismo que permite a Vue actualizar automáticamente la interfaz de usuario cuando los datos cambian, sin tener que manipular el DOM manualmente.

Hay dos conceptos clave de la reactividad en Vue:
- **ref**: Es una función que se utiliza para crear una referencia reactiva a una variable de un tipo primitivo (número, cadena de texto, etc.)o a un objeto. `ref()` envuelve su argumento en un objeto `ref` con una propiedad `.value` que contiene el valor de la variable.
- **reactive**: Se usa para crear una referencia reactiva para objetos y matrices. En lugar de tener que acceder a un valor mediante `.value`, como con ref, `reactive` automáticamente hace que las propiedades del objeto sean reactivas.


## Ejemplo 1: Vinculación dinámica de clases
  ```vue
  <template>
    <button
      :class="{
        'bg-blue-500': isBlue,
        'bg-red-500': !isBlue,
        'text-white': true,
        'px-4': true,
        'py-2': true
      }"
      @click="alternarColor">
      Cambiar color
    </button>
  </template>
  

  <script setup>
    import { ref } from 'vue'

    // Al ser una variable reactiva, es en la que Vue está escuchando cambios, si en algún momento se hiciera .value=false, la clase activo desaparecería de p
    const isBlue = ref(true)  // Controla el color de fondo del botón

    // Función que cambia el valor de `isBlue`
    const alternarColor = () => {
      isBlue.value = !isBlue.value  // Cambia el valor de isBlue, alternando el color de fondo
    }
  </script>

  <style>
    .activo { color: green; }
    .resaltado { font-weight: bold; }
  </style>
  ```

## Ejemplo 2: Vinculación dinámica de clases

  ```vue
  <template>
    <div>
      <p :class="{ activo: esActivo, resaltado: esResaltado }">
        Texto con clases dinámicas
      </p>
      <button @click="toggleActivo">Alternar Activo</button>
      <button @click="toggleResaltado">Alternar Resaltado</button>
    </div>
  </template>

  <script setup>
    import { ref } from 'vue'

    // Variables reactivas para controlar las clases
    const esActivo = ref(false)
    const esResaltado = ref(false)

    // Métodos para alternar los valores
    const toggleActivo = () => {
      esActivo.value = !esActivo.value
    }

    const toggleResaltado = () => {
      esResaltado.value = !esResaltado.value
    }
  </script>

  <style scoped>
    /* Estilos para las clases */
    .activo {
      color: green;
      font-weight: bold;
    }

    .resaltado {
      background-color: yellow;
    }
  </style>
  ```

### Ejemplo 3: Enlace bidireccional entre un input y un p suando v-bind

  <!-- Muestra en el campo p, lo que el usuario introduzca en el input -->
  ```vue
  <template>
    <fieldset>
      <legend>Formulario</legend>
      <label>
        Nombre:
        <input type="text" :value="nombre" @input="updateNombre" />
      </label>
      <p>Tu nombre es: {{ nombre }}</p>
    </fieldset>
  </template>

  <script setup>
  import { ref } from 'vue';

  let nombre = ref('');

  function updateNombre(event) {
    nombre.value = event.target.value;
  }
  </script>
  ```

### Ejemplo 4: Enlace bidireccional entre un input y un p usando v-model

  <!-- Muestra en el campo p, lo que el usuario introduzca en el input -->
  ```vue
  <template>
    <fieldset>
      <legend>Formulario</legend>
      <label>
        Nombre:
        <input type="text" v-model="nombre" />
      </label>
      <p>Tu nombre es: {{ nombre }}</p>
    </fieldset>
  </template>

  <script setup>
  import { ref } from 'vue';

  let nombre = ref('');

  </script>
  ```

### Ejemplo 5:  Renderización condicional usando directivas y reactividad

  ```vue
  <template>
      <article class="borde flex-columna">
          <h1>Directivas v-if y v-show con reactividad</h1>

          <!-- Directiva v-if -->
          <p v-if="mostrarMensaje2">Este mensaje se puede renderizar, o no, en el DOM.</p>
          <button @click="mostrarMensaje2 = !mostrarMensaje2">
              {{ mostrarMensaje2 ? 'Insertar' : 'Eliminar' }} mensaje {{ mostrarMensaje2 ? 'en el' : 'del' }} DOM (v-if)
          </button>

          <!-- Directiva v-show -->
          <p v-show="mostrarMensaje">Este mensaje se puede ocultar o mostrar, pero siempre se renderiza</p>
          <button @click="mostrarMensaje = !mostrarMensaje">
              {{ mostrarMensaje ? 'Ocultar' : 'Mostrar' }} mensaje (v-show)
          </button>

          <p class="mini">ReactividadDirectivas.vue</p>
      </article>
  </template>

  <script setup>
      import { ref } from 'vue';
      const mostrarMensaje = ref(true);
      const mostrarMensaje2 = ref(true);
  </script>
  ```

-----

# 9. Interacción entre componentes
Los componentes pueden interaccionar entre sí de varias maneras:

## 9.1. Inserción de contenido

Las ranuras (slots) permiten que el **padre inserte contenido en el hijo, en un sitio determinado**.

Los slots se parecen a las props, que también permiten pasar contenido al hijo, pero los primeros permiten pasar contenido completo (puede ser HTML, otros componentes, etc.), no solo datos y éste puede ser dinámico y más complejo. Sin embargo, las props pasan sólo texto, estático y más sencillo.


```vue
<!-- Componente Tarjeta.vue -->
<template>
  <article class="card">
    <h2><slot name="titulo">Título por defecto</slot></h2>
    <slot name="contenido">Contenido por defecto</slot>
    <slot name="imagen"></slot>
    <slot></slot>
  </article>
</template>

<!-- Componente padre -->
<template>
  <Tarjeta>
    <!-- Este h1 se renderizará en el slot name="titulo" del hijo -->
    <template #titulo>
      <h1>Un paisaje precioso</h1>
    </template>
    <!-- Este párrafo se renderizará en el slot name="contenido" del hijo -->
    <template #contenido>
      <p>Texto de "</p>
    </template>
    <!-- Esta imagen se renderizará en el slot name="imagen" del hijo -->
    <template #imagen>
      <img src="../../public/paisaje-474px.jpg" alt="un reflejo en el lago">
    </template>
    <!-- Este párrafo se renderizará en el slot sin nombre del hijo -->
    <p class="mini">Este es el texto a pie de tarjeta</p>
  </Tarjeta>
</template>
```

## 9.2. Comunicación

### 9.2.1. Propiedades + eventos
- Los **Props** (propiedades) permiten que un **padre pase datos a un hijo**. Para eso, se definen en el hijo qué propiedades acepta y en el padre se le pasan como propiedades de la etiqueta que lleva el nombre del hijo. El flujo es el siguiente:
  - El padre pasa datos al hijo usando las `props`.
  - El hijo recibe las `props` definidas y las usa para mostrar o procesar los datos.
  - El padre puede cambiar el valor de las `props`, pero el hijo no puede modificar directamente las props. En su lugar, el hijo debe comunicar los cambios al padre mediante eventos.
- Los **Eventos** permiten que un componente **hijo notifique al padre sobre cambios o acciones**. El flujo general es el siguiente:
  - El hijo define los eventos que puede emitir y que se propagarán hacia el padre usando `defineEmits()`. Si son eventos que se van a usar en el mismo hijo, no es necesario usarlo.
  - El hijo emite un evento con `emit('nombre-del-evento', datosOpcionales)`.
  - El padre escucha el evento en la plantilla (`<ChildComponent @nombre-del-evento="manejador">`).
  - El padre maneja el evento con una función que recibe los datos enviados por el hijo y actualiza su estado si es necesario.

### Ejemplo 1: Comunicación con props+eventos
```vue
<!-- Ejemplo de comunicación entre componente padre e hijo usando props y eventos -->
<!-- Padre.vue -->
<template>
  <article>
    <h1>Componente Padre</h1>
    <p>Mensaje recibido del hijo:</p>
    <Hijo 
      msj="¡Hola desde el padre!" 
      titulo="Título personalizado"
      :autor="'Autor del mensaje'" 
      @notify="handleNotification" 
    />
  </article>
</template>

<script setup>
import Hijo from './Hijo.vue';

// Función para manejar el evento emitido por el hijo
function handleNotification(newMessage) {
  console.log('Mensaje recibido del hijo:', newMessage); // Mostrar el mensaje en la consola
}
</script>


<!-- Hijo.vue -->
<template>
  <article>
    <h1>{{ titulo }}</h1>
    <p>{{ msj }}</p>
    <p>{{ autor }}</p>
    <!-- Botón para emitir un evento al padre -->
    <button @click="notifyParent">¡Haz clic!</button>
  </article>
</template>

<script setup>
// Definimos las propiedades que el componente hijo va a recibir
defineProps({
  msj: {
    type: String,
    required: true
  },
  titulo: {
    type: String,
    default: 'Título por defecto'
  },
  autor: String
});

// Definimos el evento que el hijo puede emitir para notificar al padre
const emit = defineEmits(['notify']);

// Función para emitir un evento con el mensaje al padre
function notifyParent() {
  emit('notify', 'El botón fue clickeado');
}
</script>
```

### Ejemplo 2: Comunicación con props+eventos+reactividad
Cuando se pulsa el botón, el hijo emite el evento `update-message`, el padre lo recibe y lo maneja mediante `handleUpdate` que cambia `parentMessage.value`. Gracias a que parentMessage es una variable reactiva, Vue detecta el cambio, lo propaga a la propiedad `message` en el hijo y actualiza automáticamente el contenido del `<p>` en el hijo. Si `parentMessage` no fuera reactivo, Vue no actualizaría parentMessage y no lo propagaría automáticamente al hijo, por lo que éste recibiría siempre el mismo valor inicial y no reflejaría los cambios.

El flujo, por tanto es:
1. El padre pasa datos al hijo a través de la prop message.
2. El hijo muestra los datos recibidos a través de la prop en su plantilla.
3. Cuando el hijo emite el evento update-message, el padre recibe el evento mediante @update-message="handleUpdate".
4. El padre maneja el evento con la función handleUpdate, que actualiza el valor de la variable reactiva parentMessage.
5. Gracias a la reactividad de parentMessage, Vue detecta el cambio y automáticamente actualiza la propiedad message en el hijo, lo que provoca que el `<p>{{ message }}</p>` del hijo también se actualice.

  ```vue
  <!-- Padre.vue -->
  <template>
    <article>
      <h1>Componente Padre</h1>
      <!-- Pasar una prop y escuchar un evento -->
      <Hijo :message="parentMessage" @update-message="handleUpdate" />
    </article>
  </template>

  <script setup>
    import { ref } from 'vue';
    import Hijo from './Hijo.vue';

    // Estado en el componente padre
    const parentMessage = ref('Hola desde el padre');

    // Función para manejar el evento emitido por el hijo
    function handleUpdate(newMessage) {
      parentMessage.value = newMessage;
    }
  </script>


  <!-- Hijo.vue -->
  <template>
    <article>
      <!-- Aunque message es una variable reactiva y, por tanto un objeto con una propiedad value, no hay que desenvolverla con {{ message.value }}. Cuando se usa en una interpolación, esto es automático. -->
      <p>{{ message }}</p>
      <button @click="updateMessage">Actualizar mensaje</button>
    </article>
  </template>

  <script setup>
    // Definir las props que recibe el componente
    const props = defineProps({
      message: {
        type: String,
        required: true,
      },
    });

    // Definir los eventos que el componente puede emitir
    const emit = defineEmits(['update-message']);

    // Función para emitir el evento
    function updateMessage() {
      emit('update-message', 'Nuevo mensaje desde el hijo');
    }
  </script>
  ```


### 9.2.2. v-model y eventos
Otro método para comunicar padres e hijos es usar `v-model` y eventos. `v-model` se utiliza comúnmente para la comunicación bidireccional entre componentes, especialmente en formularios.
- **v-model**: Permite la sincronización bidireccional de datos entre el componente padre y el hijo. Es una sintaxis que simplifica el uso de `props` y eventos de la siguiente forma:
  - Evita tener que definir manualmente el evento y el método de actualización en el componente padre.
  - Evita tener que definir `props` en el hijo ya que el valor que se pasa desde el padre se asigna auotmáticamente a una prop especial llamada `modelValue` en el hijo.
- **Eventos**: El componente hijo emite eventos para actualizar el valor en el componente padre.


### Ejemplo 1: uso de defineModel con un parámetro solo
```vue
<!-- Padre.vue -->
<template>
    <article class="borde flex-columna">
        <h1>Comunicación con v-model y reactividad</h1>
        <h2>Componente padre</h2>
        <p>Mensaje en el Padre: {{ parentMessage }}</p>
        <p class="mini">Padre.vue</p>
        <Hijo v-model="parentMessage" />
    </article>
</template>
  
<script setup>
  import { ref } from 'vue';
  import Hijo from './Hijo.vue';
  
  const parentMessage = ref('Hola desde el padre');
</script>

<!-- Hijo.vue -->
<!-- Al recibir sólo un parámetro del padre, éste toma el nombre de modelValue -->
<template>
  <article class="borde flex-columna">
    <h2>Componente hijo</h2>
    <input :value="modelValue" @input="updateValue" />
  </article>
</template>
  
<script setup>
  const props = defineProps(['modelValue']);
  const emit = defineEmits(['update:modelValue']);
  
  function updateValue(event) {
    emit('update:modelValue', event.target.value);
  }
</script>
```

### Ejemplo usando v-model con varios parámetros
```vue
<!-- Padre.vue -->
<!-- Al usar varios parámetros, hay que darles nombre -->
<template>
  <article>
    <h1>Sincronización con v-model</h1>
    <Hijo v-model:name="name" v-model:age="age" />
    <p>Nombre: {{ name }}</p>
    <p>Edad: {{ age }}</p>
  </article>
</template>

<script setup>
import { ref } from 'vue';
import Hijo from './Hijo.vue';

const name = ref('Juan');
const age = ref(30);
</script>

<!-- Hijo.vue -->
<!-- Al usar varios parámetros, hay que usar defineProps -->
<template>
  <article>
    <input :value="name" @input="updateName" placeholder="Nombre" />
    <input :value="age" @input="updateAge" placeholder="Edad" />
  </article>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  name: String,
  age: Number,
});

const emit = defineEmits(['update:name', 'update:age']);

function updateName(event) {
  emit('update:name', event.target.value);
}

function updateAge(event) {
  emit('update:age', Number(event.target.value));
}
</script>

```

### 9.2.3. defineModel
Vue 3.4 introdujo `defineModel` como una forma más cómoda de trabajar con `v-model` en componentes hijos, especialmente cuando se utiliza la sintaxis `<script setup>`. Es una función que se encarga de hacer lo siguiente:
- **Enlace de propiedades**: la función `defineModel()` permite acceder a las propiedades vinculadas con `v-model` en el componente hijo. Esto facilita la lectura y escritura de valores que se sincronizan con el padre.
- **Manejo de eventos**: **Cuando se usa con argumentos**, `defineModel` no solo enlaza las propiedades, sino que también se encarga de emitir automáticamente los eventos necesarios para notificar al padre sobre los cambios. Esto elimina la necesidad de definir manualmente los eventos `update:modelValue`.

```vue
<!-- Padre -->
<template>
  <article>
    <h1>Comunicación Padre-Hijo con defineModel</h1>
    <p>Mensaje en el Padre: {{ message }}</p>
    <!-- Al usar v-model, no hay que definir manejador de eventos, Vue lo hace automáticamente -->
    <ChildComponent v-model="mensaje" />
  </article>
</template>

<script setup>
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

// Al ser una variable reactiva, se actualizará el DOM automáticamente cuando el hijo modifique la variable mensaje
const mensaje = ref('Hola desde el padre');
</script>


<!-- Hijo -->
<template>
    <article>
      <input :value="modelValue" @input="updateValue" />
    </article>
  </template>
  
  <script setup>
    import { defineModel } from 'vue';
    const emit = defineEmits(['update:modelValue']);
  
    // defineModel accede a la variable vinculado con v-model en el padre. El resultado es que en modelValue se tiene el valor actual de mensaje (así es como se llamó). Al usarse sin parámetros, hay que crear a mano el manejador de eventos en el campo del formulario para avisar al padre de que ha habido cambios.
    const modelValue = defineModel();

    // Función a la que se llama cuando se lanza el evento input, es decir, cuando el usuario escribe en el campo input. El resultado es que el hijo emite el evento update:modelValue con el nuevo valor. Esto notifica al padre que el valor de mensaje debe actualizarse. Al ser un valor reactivo, la interfaz cambiará para reflejar el nuevo valor.
    function updateValue(event) {
        emit('update:modelValue', event.target.value);
    }
</script>
```

### Ejemplo 2: uso de defineModel con un parámetro solo, pero dándole nombre (Recomendado)
<!-- al usar defineModel con un parámetro (para enlazar la propiedad del padre con la del hijo), se crea automáticamente el evento para notificar de los cambios al padre -->
```vue
<!-- Padre.vue -->
<template>
    <article class="borde flex-columna">
        <h1>Comunicación con v-model y reactividad</h1>
        <h2>Componente padre</h2>
        <p>Mensaje en el Padre: {{ mensaje }}</p>
        <p class="mini">Padre.vue</p>
        <Hijo v-model:mensajeDelPadre="mensaje" />
    </article>
</template>
  
<script setup>
  import { ref } from 'vue';
  import Hijo from './Hijo.vue';
  
  const mensaje = ref('Hola desde el padre');
</script>

<!-- Hijo.vue -->
<template>
    <article class="borde flex-columna">
      <h2>Hijo</h2>
      <!-- v-bind:value -> enlaza unidireccionalmente el atributo value del input con la prop modelValue -->
      <input v-model="mensaje" />
      <p class="mini">ComDefineModelReactHijo.vue</p>
    </article>
  </template>
  
  <script setup>
    import { defineModel } from 'vue';
  
    // defineModel proporciona acceso al valor vinculado con v-model
    const mensaje = defineModel('mensajeDelPadre');
</script>
```


### Ejemplo de defineModel con varias propiedades
  
  Esto nos ahorra tener que definir el evento en el hijo que avisará al padre de los cambios
  ```vue
  <!-- Padre.vue -->
  <template>
    <UserName
      v-model:first-name="first"
      v-model:last-name="last"/>
  </template>


  <!-- UserName.vue -->
  <script setup>
  const firstName = defineModel('firstName')
  const lastName = defineModel('lastName')
  </script>

  <template>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
  </template>
  ```

----

# 10. Propiedades computadas

Cuando se usa v-bind para enlazar un atributo a una función, esa **función se ejecuta cada vez que el componente se actualiza**. Esto significa que, independientemente de si los datos que afectan a la función han cambiado o no, la función se ejecutará en cada ciclo de actualización. Si la función realiza cálculos costosos o accede a datos que no han cambiado, esto puede resultar en un rendimiento ineficiente, ya que se está haciendo trabajo innecesario.

Un componente puede actualizarse por varias razones:
- **Cambios en los datos reactivos**: Si cualquier dato reactivo dentro del componente cambia, Vue.js marcará el componente para una actualización.
- **Cambios en los componentes padres**: Si un componente padre se actualiza, puede desencadenar una actualización en sus componentes hijos, incluso si los datos del hijo no han cambiado.
- **Eventos del ciclo de vida**: Algunos eventos del ciclo de vida del componente, como mounted, updated, etc., pueden causar que un componente se vuelva a renderizar.
- **Cambios en las propiedades computadas u observadores** 
- **Interacciones del usuario**

Por contra, las **propiedades computadas** se almacenan en caché y **sólo se recalculan cuando alguna de sus dependencias reactivas cambia**. Esto significa que si los datos subyacentes no han cambiado, Vue.js no volverá a ejecutar el cálculo, lo que puede mejorar significativamente el rendimiento. Son ideales para valores derivados que dependen de otros datos reactivos y que no necesitan recalcularse en cada actualización del componente.

```vue
<!-- Ejemplo de uso de una función -->
<!-- Problema: calculateTotal se ejecutará en cada actualización del componente, incluso si items no ha cambiado. -->
<template>
  <article>
    <p>Total: {{ calculateTotal() }}</p>
  </article>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([1, 2, 3, 4, 5]);

function calculateTotal() {
  return items.value.reduce((total, item) => total + item, 0);
}
</script>
```

```vue
<!-- Ejemplo de propiedad conmutada que sólo se recalcula cuando una de sus dependencias cambia -->
<template>
  <article>
    <p>Total: {{ total }}</p>
  </article>
</template>

<script setup>
import { ref, computed } from 'vue';

const items = ref([1, 2, 3, 4, 5]);

const total = computed(() => {
  console.log("Calculando total...");
  return items.value.reduce((total, item) => total + item, 0);
});
</script>
```


```vue
<!-- Ejemplo complejo de propiedad computada -->
<template>
  <article>
    <h1>Lista de Productos</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - ${{ product.price }}
        <input type="checkbox" v-model="product.selected" />
      </li>
    </ul>
    <p>Total: ${{ totalPrice }}</p>
  </article>
</template>

<script setup>
  import { ref, computed } from 'vue';

  const products = ref([
    { id: 1, name: 'Producto 1', price: 10, selected: false },
    { id: 2, name: 'Producto 2', price: 20, selected: false },
    { id: 3, name: 'Producto 3', price: 30, selected: false },
  ]);

  // Gracias a la reactividad, cada vez que el estado de selected cambia en cualquiera de los productos, totalPrice se recalcula automáticamente y el DOM se actualiza para reflejar el nuevo total
  const totalPrice = computed(() => {
    return products.value
      .filter(product => product.selected)
      .reduce((total, product) => total + product.price, 0);
  });
</script>

<style scoped>
  ul{
    padding:0px;
  }
</style>
```