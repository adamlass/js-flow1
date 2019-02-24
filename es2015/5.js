function f(x,y,...rest){
    console.log("Sum:",x+y)
    rest.map( (obj, idx) => `rest valaue ${idx} is a: ${typeof obj}`)
}
f(5,2,true,2,"hello World",[1,2,3],new Date(),{})


var rest = [true,2,"hello World",[1,2,3],new Date(),{}];
var restParams = [ ...rest];
f(5,2,...restParams);
