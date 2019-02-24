var names = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

document.getElementById("test").innerHTML = generateTable(names)


document.getElementById("button").addEventListener("click" , e => {
    e.preventDefault()
    document.getElementById("test").innerHTML = generateTable(names.filter(x => x.name.length > 3))
})


function generateTable(arr){
    let tableData = arr.map(x => `<tr> <td>${x.name}</td> <td>${x.phone}</td> </tr>`)

    return `<table><tr> <th>Name</th> <th>Phone</th> </tr> ${tableData}</table>`
}