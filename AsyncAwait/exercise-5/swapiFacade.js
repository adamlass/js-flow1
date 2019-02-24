const URL = "https://swapi.co/api/people/";
var count = 0

class Facade {
    getCount = async () => {
        console.log(count)
        return count
    }

    init = async () => {
        const data = await fetch(URL)
            .then(data => data.json())
            .then(data => data)
        count = data.count
        console.log("count:", count)
    }

    getRandomPerson = async () => {
        const random = Math.floor(Math.random() * 87) + 1
        console.log("rnd:", random)
        const person = await this.getPerson(random)
        // console.log(person.films)
        promises = []
        for (const film of person.films) {
            const promise = fetch(film)
            .then(data => data.json())
            .then(data => data)
            promises.push(promise)
        }
        const results = await Promise.all(promises)
        // console.log(results)
        person.films = results.map(film => film.title)
        console.log(person)
        return person
    }

    getPerson = async (id) => {
        const data = await fetch(URL + id)
            .then(data => data.json())
            .then(data => data)
        return data
    }

}

export default new Facade()