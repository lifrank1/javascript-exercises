function add7(string) {
    return string.charAt((string.length)-1);
}

function writeMap(array) {
    let newArray = array.map((element) => element+1)
    return newArray
}

function sumOfTripledEvens(array) {
    let constArray = array.filter((element) => {return element % 2 === 0})
    console.log(constArray)
    let tripleArray = constArray.map((element) => {return element * 3})
    console.log(tripleArray)
    let sum = tripleArray.reduce((total, element) => {return total += element}, 0)
    console.log(sum)
    return sum
}

function mapToNames() {
    let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = []
for (const user of users) {
    names.push(user.name)
}

alert( names ); // John, Pete, Mary
}

mapToNames()

// let container = document.querySelector("#identity")

// let child = document.createElement("div");
// child.style.borderStyle = "solid"; 
// child.style.background = "pink";
// child.textContent = "im div"

// let hchild = document.createElement("h1")
// hchild.textContent = "im in a div"

// let pchild = document.createElement("p")
// pchild.textContent = "me too"

// child.appendChild(hchild)
// child.appendChild(pchild)

// container.appendChild(child)