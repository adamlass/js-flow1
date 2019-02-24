const genObj = require("../PromisesExercise/randoms-module")

func = async () => {
    const obj = await genObj(10)
    console.log(JSON.stringify(obj))
}

func()