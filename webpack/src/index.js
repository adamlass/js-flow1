// import _ from "lodash"
// import './style.css'
// import Icon from "./icon.png"

// import printMe from "./print"

// function component() {
//     let element = document.createElement('div');

//     var btn = document.createElement('button')


//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     btn.innerHTML = "Click me and check the console"
//     btn.onclick = printMe
//     element.appendChild(btn)
//     element.classList.add('hello')

//     var myIcon = new Image()
//     myIcon.src = Icon
//     element.appendChild(myIcon)

//     const name = 'Kurt Wonnegut';
//     setTimeout(() => alert(`Hello there from ${name}`), 1000);

//     return element;
// }

// document.body.appendChild(component());


import _ from "lodash";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'

// You must implement the makeTable(..) function, used below:

class Person {
    constructor(fn, ln, s) {
        this.firstName = fn;
        this.lastName = ln;
        this.favoriteSport = s;
    }
}

const persons = [
    new Person("Kurt", "Wonnegut", "Socker"),
    new Person("Jan", "Peterson", "Hockey"),
    new Person("Jane", "Peterson", "Skating"),
    new Person("John", "Hansen", "Socker"),
]

const cities = [
    {city: "Lyngby",zipCode: "2800"},
    {city: "Hvidovre",zipCode: "2650"},
    {city: "Glostrup",zipCode: "2600"},
   ]
   
   const hobbies = [
    {name: "football",players: 22},
    {name: "chess",players: 2},
    {name: "boxing",players: 2},
   ]
   

const table = makeTable(hobbies);
console.log(table)
let element = document.createElement("div")

// document.getElementById('my-table').innerHTML = table;
element.innerHTML = table;

document.body.appendChild(element)
// let element = document.createElement("div")

function makeTable(data) {
    var res
    if (data && data.length > 0) {
        res = "<table class='table'><thead><tr>"
        var keys = _.keys(data[0])
        keys.map(x => {res += "<th>" + _.startCase(x) + "</th>"})
        res += "</tr></thead><tbody>"
        data.map(x => {
            var res1 = "<tr>"
            keys.map(key => { res1 += "<td>" + x[key] + "</td>"})
            res += res1 + "</tr>"
            
        })
        

        res += "</table>"
    }
    return res
}