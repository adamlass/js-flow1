const makePromise = require("./makePromise")

module.exports = function makeRequests(urls){
    promises = []
    urls.forEach(url => {
        promises.push(makePromise(url))
    });
    
    return Promise.all(promises)
}