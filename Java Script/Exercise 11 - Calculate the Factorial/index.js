let num = prompt("Enter the number")
let arr = []

for (let i = 0; i < num ;i++) {
    arr.push(i+1)
}

function myFunction (total,value){
    return total * value
}

const result = arr.reduce(myFunction)

console.log(result)