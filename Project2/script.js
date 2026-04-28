let reference = document.querySelector(".reference");
let heat = document.querySelector(".heat");
let heatP = document.querySelectorAll(".heatP");
let seasons = document.querySelector(".seasons");

let butterfly = document.querySelector(".butterfly");

butterfly.addEventListener("click", moveButterfly);

function moveButterfly() {
    butterfly.classList.toggle("fly");
}

let shall = document.querySelector(".shall");
let Shakespeare = document.querySelector(".Shakespeare");
butterfly.addEventListener("click", function () {
    shall.classList.add("type");
    Shakespeare.classList.add("typeDelay");
});


function getScrollPercentage() {
    // how many pixels have we scrolled yet?
    let scrolledAlready = window.scrollY;

    // how high is our page?
    let pageHeight = document.body.scrollHeight;

    // how high is the window?
    let windowHeight = window.innerHeight;

    // how far can we scroll?
    let possibleScrollSpace = pageHeight - windowHeight;

    // console.log(scrolledAlready, possibleScrollSpace);
    let percentage = (scrolledAlready / possibleScrollSpace) * 100;
    return percentage;
}

function heatWasScrolled() {
    let percentage = getScrollPercentage();
    console.log("percentage", percentage);
    if (percentage < 7) {
        heatP.forEach(blurTheText);
    } else if (7 <= percentage && percentage < 13) {
        heatP.forEach(clearBlur);
    } else if (13 <= percentage && percentage < 20) {
        heatP.forEach(blurTheText);
    } else if (20 <= percentage && percentage < 25) {
        heatP.forEach(clearBlur);
    } else if (25 <= percentage && percentage < 28) {
        heatP.forEach(blurTheText);
    } else if (28 <= percentage && percentage < 30) {
        heatP.forEach(clearBlur);
    } else if (percentage > 30) {
        heatP.forEach(blurTheText);
    }
}




window.addEventListener("scroll", heatWasScrolled);
// window.addEventListener("scroll",findSummer);

function blurTheText(element) {
    console.log("the text is blur");
    element.style.filter = "blur(2px) brightness(1.4)";
}

function clearBlur(element) {
    element.style.filter = "none";
}

let summerSound = document.querySelector("#summerSound");
document.querySelector(".butterfly").addEventListener("click", function () {
    summerSound.play();
});


function randomPosition(element) {
    element.style.position = "absolute";
    element.style.left = Math.random() * (window.innerWidth) + "px";
    element.style.top = Math.random() * (window.innerHeight) + "px";
    let randomSize = Math.random() * 3;
    element.style.transform = "scale(" + randomSize + ")";
}

heatP.forEach(randomPosition);

function newPosition(eventInfo) {
    let randomX = Math.random() * 200 - 100;
    let randomY = Math.random() * 200 - 100;
    eventInfo.target.style.transform = "translate(" + randomX + "px," + randomY + "px)";
}
function toNewPosition(element) {
    element.addEventListener("mouseover", newPosition);
}

heatP.forEach(toNewPosition);

// function addGo(){
// let go = document.createElement("div");
// go.innerText="go and find the summer";
// go.style.color="white";
// seasons.append(go);
// }

// function findSummer(){
//    let percentage = getScrollPercentage();
//     console.log("percentage",percentage);
//     if(percentage==85){
//         addGo();
//     }


function rotateSummer() {
    let percentage = getScrollPercentage();
    if (percentage >= 40 && percentage <= 80) {
        let summerScale = (percentage - 40) / 40;
        let angle = summerScale * 1200;
        document.querySelector(".summer img").style.transform =
            "rotate(" + angle + "deg)";
    }
}
window.addEventListener("scroll", rotateSummer);



let poem = document.querySelector(".poem");
let hot = document.createElement("p");
hot.innerText="Sometimes the sun is too hot, And often its golden face is dimmed."
let short = document.createElement("p");
short.innerText="Rough winds shake the beloved buds of May, And summer is far too short."
let fade = document.createElement("p");
fade.innerText="Everything beautiful eventually fades, By chance or nature's changing course."
let catchSummer = document.createElement("p");
catchSummer.innerText="Keep scrolling and catch the summer";
let catchButterfly = document.createElement("p");
catchButterfly.innerText = "Catch the flying butterfly and begin your summer day";
let wheel = document.createElement("p");
wheel.innerText="No summer stays where the days continue to turn."
let flower = document.createElement("p");
flower.innerText = "Do you see the lovely flower?"
hot.classList.add("hot");
short.classList.add("short");
fade.classList.add("fade");
catchSummer.classList.add("catchSummer");
catchButterfly.classList.add("catchButterfly");
wheel.classList.add("wheel");
flower.classList.add("flower");

function addCatchButterfly(){
let percentage = getScrollPercentage();
if(percentage >= 0.5 && percentage <=1.5){
   poem.append(catchButterfly); 
   console.log("add catchButterfly");
} else {
   catchButterfly.remove();
   console.log("remove catchButterfly");
}
}
window.addEventListener("scroll", addCatchButterfly);

function addHot(){
let percentage = getScrollPercentage();
if(percentage >= 6 && percentage <=34.5){
   poem.append(hot); 
   console.log("add hot");
} else {
   hot.remove();
   console.log("remove hot");
}
}
window.addEventListener("scroll", addHot);

function addWheel(){
let percentage = getScrollPercentage();
if(percentage >= 37 && percentage <=40){
   poem.append(wheel); 
   console.log("add wheel");
} else {
   wheel.remove();
   console.log("remove wheel");
}
}
window.addEventListener("scroll", addWheel);


function addShort(){
let percentage = getScrollPercentage();
if (percentage >=43 && percentage <= 50 ){
    poem.append(short);
    console.log("add short") ;
}else{
    short.remove();
    console.log("remove short");
}
}
window.addEventListener("scroll", addShort);

function addFade(){
let percentage = getScrollPercentage();
if (percentage >=55 && percentage <= 62 ){
    poem.append(fade);
    console.log("add fade") ;
}else{
    fade.remove();
    console.log("remove fade");
}
}
window.addEventListener("scroll", addFade);

function addCatchSummer(){
let percentage = getScrollPercentage();
if (percentage >=67 && percentage <= 75 ){
    poem.append(catchSummer);
    console.log("add catchSummer") ;
}else{
    catchSummer.remove();
    console.log("remove catchSummer");
}
}
window.addEventListener("scroll", addCatchSummer);

function addFlower(){
let percentage = getScrollPercentage();
if (percentage >=79 && percentage <= 87 ){
    poem.append(flower);
    console.log("add flower") ;
}else{
    flower.remove();
    console.log("remove flower");
}
}
window.addEventListener("scroll", addFlower);