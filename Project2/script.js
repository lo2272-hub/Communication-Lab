let reference = document.querySelector(".reference");
let heat = document.querySelector(".heat");
let heatP = document.querySelectorAll(".heatP");
let seasons = document.querySelector(".seasons");

let butterfly = document.querySelector(".butterfly");

butterfly.addEventListener("click",moveButterfly);

function moveButterfly(){
butterfly.classList.toggle("fly");
}

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
    let percentage = (scrolledAlready / possibleScrollSpace)*100;
    return percentage;
}

function heatWasScrolled(){
    let percentage = getScrollPercentage();
    console.log("percentage",percentage);
    if(percentage<13){
        heatP.forEach(blurTheText);
    }else if(13<=percentage && percentage<20){
        heatP.forEach(clearBlur);
    }else if(20<=percentage && percentage<30){
        heatP.forEach(blurTheText);
    }else if(30<=percentage && percentage<35){
        heatP.forEach(clearBlur);
    }else if(35<=percentage && percentage<40){
        heatP.forEach(blurTheText);
    }else if(40<=percentage && percentage<50){
        heatP.forEach(clearBlur);
    }else if(percentage>=50){
        heatP.forEach(blurTheText);
    }
}



window.addEventListener("scroll",heatWasScrolled);
// window.addEventListener("scroll",findSummer);

function blurTheText(element){
    console.log("the text is blur");
    element.style.filter = "blur(2px) brightness(1.4)";
}

function clearBlur(element) {
    element.style.filter = "none";
}

let summerSound = document.querySelector("#summerSound");
document.querySelector(".butterfly").addEventListener("click",function(){
summerSound.play();
});


function randomPosition(element){
    element.style.position = "absolute";
    element.style.left = Math.random() * (window.innerWidth) + "px";
    element.style.top = Math.random() * (window.innerHeight) + "px";
    let randomSize = Math.random()* 3;
    element.style.transform = "scale(" + randomSize + ")";
}

heatP.forEach(randomPosition);
document.querySelector(".heat:nth-child(1)").addEventListener("mouseover",randomPosition);
document.querySelector(".heat:nth-child(2)").addEventListener("mouseover",randomPosition);

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
    
// }





