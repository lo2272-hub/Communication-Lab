// old code:
function spanHovered(eventInfo){
    console.log("hello");

    eventInfo.target.style.color = "red";
    let randomX = Math.random()*200-100; // -100 to 100
    let randomY = Math.random()*200-100; // -100 to 100
    eventInfo.target.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
}

function addMover(element){
    element.addEventListener("mouseover", spanHovered);
}

// let allSpans = document.querySelectorAll("span");
// allSpans.forEach(addMover)



 let maxY1 = Math.random()*600-300;//global variable 


window.addEventListener("scroll", function(){
    let percentage = getScrollPercentage();

    console.log("scrolling");
    // select the first letter
    let firstSpan = document.querySelector("span:nth-child(1)");
    // move it using the "top" attribute 
    // let maxY = 300;
    let Y1 = maxY1*(1-percentage);
    firstSpan.style.top = (Y1 + "px");
    // firstSpan.style.transform = "translate(0px,"+ Y +"px)";
    // move it to a point that involves the percentage variable
    

    document.querySelector("span:nth-child(2)").style.top = ((1-percentage)*-200 + "px");
    document.querySelector("span:nth-child(3)").style.top = ((1-percentage)*-100 + "px");
    document.querySelector("span:nth-child(4)").style.top = ((1-percentage)*500 + "px");
    document.querySelector("span:nth-child(5)").style.top = ((1-percentage)*-400 + "px");
    document.querySelector("span:nth-child(6)").style.top = ((1-percentage)*-20 + "px");
    document.querySelector("span:nth-child(7)").style.top = ((1-percentage)*-50 + "px");
    document.querySelector("span:nth-child(8)").style.top = ((1-percentage)*60 + "px");
    document.querySelector("span:nth-child(9)").style.top = ((1-percentage)*900 + "px");
    document.querySelector("span:nth-child(10)").style.top = ((1-percentage)*-20 + "px");




})



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


function spinElm(element){
    let randomDeg = Math.random()*1000;
    element.style.transform = "rotate(" + randomDeg + "deg)";
}

function spanAll(){
let allSpans = document.querySelectorAll("span");
allSpans.forEach(spinElm)
}

document.querySelector("button").addEventListener("click",spanAll)
