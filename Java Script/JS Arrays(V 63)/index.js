let arr = [1,2,4,7,9]

arr[0] = 23 //---> Arrays are mutable unlike strings i.e thye can be modified later.
console.log(arr, typeof arr)
console.log(arr.length)

console.log(arr[4])
console.log(arr[2])

console.log(arr.toString()) //---> To convert array to string.
console.log(arr.join(" and "))

console.log(arr.pop() , arr) //---> It removes the last element
console.log(arr.push(13 , "Param") , arr) //---> It adds the last element

console.log(arr.shift() , arr) //---> It removes the first element
console.log(arr.unshift("Prerna") , arr) //---> It removes the first element

//---> delete a[6] will delete the element but memory will be still ellocated

let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]

console.log(a1.concat(a2,a3)) //---> *In this method original array does not change.*

let b = [22,62,51]
console.log(b.sort()) //---> It sorts the array in right form

const numbers = [1,2,3,4,5]
console.log(numbers.splice(1,2,22,44,51), numbers)

console.log(numbers.slice(2,4))