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
    element.style.filter = "blur(3px) brightness(1.4)";
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
hot.innerText = "Sometimes the sun is too hot, And often its golden face is dimmed."
let short = document.createElement("p");
short.innerText = "Rough winds shake the beloved buds of May, And summer is far too short."
let fade = document.createElement("p");
fade.innerText = "Everything beautiful eventually fades, By chance or nature's changing course."
let catchSummer = document.createElement("p");
catchSummer.innerText = "Keep scrolling";
let catchButterfly = document.createElement("p");
catchButterfly.innerText = "Catch the flying butterfly and begin your summer day";
let wheel = document.createElement("p");
wheel.innerText = "No summer stays where the days continue to turn."
let flower = document.createElement("a");
flower.innerText = "All seasons pass. Only summer glows."
flower.href = "index3.html";
hot.classList.add("hot");
short.classList.add("short");
fade.classList.add("fade");
catchSummer.classList.add("catchSummer");
catchButterfly.classList.add("catchButterfly");
wheel.classList.add("wheel");
flower.classList.add("flower");

// function addCatchButterfly(){
// let percentage = getScrollPercentage();
// if(percentage >= 0.5 && percentage <=1.5){
//    poem.append(catchButterfly); 
//    console.log("add catchButterfly");
// } else {
//    catchButterfly.remove();
//    console.log("remove catchButterfly");
// }
// }
// window.addEventListener("scroll", addCatchButterfly);
poem.append(catchButterfly);

function addHot() {
    let percentage = getScrollPercentage();
    if (percentage >= 1.5 && percentage <= 20) {
        poem.append(hot);
        console.log("add hot");
    } else {
        hot.remove();
        console.log("remove hot");
    }
}
window.addEventListener("scroll", addHot);

function addWheel() {
    let percentage = getScrollPercentage();
    if (percentage >= 25 && percentage <= 37) {
        poem.append(wheel);
        console.log("add wheel");
    } else {
        wheel.remove();
        console.log("remove wheel");
    }
}
window.addEventListener("scroll", addWheel);


function addShort() {
    let percentage = getScrollPercentage();
    if (percentage >= 43 && percentage <= 49) {
        poem.append(short);
        console.log("add short");
    } else {
        short.remove();
        console.log("remove short");
    }
}
window.addEventListener("scroll", addShort);

function addFade() {
    let percentage = getScrollPercentage();
    if (percentage >= 53 && percentage <= 59) {
        poem.append(fade);
        console.log("add fade");
    } else {
        fade.remove();
        console.log("remove fade");
    }
}
window.addEventListener("scroll", addFade);

function addCatchSummer() {
    let percentage = getScrollPercentage();
    if (percentage >= 65 && percentage <= 70) {
        poem.append(catchSummer);
        console.log("add catchSummer");
    } else {
        catchSummer.remove();
        console.log("remove catchSummer");
    }
}
window.addEventListener("scroll", addCatchSummer);

function addFlower(){
let percentage = getScrollPercentage();
if (percentage >=99 && percentage <= 100){
    poem.append(flower);
    console.log("add flower") ;
}else{
    flower.remove();
    console.log("remove flower");
}
}
window.addEventListener("scroll", addFlower);

//seasons
function windowWasScrolled() {
    // console.log("scrolled!")
    let percentage = getScrollPercentage();
    console.log("percentage", percentage);

    // target 16-45%
    let g1_start = 61;
    let g1_end = 83;
    if (percentage > g1_start && percentage < g1_end) {
        let performanceLength = g1_end - g1_start;
        //                              0    -   38        /    38 
        let animationPercentage = (percentage - g1_start) / performanceLength

        console.log("garfield percentage", animationPercentage)

        let numFrames = 10;
        let currentImageNumber = Math.floor(animationPercentage * numFrames);
        // console.log("show image number:", currentImageNumber)
        let frameSource = "images/season" + (currentImageNumber + 1) + ".png";
        // console.log("current frame source", frameSource)

        // change image
        let imgElement = document.querySelector(".gifWrapper img");
        imgElement.src = frameSource;

        if (currentImageNumber === 5) {
            imgElement.classList.remove("bw");
        } else {
            imgElement.classList.add("bw");
        }
    }



    let g2_start = 83;
    let g2_end = 97;
    if (percentage > g2_start && percentage < g2_end) {
        let performanceLength = g2_end - g2_start;
        //                              0    -   38        /    38 
        let animationPercentage = (percentage - g2_start) / performanceLength

        // console.log("garfield percentage", animationPercentage)

        let numFrames = 10;
        let currentImageNumber = Math.floor(animationPercentage * numFrames);
        // console.log("show image number:", currentImageNumber)
        let frameSource = "images/season" + (currentImageNumber + 1) + ".png";
        // console.log("current frame source", frameSource)

        // change image
        let imgElement = document.querySelector(".gifWrapper2 img");
        imgElement.src = frameSource;
        if (currentImageNumber === 5) {
            imgElement.classList.remove("bw");
        } else {
            imgElement.classList.add("bw");
        }
    }
let g3_start = 97;
let g3_end = 100;
if (percentage > g3_start && percentage < g3_end) {
    let performanceLength = g3_end - g3_start;
    //                              0    -   38        /    38 
    let animationPercentage = (percentage - g3_start) / performanceLength

    // console.log("garfield percentage", animationPercentage)

    let numFrames = 10;
    let currentImageNumber = Math.floor(animationPercentage * numFrames);
    // console.log("show image number:", currentImageNumber)
 let frameSource = "images/season" + (currentImageNumber + 1) + ".png";
     // console.log("current frame source", frameSource)

    // change image
    let imgElement = document.querySelector(".gifWrapper3 img");
    imgElement.src = frameSource;
     if(currentImageNumber === 5){
    imgElement.classList.remove("bw");
    } else {
    imgElement.classList.add("bw");
    }
}

}




window.addEventListener("scroll", windowWasScrolled);

