# Index

1. [Synchronous and Asynchronous Programming](#1--synchronous-and-asynchronous-programming)
2. [The Event Loop in JavaScript](#2--the-event-loop-in-javascript)
3. [Mechanisms to Achieve Asynchrony](#3--mechanisms-to-achieve-asynchrony)
   1. [Global Functions](#31--global-functions)
   2. [Events](#32--events)
   3. [Callbacks and Events](#33--callbacks-and-events)
   4. [Promises then/catch](#34--promises-thencatch)
   5. [Promises async/await](#35--promises-asyncawait)
   6. [Web Workers](#36--web-workers)

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

# 2- The Event Loop in JavaScript

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

## How Are Asynchronous Operations Managed?

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

## Strategies to Improve Responsiveness

If a script is performing complex calculations or DOM manipulations, asynchronous operations prevent blocking the execution of synchronous code, allowing the main thread to respond quickly to other tasks. However, complex operations using significant CPU time may delay asynchronous tasks.

To enhance asynchronous response times, consider the following strategies:
- **Break large tasks into smaller ones**: If a heavy task must run synchronously, divide it into smaller synchronous tasks and use asynchronous functions to "pause" between fragments. This allows the event loop to process other events (like user interactions) while smaller tasks complete.
- **Convert synchronous operations to asynchronous**: Move non-urgent synchronous tasks to asynchronous execution to prevent blocking the call stack and ensure smoother execution of asynchronous tasks.
- **Optimize UI updates and DOM manipulation**: Efficiently update the DOM to avoid queuing excessive tasks in the call stack, which could impact application responsiveness.

----

# 3- Mechanisms for Achieving Asynchronicity

## 3.1- Global Functions

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

## 3.3- Callback Functions and Events

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