let arr = ["Lars", "Jan", "Peter", "Bo", "Frederik"]

//1) Using existing functions that takes a callback as an argument
console.log(arr.filter(x => x.length <= 3))

console.log(arr.map(x => x.toLocaleUpperCase()));


//2) Implement user defined functions that take callbacks as an argument

function myFilter(arr, callback) {
    let res = []
    for (const x of arr) {
        if (callback(x)) {
            res.push(x)
        }
    }
    return res
}

console.log(myFilter(arr, x => x.length > 3));

function myMap(arr, callback) {
    let res = []
    for (const x of arr) {
        res.push(callback(x))
    }
    return res
}


console.log(myMap(arr, x => x.toLowerCase()))


//3) Using the Prototype property to add new functionality to existing objects

Array.prototype.myFilter = function (callback) {
    let res = []
    for (const x of this) {
        if (callback(x)) {
            res.push(x)
        }
    }
    return res
}

Array.prototype.myMap = function (callback) {
    let res = []
    for (const x of this) {
        res.push(callback(x))
    }
    return res
}

console.log(arr.myFilter(x => x.length == 3));
console.log(arr.myMap(x => x.toLowerCase()));

//4) Getting really comfortable with filter and map

console.log(`<ul>\n\t${arr.map(x => `<li>${x}</li>`).join("\n\t")}\n</ul>`)

//html.js

//filter, map and reduce
console.log(arr.join(","));
console.log(arr.join(" "));
console.log(arr.join("#"));

let numbers = [2, 3, 67, 33]; 

console.log(numbers.reduce((acc, cur) => acc + cur ,0));

let members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ]

   let avg = members.reduce( (acc, cur, ind, arr) => {
       let arrLenght = arr.length
       if(ind == arrLenght - 1){
           return (acc + cur.age) / arrLenght
       }
       return acc + cur.age
   }, 0)

   console.log(avg);
   

   var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];

   var results = votes.reduce((acc, cur)=>{
       if(acc[cur]){
           acc[cur] += 1
       } else {
           acc[cur] = 1
       }
       return acc
   }, {})
   
   console.log(results)


//Hoisting
    console.log(aPlusB(2,2))

   function aPlusB(a,b) {
       return a + b
   }


   console.log(xs);

   //comment out this to test the effect
   var xs = 1;
   

//Immediately Invoked Function Expressions 

(()=>console.log("hello world"))()

let obj = {
    name: "Adam", birthday: "111297", hobby: "coding", email:"adlass97@gmail.com"
}

for (const x in obj) {
    console.log(x,":",obj[x])
}

delete obj.birthday

console.log(obj)


console.log(obj.hasOwnProperty("name"));
console.log(obj.hasOwnProperty("birthday"));


function Person(firstName, lastName, age){
    this.firstname = firstName
    this.lastName = lastName
    this.age = age

    this.getDetails = () => {
        return JSON.stringify(this)
    }
}

let person1 = new Person("Adam","Lass",21)

console.log(person1.getDetails());


for (const x in person1) {
    console.log(x,":",obj[x])
}


delete person1.age

console.log(person1)

function init() {
    var name = "Mozilla"; // Local variable
    function displayName() { // Inner function --> a closure
      console.log(name); // Uses variable from the parent function
    }
    displayName();
  }

  init()

  var object = (
    function() {
        let name = "Adam"
        let age = 21
        
        return {
            setName (namei) {
                name = namei
            },
            setAge (agei){
                age = agei
            },
            getInfo(){
                return `Name: ${name}, Age: ${age}`
            }
        }

    }

  )()

  object.setAge(0)
  console.log(object.getInfo());
  