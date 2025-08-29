
console.log("Hello, VS Code!");
console.log("Hello, VS Code!");
console.info("Hey, Himaja, Tmrw is vinayka chaviti");
// confirm("Congratulations!!!!!!!!!!");
console.log(3 + 5);
//variables

// let admin, name;
// name = "John";
// admin = name;
let name = "himaja";
alert( name ); 
//display data
window.alert(5+6)
document.getElementById("demo1").innerHTML = (5 + 6) * 10;
//function to compute the product//
function myFunction(p1,p2){
    return p1*p2;
}
let result=myFunction(9,4);
document.getElementById("java-func").innerHTML = "The result is: " + result;
//function as a variable//
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit - 32);
}

let text = "The temperature is " + toCelsius(77) + " Celsius.";
document.getElementById("func-var").innerHTML = text;
//events//
function displayDate() {
  document.getElementById("events").innerHTML = Date();
}
//string length//
 text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("length").innerHTML = text.length;
//string templates//
let firstName = "John";
let lastName = "Doe";

let text1 = `Welcome ${firstName}, ${lastName}!`;

document.getElementById("template").innerHTML = text1;
//accessing last elemnt of an array//
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("indexing").innerHTML = fruits[fruits.length-1];
//nested arrays//
let a = "";
const myObj = {
  name: "Himaja",
  age: 20,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

for (let i in myObj.cars) {
  a += "<h2>" + myObj.cars[i].name + "</h2>";
  for (let j in myObj.cars[i].models) {
    a += myObj.cars[i].models[j] + "<br>";
  }
}

document.getElementById("nested").innerHTML = a;
//dates//
const d = new Date("2025-08-28");
document.getElementById("dates").innerHTML = d;
//conversion to string//
const d1 = new Date();
let text2 = d1.toString();
document.getElementById("strings").innerHTML = text2;
//math functions//
document.getElementById("math").innerHTML = Math.random();
//math random//
document.getElementById("math-random").innerHTML =
Math.floor(Math.random() * 10);
//boolean//
const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Good day!";
} else {
  greeting = "Good evening!";
}

document.getElementById("boolean").innerHTML = greeting;