stringManipulator("JavaScript is cool, even when it sucks", 1000)
 .then(data => {
   console.log("From first promise: " + data.upperCased);
   console.log("From first promise: " + data.msgLength);
   return data.asJson()  //Opposite to when we do res.json() with fetch, since this
 			 //should return a JSON-string
 })
 .then(res => {
   console.log("From second promise: " + res)
 });

//solved:
function stringManipulator(str){
    return new Promise((res,rej)=> {
        const asJson = () => {
            return new Promise((res,rej) => {
                return res(JSON.stringify({words:str.split(" ")}))
            })
        }
        var data = {
            upperCased: str.toUpperCase(),
            msgLength: str.length,
            asJson: asJson
        }
        return res(data)
        //reject not used
    })
}


