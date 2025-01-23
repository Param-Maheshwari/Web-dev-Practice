let arr = [10,20,30,40,50]
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

// let newArr = arr.map(e=>{
//     return e**2;
// })
// console.log(newArr)


// const greaterThanThirty = (e => {
//     if(e>30){
//         return true
//     }
//     return false
// })

// console.log(arr.filter(greaterThanThirty))

let arr2 = [1,2,3,4,5,6]

const red = (a,b)=> {
    return a*b
}

console.log(arr2.reduce(red))