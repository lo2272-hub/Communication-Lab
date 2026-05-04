let paper=document.querySelector(".paper");
let thank=document.querySelector(".thank");

let live = document.createElement("p");
live.innerText = "The beauty of summer lives in small moments."
live.classList.add("live");
paper.append(live);

let pic = document.createElement("p");
pic.innerText = "Try to hover Pics :)"
pic.classList.add("pic");
paper.append(pic);

let short = document.createElement("p");
short.innerText = "Although summer is short."
short.classList.add("short");
paper.append(short);

let feel = document.createElement("p");
feel.innerText = "It has all the things that make summer"
feel.classList.add("feel");
paper.append(feel);

let like = document.createElement("p");
like.innerText = "feel like a summer."
like.classList.add("like");
paper.append(like);


let neverFade = document.createElement("p");
neverFade.innerText = "Also, your eternal summer shall not fade."
neverFade.classList.add("neverFade");
paper.append(neverFade);

let lose = document.createElement("p");
lose.innerText = " Nor lose the beauty that you possess."
lose.classList.add("lose");
paper.append(lose);

let thx= document.createElement("p");
thx.innerText ="Thank you for being part of the summer days."
thx.classList.add("thx");
thank.append(thx);

let back= document.createElement("a");
back.innerText ="Return"
back.classList.add("back");
back.href = "index.html";
thank.append(back);


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

function Scrolled() {
    let percentage = getScrollPercentage();
    console.log("percentage", percentage);
}

window.addEventListener("scroll", Scrolled);

function addLive() {
    let percentage = getScrollPercentage();
    if (percentage >= 4) {
        live.style.opacity="1";
        console.log("add live");
    } else {
        live.style.opacity="0";
        console.log("remove live");
    }
}
window.addEventListener("scroll", addLive);

function addPic() {
    let percentage = getScrollPercentage();
    if (percentage >= 4) {
        pic.style.opacity="1";
        console.log("add pic");
    } else {
        pic.style.opacity="0";
        console.log("remove pic");
    }
}
window.addEventListener("scroll", addPic);

function addShort() {
    let percentage = getScrollPercentage();
    if (percentage >= 60) {
        short.style.opacity="1";
        console.log("add short");
    } else {
        short.style.opacity="0";
        console.log("remove short");
    }
}
window.addEventListener("scroll", addShort);

function addFeel() {
    let percentage = getScrollPercentage();
    if (percentage >= 80) {
        feel.style.opacity="1";
        console.log("add feel");
        like.style.opacity="1";
        console.log("add like");
    } else {
        feel.style.opacity="0";
        console.log("remove feel");
        like.style.opacity="0";
        console.log("remove like");
    }
}
window.addEventListener("scroll", addFeel);

function addNeverFade() {
    let percentage = getScrollPercentage();
    if (percentage >= 100) {
        neverFade.style.opacity="1";
        console.log("add neverFade");
    } else {
        neverFade.style.opacity="0";
        console.log("remove neverFade");
    }
}
window.addEventListener("scroll", addNeverFade);

function addLose() {
    let percentage = getScrollPercentage();
    if (percentage >= 125) {
        lose.style.opacity="1";
        console.log("add lose");
    } else {
        lose.style.opacity="0";
        console.log("remove lose");
    }
}
window.addEventListener("scroll", addLose);

function addThx() {
    let percentage = getScrollPercentage();
    if (percentage >= 134) {
        thx.style.opacity="1";
        console.log("add thx");
        back.style.opacity="1";
        console.log("add back");
    } else {
        thx.style.opacity="0";
        console.log("remove thx");
        back.style.opacity="0";
        console.log("remove back");
    }
}
window.addEventListener("scroll", addThx);