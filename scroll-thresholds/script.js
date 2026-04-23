
function windowWasScrolled(){
    let percentage = getScrollingPercentage();
    console.log("percentage",percentage);

    if(percentage > 33){
        console.log("paragraph appeared");
        document.querySelector(".one p").style.transform = "rotate(360deg)";
    }else{
        document.querySelector(".one p").style.transform ="rotate(0deg)";
    }
}

function scaleParagraph(){
    let percentage = getScrollingPercentage();
    console.log("percentage",percentage);

    if(percentage > 77){
        console.log("paragraph appeared");
        document.querySelector(".two p").style.transform = "scale(4)";
        document.querySelector(".two p").style.color = "lightpink";

    }else{
        document.querySelector(".two p").style.transform ="scale(1)";
        document.querySelector(".two p").style.color = "lightblue";
    }

    let windowWidth = window.innerWidth;
    let bunny_x_max = windowWidth - 100;
    let bunny_x = bunny_x_max * (percentage/100);
    document.querySelector("#bunny").style.transform ="translate(" + bunny_x + "px, 50px)";
}

window.addEventListener("scroll",scaleParagraph);
window.addEventListener("scroll",windowWasScrolled);

function getScrollingPercentage(){
    //how many px we have scrolled yet
    let scrollTop = window.scrollY;
    console.log(scrollTop);
    //how high is the page 
    let pageHeight = document.body.scrollHeight;
    console.log(scrollTop,pageHeight);
    //how high is the window 
    let windowHeight = window.innerHeight;
    //how far can we scroll
    let possibleScrollTap = pageHeight - windowHeight;
    console.log(scrollTop,possibleScrollTap);
    let percentage = (scrollTop/possibleScrollTap)*100; 
    // the percentage of how much we scrolled 
    console.log("percentage",percentage);
    return percentage;
}

