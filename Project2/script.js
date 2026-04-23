let reference = document.querySelector(".reference");
let heat = document.querySelector(".heat");
let heatP = document.querySelectorAll(".heatP");

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
    let percentage = (scrolledAlready / possibleScrollSpace);
    return percentage;
}


function blurTheText(element){
    console.log("the text is blur");
    element.style.filter = "blur(2px) brightness(1.4)";
}

heatP.forEach(blurTheText);

function randomPosition(element){
    element.style.position = "absolute";
    element.style.left = Math.random() * (window.innerWidth) + "px";
    element.style.top = Math.random() * (window.innerHeight) + "px";
    let randomSize = Math.random()* 3;
    element.style.transform = "scale(" + randomSize + ")";
}

heatP.forEach(randomPosition);




