const URL = "https://swapi.co/api/people/";
const fetch = require("node-fetch")
const now = require("performance-now")

async function fetchPerson(url) {
    return fetch(url)
    .then(data => data.json())
    .then(data => data)
}
async function printNames() {

    var start = now()
    var person1 = await fetchPerson(URL + 1);
    var person2 = await fetchPerson(URL + 2);
    var end = now()
    var seq = end - start
    console.log("Sequential:",(seq / 1000).toFixed(3))

    start = now()
    promises = []
    promises.push(fetchPerson(URL +1))
    promises.push(fetchPerson(URL +2))
    var allData = await Promise.all(promises)
    end = now()
    var par = end - start
    console.log("Parrallel:",(par / 1000).toFixed(3))

    console.log("Parrallel is",((seq - par) / 1000).toFixed(3), "seconds faster than sequential!")
}

printNames()
