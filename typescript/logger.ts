function logger(a, b) {
    console.log(`Value of number: ${a}, Value of msg: ${b}`);
}

var a = 12, b = "Hello Class"
// logger(b,a)



function loggerV2(a: number, b: string) {
    console.log(`Value of number: ${a}, Value of msg: ${b}`);
}
loggerV2(a, b)






interface IPerson {
    name: string
}
interface IAddress {
    street: string
}

function loggerV3(p: IPerson, a: IAddress) {
    console.log(`Value of number: ${p.name}, Value of msg: ${a.street}`);
}

let person = {name: "Kurt Wonnegut"}
let address = {street: "Lyngbyvej 23"}

loggerV3(person,address)





class Person implements IPerson{
    //one way of constructing
    public name;
    constructor(name : string){
        this.name = name
    }
}

class Address implements IAddress{
    //another, much more simple way of constructing
    constructor(public street: string){}
}

loggerV3(new Person("Kurt W."), new Address("Bla Bla Vej"))



function loggerV4<T,U>(p: T, a: U) {
    return `Value of number: ${p}, Value of msg: ${a}`
}

loggerV4(person,address)


class GenericLogger<T,U>{
    log = (a:T, b:U) => console.log(`Val 1 ${a}, Val 2 ${b}`);
    
}

const personLogger = new GenericLogger<IPerson,IAddress>()

personLogger.log(person,address)