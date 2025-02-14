/*Exercise 1

Description: Simulate a user authentication system that uses several JavaScript object concepts.

    Object Creation and Encapsulation:
        Define a constructor function User that takes username, email, and password.
        Make password a private property and add methods getPassword and setPassword to access and modify it.

    Property Verification and Protection:
        Add a lastLogin property to User with a default value of null, and a method updateLoginTime to update this property with the current date.
        Ensure email cannot be modified after the object is created.

    Inheritance and Method Overriding:
        Define a constructor function Admin that inherits from User and adds a permissions array.
        Override the updateLoginTime method in Admin to log a custom message when the admin logs in.

    Context and Iteration:
        Add an external function printPermissions that uses call to print the permissions of an admin object.
        Iterate through the properties of a User instance, displaying only those that are not private.

    Copying and Optional Chaining:
        Create a copy of the user object, excluding private properties and lastLogin.
        Use optional chaining to access properties like permissions in the copied object.

Expected Result: An object structure representing a user system with encapsulation, inheritance, protected properties, and optional chaining.*/


/*Exercise 2

Description: Create a library book management system using JavaScript objects and multiple concepts.

    Object Creation and Encapsulation:
        Define a constructor function Book that takes title, author, and pages.
        Make pages private and add get and set methods to access and modify it.

    Inheritance and Method Overriding:
        Create a DigitalBook constructor that inherits from Book and adds a format property (e.g., PDF, EPUB).
        Override the getPageCount method in DigitalBook to indicate that the page count may vary depending on the format.

    Protection and Property Existence:
        Ensure title cannot be deleted once it is created.
        Add a property available that is set dynamically and check for its existence before accessing it.

    Copy and Iteration:
        Create a copy of a Book instance without private properties.
        Iterate over all public properties of a DigitalBook object, excluding those inherited from Book.

    Context and Optional Chaining:
        Define an external function displayBookInfo that takes a context and displays the title, author, and availability using call.
        Use optional chaining to safely access properties like format.

Expected Result: A library book system where Book and DigitalBook objects represent physical and digital books, including encapsulation, inheritance, and optional chaining.*/


/*Exercise 3

Description: Simulate a task management system with objects that use multiple concepts.

    Object Creation and Encapsulation:
        Define a constructor function Task that takes title, description, and completed (initialized to false).
        Make completed a private property, with its corresponding get and set methods to change its value.

    Instance Methods and Dynamic Modification:
        Add a completeTask method that changes completed to true.
        Add a dynamic completionDate property to the task when it is completed, with a check to prevent it from being changed more than once.

    Inheritance and Overriding:
        Create a constructor function ImportantTask that inherits from Task and includes a priority property.
        Override the completeTask method to send a priority alert when the task is completed.

    Iteration and Protection:
        Ensure that title cannot be modified once the task is created.
        Iterate over the public properties of an instance of ImportantTask and print only those that are configurable and enumerable.

    Copying and Context:
        Create a copy of the task without the private completed property.
        Add an external function showDetails that uses call to execute in a specific task context and displays its details.

Expected Result: A structure of objects representing a list of tasks with priorities, encapsulation, and property protection.*/


/*Exercise 4

Description: Implement an inventory system with a hierarchy and protected properties.

    Object Creation and Encapsulation:
        Define a constructor function Product that takes name, price, and stock.
        Encapsulate stock as a private property and add increaseStock and decreaseStock methods.

    Instance Methods and Existence Check:
        Implement a checkStock method that returns true or false depending on whether stock is greater than 0.
        Add an available property that uses a getter to return the value of checkStock.

    Inheritance and Overriding:
        Define a constructor function DigitalProduct that inherits from Product and does not depend on stock.
        Override the checkStock method in DigitalProduct to always return true.

    Protection and Copies:
        Ensure that price cannot be modified once assigned.
        Make a copy of the object, excluding private properties and allowing modifications.

    Iteration and Context:
        Create an external function displayAvailability that uses call to access available and returns a message based on stock.
        Use for...in to iterate through the properties of a Product instance, displaying only public ones.

Expected Result: An object structure that represents an inventory system with inheritance, encapsulation, and protected properties.



/*Exercise 5

Description: Implement a user and admin structure with access control and property protection.

    User Creation and Encapsulation:
        Define a constructor function User that takes name and email.
        Make email a private property with getEmail and setEmail methods to access and modify its value.

    Inheritance and Method Overriding:
        Define a constructor function Admin that inherits from User and adds the permissions array.
        Override the getEmail method in Admin to include an additional message if the user is an admin.

    Dynamic Modification and Protection:
        Dynamically add an active property to the user and prevent it from being deleted.
        Add a modifyPermissions method in Admin to add or remove permissions.

    Context and Iteration:
        Add an external function printPermissions that uses call to print the permissions of an Admin object.
        Use for...in to iterate through the properties of User, excluding email.

    Copies and Optional Chaining:
        Create a copy of an Admin object without private properties.
        Use optional chaining to access properties like permissions and other methods of User and Admin.

Expected Result: A structure of users and admins with encapsulation, access control, inheritance, and property protection.*/



/*Exercise 6

Description: Create an event system that simulates a calendar with inheritance, protection, and advanced methods.

    Event Creation and Initialization:
        Define a constructor function Event that takes title, date, and location.
        Make location a private property with get and set methods.

    Methods and Inheritance:
        Add a postpone method in Event that accepts a new date and updates the event.
        Define a constructor function ImportantEvent that inherits from Event and overrides postpone to also log the original date.

    Property Protection and Existence Check:
        Ensure title cannot be modified or deleted once created.
        Check if location exists before accessing or changing it, displaying a message if it doesn’t.

    Copy and Iteration:
        Create a copy of an Event instance, excluding private properties.
        Iterate over all properties of ImportantEvent, excluding those from Event.

    Context and Optional Chaining:
        Create an external function showEventDetails that takes an event context and accesses date and location using optional chaining.
        Use call to execute this function on an ImportantEvent instance.

Expected Result: A calendar event structure that includes encapsulation, inheritance, and property verification in an event calendar context with important events.*/


/*Exercise 7. Object Creation and Initialization + Access to Methods and Properties + Dynamic Modification of Object

Create an object user with properties: firstName, lastName, age, and a method getFullName that returns the full name. Then, dynamically add a gender property and update the age to a new value. Finally, log the result of calling getFullName() and the updated object.*/


/*Exercise 8. Iteration and Copying + Destructuring + Encapsulation

Create an object book with properties: title, author, and chapters (an array of strings).
Iterate over the properties of the object and create a shallow copy of the object, excluding the chapters property. Then, destructure the copied object to extract the title and author. Finally, encapsulate the chapters array by making it a private property and creating a way to access it.*/


/*Exercise 9. Correct Use of Context (this) + Setting Context with call and bind + Overriding

Create an object person with properties name and city, and a method describe that uses this to return a string with the person's name and city.
    -Change the context and invoke describe with a new person object and a different city.
    -Then, create a subclass Employee with an overridden describe method that includes the job title. Use a technique to bind the describe method to a specific context and log the result.*/


/*Exercise 10. Inheritance + Static Methods and Properties + Mixins

Create a class Shape with properties x and y (coordinates), and a method area (returns a default value of 0).
Create a subclass Rectangle that inherits from Shape and has properties width and height, and overrides the area method to return the area of the rectangle.
Then, create a mixin Colorable with a method setColor to assign a color to the shape. Use the mixin in the Rectangle class and log the color of a Rectangle instance.
Add a static method getShapeType in the Shape class that returns the string "Shape", and use it in the Rectangle class./*


/*Exercise 11. Encapsulation + Destructuring + Overriding

Create a class BankAccount with private properties for balance (using an appropriate technique) and a method getBalance. Add a method deposit that adds to the balance and withdraw that subtracts from it.

    -Override the deposit method in a subclass PremiumAccount to add a bonus to the deposited amount.
    -Use destructuring to extract the balance after a transaction and log the final amount.*/


/*Exercise 12. ?. Operator + instanceOf + Mixins + Setting Context with call and bind

Create a mixin Logger with a method log that logs a message to the console.
Create a class Person with properties name and age. Use the Logger mixin to add logging capabilities to the Person class.
Create an instance of Person and check if the log method exists before calling it.
Then, check if the instance is of type Person. Additionally, invoke the log method with a specific context, such as a name argument.*/


/*Extra 1:
There’s a number object that allows to add and subtract:
let number = {
    current: 0,
    add() {
        this.current++;
    },
    subtract() {
        this.current--;
    },
    showNumber: function() {
        console.log( this.current );
    }
};

Now, if we need to make several calls in sequence, can do it like this:

number.add();
ladder.add();
ladder.subtract();
ladder.add();
ladder.subtract();
ladder.showNumber();

Modify the code to make the calls chainable, like this:
    number.add().add().subtract().add().subtract().showNumber();
*/


/*Extra 2:
Create an object that represents a to-do list. The object must allow the following functionality:
    -Add a task to the list.
    -Remove a task from the list.
    -Show all tasks in the list.
    -Mark a task as completed.
    -Show completed tasks.
*/
