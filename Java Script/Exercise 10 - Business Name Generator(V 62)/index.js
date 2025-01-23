// const { shallowCopy } = require("ejs/lib/utils");

let adjectives = {
    1 : "Crazy",
    2 : "Amazing",
    3 : "Fire"
}

let Shop_names = {
    1 : "Engine",
    2 : "Foods",
    3 : "Garments"
}

let word = {
    1 : "Bros",
    2 : "Limited",
    3 : "Hub"
}

var ran1 = Math.floor(Math.random()*3)+1;
var ran2 = Math.floor(Math.random()*3)+1;
var ran3 = Math.floor(Math.random()*3)+1;

console.log(adjectives[ran1] + " " + Shop_names[ran2]+ " "+ word[ran3]);