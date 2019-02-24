function logger(a, b) {
    console.log("Value of number: " + a + ", Value of msg: " + b);
}
var a = 12, b = "Hello Class";
// logger(b,a)
function loggerV2(a, b) {
    console.log("Value of number: " + a + ", Value of msg: " + b);
}
loggerV2(a, b);
function loggerV3(p, a) {
    console.log("Value of number: " + p.name + ", Value of msg: " + a.street);
}
var person = { name: "Kurt Wonnegut" };
var address = { street: "Lyngbyvej 23" };
loggerV3(person, address);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Address = /** @class */ (function () {
    //another, much more simple way of constructing
    function Address(street) {
        this.street = street;
    }
    return Address;
}());
loggerV3(new Person("Kurt W."), new Address("Bla Bla Vej"));
function loggerV4(p, a) {
    return "Value of number: " + p + ", Value of msg: " + a;
}
loggerV4(person, address);
var GenericLogger = /** @class */ (function () {
    function GenericLogger() {
        this.log = function (a, b) { return console.log("Val 1 " + a + ", Val 2 " + b); };
    }
    return GenericLogger;
}());
var personLogger = new GenericLogger();
personLogger.log(person, address);
//# sourceMappingURL=logger.js.map