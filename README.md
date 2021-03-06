# js-flow1
 Advanced JavaScript - Flow 1 hand-in
## Period-1 Vanilla JavaScript, es2015/15.., Node.js, Babel + Webpack and TypeScript

### Explain and Reflect:
>Explain the differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.

The differences between Java and JavaScript lies within some of the important and fundamental design choises for each of the languages. Since JS is a scripted language, the code written "compiles" at runtime, whereas in Java you need to compile the code before ever running it. This particular difference makes the languages very different, in development phase as well as at runtime. 

By compiling the code beforehand, the developer can be sure of having "safe" code that doesn't "crash" at runtime because of a syntactical error. However, compiled code can still run into an unhandeled exception at runtime, making the program exit with an errormessage. Seemingly, this method of compling can be very advantageous to the developer and be kind of a no-braniner when choosing your language, but in reality it also set a lot of requirements to the code, such as it has to be strongly typed like in this java example:
```
String str = "Hello World";
```
Here we see that the variable type is being declared by type "String" becuase it is a **Strongly (and Statically) Typed Language**

In scripted languages, the code is interpereted at runtime, making the language much more flexible and dynamic with types. This has very strong development benefits since it makes it very easy to develop code and compare values. However, "compiling" at runtime also means that the developer can make lines of code that "crashes" at runtime, causing errors in a console and wierd reprentations on a webpage. 

JS has dynamic types, which means that the language doesn't require you to specify any type when instantiating an variable:
```
var str = "Hello World"
```
Additionally, you can assing any values to an already instantiated variable:
```
str = 12
```

>Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers

Typescript is a way of making JavaScript scalable by applying many of the features such as Classes and Interfaces that a strongly typed language such as Java has. However, this way of writing JavaScript kind of erases the "Script" in the name, since it requires compilation/transpilation before runtime. In this way the TypeScript code is in the end transpiled into **"State of the web"** ECMAScript code, like the current ES5. Very smart, and very benefitial for collaborations and larger companies in the development phase.

And this is where ES6 (es2015) + ES7 takes another kind of aproach:
Here instead of adding typechecking features (among other things) to the language, newer versions of ECMAScript brings new features that has passed a voting and testing system to the language by simply transpiling the code into the State of the web ES.

>Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.

Normally JS is run in a webbrowser environment, having access to the Document Object Model, Local- and Sessionstorage among other web-related things. node.js makes JavaScript able to run in a console, which is very useful for server-side applications. To do this node.js uses its **node package manager** aka. npm to handle dependencies.

For example, you can install a dependency by simply typing following command in your project folder:
```
npm install something
```

>Explain about the Event Loop in Node.js

The normal behavioure of JS is to run all its code on one thread, which makes ayncronous tasks and multithreaded workloads a pain. 

The event loop in node is a mechanism that allowes JS code to run asyncronosly. It is achieving this by allowing actions such as File, Network and DB actions (among other things) to run on a threadpool by the use of callback functions. When the a callback function has done its task and has a return value ready, the "event" gets put into its event queue for the main thread to pick it up upon an empty stacktrace. In this way the main program can focus on other important stuff while some time- or CPU-consuming task can do its thing in the background.

>Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises

***Babel*** is a JS compiler that makes it possible to compile/transpile newer versions of ES code into the previously mentioned **"State of the web"** ECMAScript code.
To showcase this behaviour, i can simply just show a used feature from the new version of ES:

Following syntax is using arrow-functions introduced in ES6
```
[1,2,3].map(x => x^3)
```

Here Babel transpiles the ES6 code into "State of the web" ES5 code:
```
[1, 2, 3].map(function (x) {
  return x ^ 3;
});
```

Of course this is just syntactical sugar, but it saves us as developers a lot of time when typing and reading/understanding code.

***WebPack*** is a JavaScript bundler that serves by bundling your project files into web-readable code. This makes can make your web-development much more structured by deviding your code into modules, and in this way help scale your projects.

Here is an example of how i can import a function from another file:

``multiply.js``
```
export default function multiply(a, b) {
    return a * b
}
```

``main.js``
```
import multiply from "./multiply"

multiply(3,4)
```

>Explain the purpose of “use strict” and Linters, exemplified with ESLint 
Linters act as checkers for potential errors in programs. By using typing "use strict" in the start of your JS code you tell JS to use ***strict mode***. In strict mode the the editor warns you if you have "bad syntax" such as having undeclared variables. 

ESLint helps you with checking you code before runtime, warning you about potential errors that can occur at runtime.

For example, if we take our multiply function from before, we can try to change it a bit by decalring b, but never using it, and using c without ever declaring it:
```
function multiply(a, b) {
    return a * c
}
```
If we run this with ESLint, we will get following errors from it:
```
24:33 error "b" is defined but never used     no-unused-vars
25:21 error "c" is not defined                no-undef
```

\- telling us exactly what we want to know before deploying code with errors.

### Explain using sufficient code examples the following features in JavaScript. 

>Variable/function-Hoisting 

Hoisting in javascript hoists some declarations to the top of the code, making it declarable and available anywhere. This happens with ***functions*** and variables declared with ***var***.

In this example im using a function declared underneath, and this is only possible because of JS's hoisting mechanism:
```
multiply(3,4)

function multiply(a, b) {
    return a * c
}
```

and for variables it looks like this:
````
a = 3

var a
````

here i'm using a variable that is seemingly not declared, but technically it looks like this:
````
var a
a = 3
````

>this in JavaScript and how it differs from what we know from Java/.net.

In JS the this-pointer has different values depending on where it is used:

 - In a method, this refers to the owner object.
 - Alone, this refers to the global object.
 - In a function, this refers to the global object.
 - In a function, in strict mode, this is undefined.
 - In an event, this refers to the element that received the event.
 - Methods like call(), and apply() can refer this to any object.


In Java, the this-pointer always refers to the current object, simple...

![](https://i.imgflip.com/2ui382.jpg)

>Function Closures and the JavaScript Module Pattern

**Function closures** in javascript makes it possible to have ***"private" variables and functions***, which is not explicitly supported in the language. This is done by wrapping the "private" variables/functions inside a function, that then returns eighter a function or an object with methods that points to these variables/functions.

In this way, nobody outside the function can access the variables or functions inside it, making them only accessable through the returned function/object:

````
var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
})();

add();
add();
add();
````

Another way of making vaiables and functions private is by using the JavaScript Module Pattern.

The module pattern makes it possible (like babel) to spilt the js code into several files, by choosing what to export from a given file. In this way, a .js file can return a function that points and alters to some variables, without "importers" of the function having access to them.

>Immediately-Invoked Function Expressions (IIFE)

Immediatly invoked functions in JavaScript is just a function that is invoked immediatly after its declaration. The is particularly useful when creating funtions that are just wrappers for some return value.

A good example of this is actually seen above where the closure function that returns the other function, calls itself right after it was declared. This is done by first wrapping the function inside parenthesees, so that is act as a declared variable, and then calling it like a method by adding two parenthesees at the end:

````
( function (){...} )()
````

>JavaScripts Prototype

All objects in JS has prototype's. This is because they inherits class ``Object``'s prototypes, that is ``Object.prototype``.

Assigning new functions to prototypes in JS is like when ``@Override``'ing a method in a super class in Java. This can come in very handy if you want a certain kind of behavioure other than the default ones on the JS classes, but also if you are creating your own classes and you want to add on some functions to it.


>User-defined Callback Functions (writing your own functions that take a callback)

A callback in JS is simply a function that is treated like an object, and that can be called whenever the program wishes to. (Like lambdas in Java or Python)

If i for example wished to make my own map method that could iterate an Array and return a new Array with every value manipulated by my callback, i could do something like this:

````
function myMap(arr, callback) {
    let res = []
    for (const x of arr) {
        res.push(callback(x))
    }
    return res
}
````
Here the callback is used by calling it like a function.

The callback here could look like this arrow-function:
`````
let cb = x => x.toLowerCase()
`````

Simple, right?

and then when we wanted to use the myMap function i could simply call it with an array and the callback like this:

````
let arr = ["Lars", "Jan", "Peter", "Bo", "Frederik"]
myMap(arr, cb)
````

>Explain the methods map, filter and reduce

***map*** is a function that iterates over an Array and returns a new instance of it with values manipulated by a callback function. (like the example just above)

***filter*** is a function that iterates over an Array and returns a new instance of it with only the values that when passed through the callback returnes true:
```
arr.filter(x => x.length <= 3)
```


***reduce*** is a function that with use of a callback iterates over an Array and returns a single value that is the accumulated value of all the datapoints in the Array. I start with a startvalue defined as the second parameter (In this case it is 0):
````
let numbers = [2, 3, 67, 33]; 
numbers.reduce((acc, cur) => acc + cur ,0)
````


>Provide examples of user-defined reusable modules implemented in Node.js
**Example 1:**
````
module.exports =  function f(x, y, ...rest) {
    console.log("Sum:", x + y)
    return rest.map((obj, idx) => `rest valaue ${idx} is a: ${typeof obj}`)
}
````

**Example 2:**
````
module.exports = [1,2,3,4]
````

### ES6,7,8... and TypeScript

>Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.

**let** is a variable declaration that compared to **var** doesn't get hoisted. That means that the following code, compared to use of var, wont work:
````
x = 3

let x
````


An **Arrow function** is a function that that has a simpler syntax than function declarations. When writing an arrow function on a single line, the arrow (=>) has an **implicit return** written in front of it, making whatever written after the arrow the return value:
````
(a, b) => a + b
````
This behavioure can be avoided by using curly braces like this:
````
(a, b) => {a + b}
````
\-also giving the option of returning later in the program:
````
(a, b) => {
    c = a + b
    return c
}
````

**rest parameters** makes it possible to treat input parameters as a list of arguments:
````
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}
````
so that you can call the function with any number of parameters:
`````
sum(1, 2, 3)
sum(1, 2, 3, 4)
`````

**Destructing assignments** can be used to extract values from lists or objects fast and convinient:

Destructing assignments with List:
````
list = [1,2,3,4]

let [indexZero] = list
````

Destructing assignments with Objects:
````
let obj = {name:"Adam", phone:"12345678"}

let {name} = obj
````

**Set**'s in javascript is a datatype that lets you store unique values in a iterable data structure.
A Set can be declared like this:

````
const set1 = new Set([1, 2, 3, 4, 5, 5])
````

> Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.

The implementation is just like using babel:

``multiply.js``
```
export default function multiply(a, b) {
    return a * b
}
```

``main.js``
```
import multiply from "./multiply"

multiply(3,4)
```



>Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.

````
class Animal {

  constructor (name) {
    this.name = name;
  }
 
  getName () {
    return this.name;
  }
 
}

class Ape extends Animal {
 
  constructor (name, numLice) {
    super(name);
    this.numLice = numLice
  }
 
  getName () {
    return 'The Apes name is: ' + super.getName();
  }
 
}
let ape = new Ape('Mario');
````

ES6 and Java inherritance are very similar, though the inherritance in ES6 is implemented by transpiling it into prototype assingments, which is different from what you would see in java.


>Provide examples with es-next, running in a browser, using Babel and Webpack

Following examples are both implemented using "Create React App" which install both
[Our Carondo exam project](https://corporategroup.dk/CarondoEmployee/#/)

[Lars Royality Brand](https://adamlass.com/LRB/#/1)

>Provide a number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics

In the following example, its very clear to see the benefits of using **Interfaces** in typescript:
````
interface IPerson {
    name: string
}
interface IAddress {
    street: string
}

function loggerV3(p: IPerson, a: IAddress) {
    console.log(`Value of number: ${p.name}, Value of msg: ${a.street}`);
}

let person = {name: "Kurt Wonnegut"}
let address = {street: "Lyngbyvej 23"}

loggerV3(person,address)
````
Here we can be certain that the objects that come in, contain some values that we can dot in on. Here it also uses Duck Typing since we have not defined a class for the implementations, but simply have used somee objects with the right field names.

Another huge benefit is that we always know what values an object holds when developing.

If we wanted to, we could also provide a some **class** declarations that implements the interfaces given above:

````
class Person implements IPerson{
    //one way of constructing
    public name;
    constructor(name : string){
        this.name = name
    }
}

class Address implements IAddress{
    //another, much more simple way of constructing
    constructor(public street: string){}
}
````

For **types** we can declare the variable types like this:
````
var name : string = "Adam Lass"
````

We can use **generics** both in functions and classes:
````
function loggerV4<T,U>(p: T, a: U) {
    return `Value of number: ${p}, Value of msg: ${a}`
}

loggerV4(person,address)


class GenericLogger<T,U>{
    log = (a:T, b:U) => console.log(`Val 1 ${a}, Val 2 ${b}`);
    
}

const personLogger = new GenericLogger<IPerson,IAddress>()
````


>Explain the ECMAScript Proposal Process for how new features are added to the language (the TC39 Process)
The ECMAScript proposal process consist of 5 different stages:

**Stage 0: strawman**
Here anyone can submit their ideas.

**Stage 1: proposal**
Here more defined proposals exists with demos, pro's and con's explained and examples. Here a so called "champion"/responsable must be identified.

**Stage 2: draft**
Here the first version of what will be in the specification is defined. Further implementations should only be incremental.

**Stage 3: candidate**
The proposal is mostly finished and now needs feedback from implementations and users to progress further.

**Stage 4: finished**
The proposal is ready to be included in the next version.

### Callbacks, Promises and async/await

>Explain about promises in ES-6 including, the problems they solve, a quick explanation of the Promise API and:

In ES6 it is possible to use the syntax async/await which is syntactical sugar that makes it look like that you are creating async code, but in reality it just uses callbacks.

The syntax looks like this:

````
const request = async () => {
    const response = await fetch('https://api.com/values/1');
    const json = await response.json();
    console.log(json);
}

request();
````

>Example(s) that demonstrate how to avoid the callback hell  (“Pyramid of Doom")

The pyramid of doom looks something like this:

[](https://pbs.twimg.com/media/COYihdoWgAE9q3Y.jpg:large)

And it can be fixed very easily with the syntax of ES6's async/await by doing something like this:
````
module.exports = getPlanetforFirstSpeciesInFirstMovieForPersonAsync = async (id) => {

    try{
        const json1 = fetch("https://swapi.co/api/people/" + id)
        .then(res => res.json())
    const data1 = await json1.then(data => data)

    const json2 = fetch(data1["films"][0])
        .then(res => res.json())
    const data2 = await json2.then(data => data)

    const json3 = fetch(data2["species"][0])
        .then(res => res.json())
    const data3 = await json3.then(data => data)

    const json4 = fetch(data3["homeworld"])
        .then(res => res.json())
    const data4 = await json4.then(data => data)

    console.log("data4:", data4)

    } catch (err) {
        console.error(err)
    }
    

}
````

>Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel

**Serial**:
````
async function fetchPerson(url) {
    return fetch(url)
    .then(data => data.json())
    .then(data => data)
}
async function printNames() {
    var person1 = await fetchPerson(URL + 1);
    var person2 = await fetchPerson(URL + 2);
}
````

**Parallel**:
````
async function fetchPerson(url) {
    return fetch(url)
    .then(data => data.json())
    .then(data => data)
}

async function printNames() {
    promises = []
    promises.push(fetchPerson(URL +1))
    promises.push(fetchPerson(URL +2))
    
    var allData = await Promise.all(promises)
}
````


>Example(s) that demonstrate how to implement our own promise-solutions.
````
new Promise((res,rej)=> {
        const asJson = () => {
            return new Promise((res,rej) => {
                return res(JSON.stringify({words:str.split(" ")}))
            })
        }
        var data = {
            upperCased: str.toUpperCase(),
            msgLength: str.length,
            asJson: asJson
        }
        return res(data)
        //reject not used
}
````


>Example(s) that demonstrate error handling with promises
````
try{
    const json1 = fetch("https://swapi.co/api/people/" + id)
    .then(res => res.json())
    const data1 = await json1.then(data => data)
    
} catch (err) {
    console.error(err)
}
````


>Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.
Provide examples to demonstrate 
Why this often is the preferred way of handling promises
Error handling with async/await
Serial or parallel execution with async/await.

Async/Await can function as wrappers around promises, and in this way make the code a lot more readable, especially when in a "pyramid of doom" scenario, or when using try-catch(-finally) syntax.
````
try{
    const json = fetch("https://swapi.co/api/people/" + id)
    .then(res => res.json())
    const data = await json1.then(data => data)
    return data
    
} catch (err) {
    console.error(err)
} finally {
    console.log("Done")
}
````

The rest is explained/examplified above.
