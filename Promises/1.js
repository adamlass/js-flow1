const genObj = require("./randoms-module")

var http = require("http")

http.createServer((req, res) => {
    if (req.url == "/api/securerandoms") {
        res.writeHead(200, { "Context-Type": "JSON" })
        genObj(10).then(obj => {
            console.log(obj)
            res.write(JSON.stringify(obj))
            res.end()
        })
    } else {
        console.log("No accesspoint called: ",req.url)
    }

}).listen(8080)
