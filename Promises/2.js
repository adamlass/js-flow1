
const fetch = require("node-fetch")


    fetch("https://swapi.co/api/people/1/")
    .then(data => data.json())
    .then(data => {
        console.log("data1:", data)
        return fetch(data["films"][0])
    })
    .then(data => data.json())
    .then(data => {
        console.log("data2:",data)
        return fetch(data["species"][0])
    })
    .then(data => data.json())
    .then(data => {
        console.log("data3:",data)
        return fetch(data["homeworld"])
    })
    .then(data => data.json())
    .then(data => {
        console.log("data4:",data)
    })