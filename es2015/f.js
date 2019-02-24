module.exports =  function f(x, y, ...rest) {
    console.log("Sum:", x + y)
    return rest.map((obj, idx) => `rest valaue ${idx} is a: ${typeof obj}`)
}
