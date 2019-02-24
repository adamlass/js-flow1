

function getPerson() {
    return {
        firstName: "Kurt",
        lastName: "Wonnegut",
        gender: "Male",
        email: "kurt@wonnegut.dk",
        phone: "12345",
    }
}
let {lastName, phone} = getPerson()
// console.log(`First: ${fName}, Last: ${lName}`);
console.log(lastName,phone);
