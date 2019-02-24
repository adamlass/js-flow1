const fetch = require("node-fetch")

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