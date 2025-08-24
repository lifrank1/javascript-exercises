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

let container = document.querySelector("#identity")

let child = document.createElement("p")
child.style.color = "red"
child.textContent = "Hey I'm red"

container.appendChild(child)