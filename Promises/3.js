

urls = [
    "https://jsonplaceholder.typicode.com/photos?albumId=1",
    "https://jsonplaceholder.typicode.com/photos?albumId=3",
    "https://jsonplaceholder.typicode.com/photos?albumId=5",
    "https://jsonplaceholder.typicode.com/photos?albumId=7",
    "https://jsonplaceholder.typicode.com/photos?albumId=9",
]
const makeRequests = require("./makeRequests")

// makeRequests(urls)


const http = require("http")

http.createServer((req, res) => {
    if (req.url == "/api/albumthreewords") {
        makeRequests(urls)
            .then(data => {
                let flatData = [].concat.apply([], data)
                res.writeHead(200,{ "Context-Type": "JSON" })
                res.write(JSON.stringify(flatData))
                res.end()
            })

    } else {
        console.log("No accesspoint called: ", req.url)
    }
}).listen(8080)