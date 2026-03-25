let name1 = "Lisa";
let food = "ice cream"; //global variable
// alert("Hey, " + name1 + " want to eat " + food);
// alert("hahaha");

function greet(){
alert("hello :)"); //everything inside is local variable 
console.log("The button was clicked")
}

function greet2(theName){
    console.log("hello, " + theName)//replace the thing need to be changed 
}

let headline = document.querySelector("#programmingLanguage");
function change(){
    console.log("changing, the fuction runs")
    headline.innerText="javaScript";//should inside the function
}

