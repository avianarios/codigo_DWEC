# Index

1. [Synchronous and asynchronous programming](#1--synchronous-and-asynchronous-programming)
2. [JavaScript code execution](#2--javascript-code-execution)
  1. [The event cycle](#21--the-event-loop)
  2. [Management of Asynchronous Operations](#22--management-of-asynchronous-operations)
  3. [Why is asynchrony necessary on the web?](#23--why-is-asynchronous-programming-necessary-on-the-web)
  4. [Strategies to improve interactivity](#24--strategies-to-improve-interactivity)
3. [Mechanisms to achieve asynchronysm](#3--mechanisms-for-achieving-asynchronysm)
  1. [Global functions](#31--global-functions)
  2. [Events](#32--events)
  3. [Callbacks and Events](#33--callbacks-and-events)
  4. [Then/Catch Promises](#34--promises-thencatch)
  5. [Async/await-promises](#35-promises-with-asyncawait)
  6. [Web workers](#36-web-workers)
4. [AJAX (ASynchronous JavaScript and XML)](#4--ajax-asynchronous-javascript-and-xml)
----

# 1- Synchronous and Asynchronous Programming

In JavaScript, code execution can be **synchronous** or **asynchronous**. Understanding this difference is essential when working with time-dependent operations, such as loading external scripts, HTTP requests, or file access.

## Synchronous Programming

In a synchronous environment, instructions execute in the order they appear in the code, sequentially and blocking. This means that one task must complete before the next one can begin. Example with a heavy process:

```javascript
console.log("Start");

function heavyProcess() {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += i;
    }
    console.log("Heavy process finished", sum);
}

heavyProcess();
console.log("End");
```

Output:
```
Start
Heavy process finished 499999999500000000
End
```

Here, the loop blocks execution until it finishes, making "End" appear only after the heavy process is complete.

## Asynchronous Programming

In an asynchronous environment, some operations can run in the background, allowing the program to continue with other tasks while waiting for completion. The asynchronous version of the previous code can be implemented with `setTimeout`:

```js
console.log("Start");

function heavyProcessAsync() {
    setTimeout(() => {
        let sum = 0;
        for (let i = 0; i < 1e9; i++) {
            sum += i;
        }
        console.log("Heavy process finished", sum);
    }, 0);
}

heavyProcessAsync();
console.log("End");
```

Output:
```
Start
End
Heavy process finished 499999999500000000
```

Here, `setTimeout` allows "End" to be printed before the heavy process finishes, improving application responsiveness.

---

# 2- Execution of JavaScript code

## 2.1- The event loop

The **event loop** defines how JavaScript handles code execution. To run a program, the JavaScript engine has three data structures that determine when each instruction is processed: the **call stack**, the **microtask queue**, and the **task queue**.

- **Call Stack**: This is where **synchronous code** is placed for execution. To execute a program, JavaScript sequentially takes each instruction, in the defined order, and does the following:
  - It analyzes whether it is syntactically correct.
  - If incorrect, it throws an error and stops execution. If correct, it pushes it onto the call stack.
  - If it is a regular instruction, it executes it and removes it from the stack. If it is a function call, each function call is pushed and executed, and the function call does not leave the stack until all its instructions have finished executing.

- **Microtask Queue**: Contains the most urgent **asynchronous code**. It executes after all synchronous code in the call stack is processed. Promises, `MutationObserver`, and tasks added via `queueMicroTask()` go here. Once a microtask starts, it **cannot be interrupted**.

- **Task Queue**: Contains lower-priority **asynchronous code**, such as user and I/O events and timers (`setTimeout` and `setInterval`). These tasks have the lowest priority and will execute only when the call stack and microtask queue are empty. When moved to the call stack, they **can be interrupted** by microtasks.

The **event loop** moves tasks from the task queue to the call stack following these steps:
1. The event loop constantly checks if the call stack is empty.
2. If the call stack is empty, the event loop moves the first microtask to the call stack.
3. If no microtasks are pending, it moves a task from the task queue.
4. The process repeats continuously.

## 2.2- Management of asynchronous operations

Asynchronous operations are placed in the task queue and do not execute immediately. They execute once the call stack is empty (i.e., all synchronous code has run). This mechanism makes JavaScript non-blocking.

### Example:
```javascript
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('End');
```

Execution order:
1. **'Start'** is printed first because it is synchronous.
2. `setTimeout` is placed in the task queue. Even with a 0ms delay, it does not execute immediately.
3. **'End'** is printed next since it is synchronous.
4. Once the call stack is empty, the event loop moves `setTimeout`'s callback to the stack.
5. **'Timeout'** is printed after all synchronous code has finished.


## 2.3- Why is asynchronous programming necessary on the web?
Let's imagine three synchronous instructions:
```javascript
const img = new Image();
img.src = ‘https://cataas.com/cat’;
document.body.append(img);

//rest of instructions
```

The second instruction makes a request to an external resource to download an image. That instruction makes the request, but the message has to travel the path between the client and the server, and the server has to receive it, process it and send the resource back to the client. The client has to travel the path that separates them, reach the client, and the client has to process it. And all this before the third instruction is executed. Most likely, by the time the message arrives, the third instruction will have already been executed and an empty image will have been inserted into the DOM.

Why doesn't synchronous code work well in this case?
The problem here is that instructions execute synchronously so one instruction executes when the previous one has finished, but for instructions that make a request for resources, finishing means making the request, not receiving the response. The execution of the rest of the instructions continues without waiting for the response, which can cause problems if the next code depends on it. 

Solution: make the third instruction wait for the second instruction, on which it depends, to finish executing and receive the resource it has requested. This would cause the main thread to block and the rest of the instructions would not be executed. To avoid this, asynchrony is used. 

## 2.4- Strategies to improve interactivity

If a script is performing complex calculations or DOM manipulations, asynchronous operations do not block the execution of synchronous code, allowing the main thread to respond quickly to other tasks but allowing asynchronous operations to take a few milliseconds to process. The problem comes when you are doing more complex operations that take up a lot of CPU time, in which case the asynchronous operations may take longer to respond.

To enhance asynchronous response times, consider the following strategies:
- **Break large tasks into smaller ones**: If a heavy task must run synchronously, divide it into smaller synchronous tasks and use asynchronous functions to "pause" between fragments. This allows the event loop to process other events (like user interactions) while smaller tasks complete.
- **Convert synchronous operations to asynchronous**: Move non-urgent synchronous tasks to asynchronous execution to prevent blocking the call stack and ensure smoother execution of asynchronous tasks.
- **Optimize UI updates and DOM manipulation**: Efficiently update the DOM to avoid queuing excessive tasks in the call stack, which could impact application responsiveness.

----

# 3- Mechanisms for achieving asynchronysm

## 3.1- Global functions

The global functions `setTimeout` and `setInterval` allow executing code asynchronously after a specified time.
- `setTimeout` executes a function after a period of time.
- `setInterval` executes a function repeatedly at regular intervals.

Both functions do not block the execution of the rest of the code and instead use the JavaScript event loop to handle the delay.
```javascript
console.log('Before setTimeout');
setTimeout(() => {
    console.log('This executes after 2 seconds');
}, 2000);
console.log('After setTimeout');
```
Output:
```
Before setTimeout
After setTimeout
This executes after 2 seconds
```

## 3.2- Events

In JavaScript, events are a fundamental part of user interaction, such as button clicks, page scrolling, or form submissions. While they are not always considered "asynchronous methods," events work asynchronously due to how the JavaScript engine handles their execution.

When an event, such as a button click, is triggered, JavaScript places the event handler in the task queue to be executed once the execution stack is empty. This means that asynchronous code (the event) does not interrupt the synchronous flow of the program.

Therefore, the event will not execute immediately if there are synchronous tasks in the execution stack, but it will respond as soon as the stack is empty.

Thus, if a script is performing complex calculations or DOM manipulations, a click event or other user interaction might take a few milliseconds to process, as the asynchronous code (the event) does not block the main execution thread. In more complex operations that take up a lot of CPU time, the event might take longer to respond.

```javascript
// Simulating a complex synchronous operation
function calculateLongOperation() {
    console.log('Starting long operation...');
    for (let i = 0; i < 1e6; i++) {  // A long loop to block the main thread
        // Simulating intensive task
        console.log(i)
    }
    console.log('Long operation finished');
}

document.getElementById('button').addEventListener('click', () => {
    console.log('Click detected!');
    setTimeout(() => {  // Using setTimeout to simulate an asynchronous action
        showMessage("button clicked", "eventMessage");
    }, 0);
});

// Run the long operation, which blocks the thread
calculateLongOperation();
```
Output:
```
Starting simple operation
Simple operation finished
Click detected!
Complex calculation finished
Complex operation requested
```

## 3.3- Callbacks and events

Until ES6 (2015), asynchronicity was handled through callback functions and events. A **callback** is a response function passed as an argument to another function and executed once the latter has finished.

```javascript
// Dynamically loading a script with a callback
function loadScript(src, callback) {
    var script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.addEventListener('load', callback);
    document.head.append(script);
}
document.getElementById("button").addEventListener('click', () => {
    loadScript('https://code.jquery.com/jquery-3.7.1.min.js', () => {
        console.log('jQuery has been loaded successfully');
        $('body').css('background-color', 'lightcoral');
    });
});
```

1. When clicking the button with the id "button", the function `loadScript` is called with two parameters: the script to load and a callback function that will execute when `loadScript` finishes.
2. The `loadScript` function 
    1. Creates a `<script>` element in memory
    2. Assigns the `src` and `type` parameters.
    3. Defines a `load` event on the script to execute the callback function when the script loads. The callback function is defined in the second parameter of `loadScript` (it’s an arrow function that logs to the console and changes the background-color of the body).
    4. Adds the script to the `head`, at which point the browser starts its download.

Using the `callback` and `load` event ensures that actions depending on the loaded script (such as using `$` from jQuery) only execute when the script is available. Without this mechanism, we could try to use jQuery before the browser had downloaded and processed it, causing errors.

Callbacks are an effective solution, but they can lead to code that is difficult to read, understand, and maintain when multiple asynchronous functions are chained. This is called **callback hell**.

```javascript
// Callback hell
function loadScript(scriptName, callback) {
    const script = document.createElement('script');
    script.src = scriptName;

    // If an error occurs while loading the script
    script.onerror = function() {
        callback(new Error('Error loading script: ' + scriptName), null);
    };

    // If the script loads successfully
    script.onload = function() {
        callback(null, script);
    };

    // Add the script to the document to start the load
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
            // ...continue after all scripts are loaded (*)
          }
        });

      }
    });
  }
});
```

To address this, modern JavaScript uses **promises** and `async/await`, making it easier to manage asynchronicity in a more structured way.

---

## 3.4- Promises then/catch

Promises were introduced in ES6 (ES2015) to simplify the management of asynchronous code and error handling, as well as the chaining of operations. They are objects that represent the current state of an asynchronous operation. A promise can be in one of three states:
- `Pending`: The asynchronous operation has not finished yet.
- `Fulfilled`: The asynchronous operation has completed successfully.
- `Rejected`: The asynchronous operation failed.

The promise object provides the following methods:
- `then()`: Handles the result when the promise is resolved (when successful).
- `catch()`: Handles errors when the promise is rejected.
- `finally()`: Executes after the promise is resolved or rejected, regardless of what happened.
- `all()`: Allows you to wait for multiple promises to resolve in parallel and return a promise when all promises in the array are resolved. If any promise is rejected, `.all()` rejects all of them.
- `race()`: Takes an array of promises and returns a new promise that resolves or rejects as soon as the first promise resolves or rejects.
- `allSettled()`: Allows you to wait for all promises to settle, regardless of whether they were resolved successfully or rejected. Returns an array of objects containing the state and value (or rejection reason) of each promise.
- `any()`: Works similarly to `Promise.race()`, but instead of resolving with the first promise that resolves, it resolves with the first promise that does not reject.

To illustrate how promises work, we will use the fetch API, which allows handling HTTP connections using:
- `Request`: Represents an HTTP request. You can use it to customize request details before passing it to fetch().
- A `fetch(URL)` function, which returns a promise to a Response object.
- `Response`: Represents the response to an HTTP request made with fetch(). It includes the following properties and methods to work with the response body:
    - `ok`: Indicates if the response was successful (status code 200-299).
    - `status`: HTTP status code of the response.
    - `statusText`: Message associated with the HTTP status code.
    - `headers`: HTTP headers of the response.
    - `url`: URL of the response.
    - `type`: Response type (e.g., "basic", "cors", etc.).
    - `body`: The body stream of the response.
    - `json()`: A method to read the response as JSON.
    - `blob()`: A method to read the response as a blob (binary large object). Commonly used for handling files, such as images, videos, audio, or even document files.
    - `text()`: A method to read the response as text.
- `Headers`: Represents the HTTP headers you can add to requests or responses. It allows you to configure request headers or inspect response headers.
- `FormData`: Although not an object exclusive to the Fetch API, it is used with fetch() to send form data (e.g., for file uploads).

Workflow:
- An HTTP request is made with fetch, which returns a promise.
- The methods of the `promise` object are used to interact with the promise:
  - `.then` when resolved
  - `.catch` when rejected
- The promise resolves with a `Response` object, which represents the HTTP response.
- You check what the server responded with (200, 403, 404, etc.). You can use `response.ok`, which checks for a 200 status, or `response.status`.
- If the response is 200, you access the response data using the methods of the `response` object, such as `.json()`, `.text()`, or `.blob()`, depending on the type of expected response.


```javascript
// Handling asynchrony using fetch, which returns a promise. Here, it is managed by chaining .then (ES6)
function getJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('There was a problem with the request');
      }
      return response.json(); // Convert the response to JSON
    })
    .then(data => {
      // Work with the data once the promise is resolved
      console.log(data);
    })
    .catch(error => {
      // If there was an error (in the request or while processing the data)
      console.error('Error:', error);
    });
}
```

```javascript
// Using blob to load an image
function getPhoto() {
  fetch('https://picsum.photos/300')
    .then(response => response.blob())
    .then(blob => {
      const imageURL = URL.createObjectURL(blob);
      const img = `<img src="${imageURL}" alt="Random Image"/>`;
      showMessage(img, "messagePromises", false);
    })
    .catch(error => console.error('Error loading the image:', error));
}
```

```javascript
// Example of Promise.all
const promise1 = Promise.resolve(3); // Resolves immediately with the value 3
const promise2 = Promise.resolve(5); // Resolves immediately with the value 5
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 100, 10)); // Resolves after 100 ms with the value 10

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); // [3, 5, 10]
  })
  .catch(error => {
    console.error(error); // If any promise is rejected, it is handled here.
});
```

```javascript
// Example: Loading Images with Cache Avoidance
// The API call is https://cataas.com/cat, but if three calls are made, the browser downloads the first one, caches it, and serves the same image for the other two requests instead of making additional API calls.
// Solution: Many APIs ignore extra parameters in the URL. Therefore, you can add the request timestamp or a random number as a parameter. The browser will detect it as a different request and won't serve the same image from the cache.
function generateURL() {
  return `https://cataas.com/cat?${Date.now()}_${Math.random()}`;
}

// Function to load an image asynchronously
function loadImage(url) {
  // The Promise object accepts two arguments: a function to execute if the promise is resolved and a function to execute if it is rejected.
  return new Promise((resolve, reject) => {
    // new Image() creates a JavaScript object that can be used more freely for background tasks like preloading images, manipulating them with a canvas, or working with them without immediately displaying them in the DOM (which is also possible).
    const image = new Image();
    image.src = url;

    // When the image loads successfully (the image has been downloaded successfully), we mark the promise as resolved (success) to continue. This allows the code waiting for the promise (using .then()) to continue execution, now that the image is loaded.
    image.onload = () => resolve(image);

    // If an error occurs while loading the image, we mark the promise as rejected so that the code waiting for .catch can continue execution.
    image.onerror = () => reject(`Error loading the image: ${url}`);
  });
}

document.getElementById("loadCats").addEventListener("click", () => {
  const promise1 = loadImage(generateURL());
  const promise2 = loadImage(generateURL());
  const promise3 = loadImage(generateURL());

  Promise.all([promise1, promise2, promise3])
    .then(images => {
      images.forEach(image => {
        document.body.append(image);
      });
    })
    .catch(error => {
      console.error(error);
    });
});
```

### About connecting to APIs
Some APIs require the user to register in order to provide a key (API-KEY) with which to make requests. Without this, requests are not accepted. It is a way to know the origin of the requests, to protect against abusive uses or to bill if the API is paid.

```javascript
//API that needs a key to work. This key is no longer active
const apiKey = live_CPJRXuair6Xd5DZBqUFF1ISr97GQL1Lrl5fxxE5gLqalbTHn0AnGZWGs6aSbU20o;
async function getQuotes() {
    const url = ‘https://api.api-ninjas.com/v1/quotes’;
    const response = await fetch(url, {
        method: ‘GET’,
        headers: {
            ‘X-Api-Key’: apiKey
        }
    });
    if (!response.ok) {
        throw new Error('Error getting quotes: ’ + response.statusText);
    }
    return response.json();
}
```

Since it is personal, it is crucial not to expose these keys in publicly shared source code, such as in GitHub repositories. If they are accidentally uploaded, anyone could use them, which could lead to misuse of resources, unexpected costs or even compromise the security of the application.

To avoid exposing API keys, there are several best practices to follow:
  - **Review the security of API keys**: It is always advisable to review the permissions associated with API keys, limiting them to only necessary actions and to specific IP addresses or IP ranges. This reduces the risk in case a key is accidentally exposed.

  - Use of secrets management tools: 
    - **Remotes**: Services such as AWS Secrets Manager, Azure Key Vault or Google Secret Manager offer secure ways to store and access secrets centrally and without the need to store them locally.
    - Local**: There are also alternatives such as **dotenv** in combination with local development environments such as **Parcel** or Webpack to load these values automatically into applications. The latter is what will be used here.
  

### Configuring dotenv

dotenv is a popular tool in the software development world that allows you to manage environment variables in a simple and safe way. It is commonly used in Node.js projects and other JavaScript environments to load sensitive settings, such as API keys, passwords or database credentials, without having to write them directly into the source code.

dotenv is a package for node that works with a `.env` file, which contains a list of environment variables in key=value format. This file **must be placed in the root of the project, and must be out of version control** (i.e. it must be added to the `.gitignore` file to prevent it from being uploaded to GitHub).
  ```bash
  # Install dotenv on node
  npm install dotenv
  ```

  ```json
  // Contents of .env
  API_KEY=your_key_here
  DB_PASSWORD=my_secure_password
  PORT=3000
  ```

After loading the `.env` file with `dotenv.config()` into the javascript file, all variables defined in it are stored in `process.env` and can be used like any other environment variable.


Usage in the JavaScript file:
  ```javascript
  // Import dotenv
  import dotenv from `dotenv`;

  // Load the environment variables from the .env file
  dotenv.config();

  // Access an environment variable
  const apiKey = process.env.API_KEY;
  //When characters are not allowed or intermediate variables are used, square brackets are used.
  //const apiKey = process.env[‘API-KEY-NINJAS’];

  async function getQuotes() {
    const url = ‘https://api.api-ninjas.com/v1/quotes’;
    const response = await fetch(url, {
      method: ‘GET’,
      headers: {
        ‘X-Api-Key’: apiKey
      }
      ...
  ```
  
### Benefits of using dotenv:

  - **Security**: Keeping keys and credentials out of source code helps prevent them from leaking into public or private repositories. This is especially important for projects that have sensitive configurations such as API keys, access tokens or passwords.

  - **Ease of configuration: Allows configurations to be changed without modifying the code. This is useful when having different configurations for development, test and production environments, without having to change the application code.

  - **Portability**: Developers can share code without having to share sensitive credentials. They simply need to ensure that the .env file is present and configured correctly in each environment.

-----

## 3.5 Promises with `async/await`

The ES2015 (ES6) syntax handles asynchrony well but allows chaining multiple `.then` and `.catch`, which can sometimes be confusing. ES2017 (ES8) continues to manage asynchrony with promises but introduces a new syntax to handle them in a more readable and structured way, allowing asynchronous code to look more like synchronous code. To achieve this, it uses two elements that replace `.then()` and `.catch()`:
  - `async` is used when declaring a function and makes it return a promise. If a value is returned inside the function, it is automatically wrapped in a resolved promise.
  - `await` can only be used inside `async` functions and allows waiting for the result of a promise before continuing execution.

  ```javascript
  // Example of an independent asynchronous function with error handling
  async function fetchData() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      if (!response.ok) {
          throw new Error(`Request error: ${response.status} ${response.statusText}`);
      }
      let data = await response.json();
      console.log(data);
    } catch (error) {
        console.error("There was a problem fetching the data:", error);
    }
  }

  fetchData();
  ```

```javascript
  // Handling asynchrony using fetch, which returns a promise. Here, it is managed with `await` (ES8).
  document.querySelector("botonChiste").addEventlistener("click", async()=>{
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');  // Execution pauses at `await fetch(...)` until the promise is resolved, avoiding nested `.then()` calls.
      if (!response.ok) throw new Error('There was a problem with the request');   // Check if the response is successful
      const data = await response.json(); // Convert the response to JSON
      console.log(data);  // Now you can work with the received data
    } catch (error) {
      console.error('Error:', error);   // If there was an error (in the request or while processing the data)
    }
  });
  ```

  ```javascript
  // Function to load an image, returns a promise
  function loadImage(url) {
    // The Promise object accepts two arguments: a function to execute if the promise is resolved and a function to execute if it is rejected.
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = url;

      // When the image loads, resolve the promise
      image.onload = () => resolve(image);

      // If an error occurs, reject the promise
      image.onerror = () => reject(`Error loading the image: ${url}`);
    });
  }

  // Main function to load multiple images using `async/await`
  document.querySelector("botonImagenes").addEventListener("click", async()=>{
    try {
      // `await` waits until the promise is resolved (or rejected)
      // `Promise.all` will return a resolved promise when all promises are resolved or reject if any promise is rejected
      const images = await Promise.all([
        loadImage('https://via.placeholder.com/150'),
        loadImage('https://via.placeholder.com/200'),
        loadImage('https://via.placeholder.com/250')
      ]);

      // If all images load successfully, append them to the DOM
      images.forEach(image => {
        document.body.append(image);
      });
    } catch (error) {
      // If any promise is rejected (error loading an image)
      console.error(error);
    }
  });
  ```

Differences Between .then() and async/await
| Feature      |  `.then()` | `async/await` |
|--------------------|----------------|------------|
| Code Readability | Harder to read with multiple chained promises | More readable, it looks like synchronous code |
| Error handling | `.catch()` | `try/catch` |

----

## 3.6 Web Workers

### Execution Threads

The JavaScript engine in most environments (such as the browser or Node.js) uses a single execution thread to handle JavaScript code. This thread is responsible for:
- Executing synchronous code (instructions that go directly to the execution stack).
- Processing asynchronous tasks (moving them from the microtask queue and the task queue to the execution stack).

The event loop and structures used allow the JavaScript engine to handle asynchrony efficiently, without blocking the main thread. However, even so, with a single thread, only one instruction can be executed at a time. 

What happens when the code needs to do intensive tasks, such as processing large volumes of data or complex computational tasks that are normally synchronous? The main thread crashes. To solve this, JavaScript provides a way to delegate work to other threads via web workers.

Therefore, **web workers** are a JavaScript feature that allows scripts to run in the background, on a separate thread from the main execution thread, to avoid blocking the user interface in situations such as:
  - Processing highly intensive tasks.
  - Manipulating large amounts of data.
  - Operations that do not require interaction with the user interface.


### Features:
  - **Separate Threads**: They run on a separate thread, enabling multitasking.
  - **No Access to the DOM**: They do not have direct access to the DOM (Document Object Model) or global variables from the main thread.
  - **Message-Based Communication**: Communication between the main thread and the worker is done through messages (using `postMessage` and listening to `message` events).


### `self`
In the context of a web worker, `self` refers to the worker itself, i.e., the execution thread running in the background. It is the equivalent of `this` in a normal execution environment. It can be used to: listen for messages (with `onmessage`) and send messages (with `postMessage()`).


### Methods

- **`postMessage(message)`**: Sends a message to the web worker.
  ```javascript
  // To send multiple messages, it is better to do it as a composite message in object form.
  // Avoids possible race conditions: If the messages are processed in different order, you might receive ‘finished’ before ‘The result is: ...’.
  // Improves clarity: The structure of the message is better understood without depending on the order of arrival.
  // Makes it easier to expand: You can include more information without having to send multiple messages.

  // In the main thread
  worker.postMessage({ action: 'start', data: 'Hello, worker' });

  // In the web worker
  self.postMessage({ result: 'Task completed' });
  ```

- **terminate()**: Stops the worker and releases resources.
  ```javascript
  worker.terminate();
  ```

- **close()**: Similar to terminate, but called inside the worker.
  ```javascript
  self.close();
  ```

### Events

- **`message`**: Triggered when the worker sends a message back.
    ```javascript
    worker.onmessage = function(event) {
        console.log('Message from worker:', event.data);
    };

- **`messageerror`**: Triggered when an error occurs while deserializing a message (e.g., from JSON to an object) received by the worker or the main thread.

- **`error`**: Triggered if an error occurs inside the worker.
  ```javascript
  worker.onerror = function(event) {
      console.error('Error in worker:', event.message);
  };
  ```

### Creating Workers

Web workers are created using the Worker constructor, which takes the URL of a JavaScript file containing the code to be executed in a separate thread.
```javascript
  const worker = new Worker('worker.js');
```

#### Option 1: Creating Workers Using Separate Files
  1. **Create the worker file** (e.g., worker.js), which will contain the code to be executed in the separate thread and the code to handle the messages to be sent to and received from the main thread.
    ```javascript
    // worker.js
    self.onmessage = function(event) {
        // Code executed by the worker
        console.log('Message received from main thread:', event.data);
        self.postMessage('Task completed');
    };
    ```
  2. **Create a worker in the main thread (in `main.js`)** by passing as an argument to the constructor the JavaScript file containing the worker

    ```javascript
    // main.js
    const worker = new Worker('worker.js');

    // Send a message to the worker
    worker.postMessage('Start task');

    // Listen for messages from the worker
    worker.onmessage = function(event) {
        console.log('Message from worker:', event.data);
    };
    ```

  3. **Handle communication between the main thread and the worker**
    The main thread and the worker communicate using the `postMessage` method:
      - The main thread uses `worker.postMessage()`.
      - The worker uses `self.postMessage()`.

    ```javascript
    Complete Example of Web Worker Usage
    main.js (Main Thread):

    // Create the worker
    const worker = new Worker('worker.js');

    // Send a message to the worker
    worker.postMessage('Start task');

    // Listen for messages from the worker
    worker.onmessage = function(event) {
        console.log('Response from worker:', event.data);
    };

    // Handle worker errors
    worker.onerror = function(error) {
        console.error('Error in worker:', error.message);
    };

    worker.js (Worker):
    javascript

    // Listen for messages from the main thread
    self.onmessage = function(event) {
        console.log('Message received:', event.data);

        // Perform a task (simulating a heavy task)
        let result = 0;
        for (let i = 0; i < 1e6; i++) {
            result += i;
        }

        // Send the result back to the main thread
        self.postMessage('Result: ' + result);
    };
    ```

    ```javascript    
    // Example of what workers do but by using promises
    // Difference:
    //     The promise is placed in the microtask queue. Once the queue is empty, it enters the call stack and monopolizes the main thread until it finishes.
    //     The worker runs in a separate thread and never blocks the main thread.
    function heavyTask() {
        return new Promise((resolve) => {
            let result = 0;
            for (let i = 0; i < 1e9; i++) { // Heavy loop
                result += i;
            }
            resolve(result);
        });
    }

    console.log("Task started");

    heavyTask().then((result) => {
        console.log("Result:", result);
    });

    console.log("Task in progress...");
    ```

#### Option 2: Using the Blob Function
**Not recommended**. When the worker code is small you can define the worker directly within the main file using the `Blob` method. 

  ```javascript
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
      console.log('Worker result:', event.data);
  };
  ```

----

# 4- AJAX (ASynchronous JavaScript and XML)
AJAX is a web development technique that allows web applications to send and receive data from a server asynchronously **without the need to reload the entire page, reloading only the affected parts**. This improves the user experience by making applications faster and more dynamic.

Although the name includes ‘XML’, AJAX is not limited to this format. Nowadays, it is more common to use JSON (JavaScript Object Notation) as a data exchange format due to its lightness and ease of use.

AJAX, therefore, is not a development technique that combines several technologies which, in modern practice, are usually JavaScript + Fetch for asynchronous requests. However, they are not the only ones
  - **JavaScript and fetch**
  - **Axios with async/await**, a JavaScript library for handling HTTP requests
  - **jQuery with $.ajax()**, which is a JavaScript library that simplifies DOM (Document Object Model) manipulation, event handling, animation, and HTTP requests 
  - **Websockets**, which allows two-way communication between client and server over a single persistent channel. It is especially useful for real-time applications, such as chat or live monitoring applications.
  - **GraphQL with fetch**, which is a query language for APIs and a runtime environment for APIs.


## How does AJAX work?
1. The user performs an action on the page (e.g. clicking a button or submitting a form).
2. An HTTP request is sent to the server in the background.
3. The server processes the request and returns a response (usually in JSON or XML format).
4. The program receives the response and updates the affected parts of the page without completely reloading it.