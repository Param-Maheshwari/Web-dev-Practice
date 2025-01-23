function nice(name) {
    console.log("Hey "+name+" you are nice!");
    console.log("Hey "+name+" you are good!");
    console.log("Hey "+name+" you are looking happy!");
    console.log("Hey "+name+" great to meet you!");
}
nice("Param")

function sum(a , b , c = 10) {
    console.log(a,b,c);
    return a + b + c;
}
result1 = sum(2,3);
result2 = sum(4,13);
result3 = sum(7,23);

console.log("Sum of numbers is : ", result1);
console.log("Sum of numbers is : ", result2);
console.log("Sum of numbers is : ", result3);

const func1 = (x)=> {
    console.log("This is an arrow operator : ",x);
}

func1(23)
func1(42)
func1(13)