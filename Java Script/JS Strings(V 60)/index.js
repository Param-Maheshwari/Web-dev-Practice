console.log("This is a tutorial on Strings.")

let a = "Param";


console.log(a.length);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

let real_name = "Param"
let friend = "Oshu"

console.log("This is me, "+real_name+" & this is my friend "+friend);
console.log(`This is me, ${real_name} & this is my friend ${friend}`); //---->Tempelate literals

let b = "Roh'an"
console.log(b);

let c = `Roh"an`
console.log(c);

let d ="Roh\"an" //---> We can use escape sequence too.

let x = "PrernaPr"
console.log(x.toUpperCase())
console.log(x.toLowerCase())
console.log(x.slice(1,5)) //---> 1 included , 5 not included
console.log(x.slice(1)) //---> 1 to end

console.log(x.replace("Pr", "28")) ///---> Only 1st occurance will change
console.log(x.concat(a , "Rahul", "Param", "Raj"))//----> To add 2 strings

//---> x.trim() = To remove white spaces from the string


