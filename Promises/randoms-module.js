const crypto = require("crypto")

makeSecureRandom = async (size) => {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(size,(err, buffer) => {
            if(err){
                console.log("Error:",err)
            }
            let secureHex = buffer.toString('hex');
            // console.log(secureHex)
            let obj = { length: size, random: secureHex }
            return obj ? resolve(obj) : reject(obj)
        });
    })
}

async function genObj(n) {
    var obj = {
        title: "6 Secure Randoms"
    }
    var promises = []
    for (let i = 0; i < n; i++) {
        let size = Math.random(30) + 20
        promises.push(makeSecureRandom(size))
    }

    obj["randoms"] = await Promise.all(promises)
    return obj
}

module.exports = genObj

