const fetch = require("node-fetch")

module.exports = makePromise = (url) => {
    return new Promise((res,rej) => {
        fetch(url)
        .then(data => data.json())
        .then(data => {
            const filtered = data.filter(obj => {
                let title = obj["title"]
                let titleLength = title.split(" ").length
                return titleLength == 3
            })
            return res(filtered)
        })
        .catch(err => {
            return rej("Error:",err)
        })
    })
}