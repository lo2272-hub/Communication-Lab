function startButton(){
    let stop = document.querySelector(".start");
    console.log("start!");
    turnElementlightblue(document.body);
    disappear(stop);
    instruction();
    mouse();
    cat();


    // create rat button and append to body
function mouse(){
    let btn1 = document.createElement('button');
    btn1.innerText = '🐭';
    document.querySelector(".game").append(btn1);
    console.log("mouse appear");
    btn1.addEventListener("click", function(){
    randomMove(btn1);
    let more = document.createElement("p");
    more.innerHTML = 'more rats !'
    more.classList.add("more");
    document.querySelector(".game").append(more);
    randomMove(more);
    backgroundChange();
});
    randomMove(btn1);
    btn1.onclick = mouse;
}

    // creat cat....
function cat(){
    let btn2 = document.createElement('button');
    btn2.innerText = '🐱';
    document.querySelector(".game").append(btn2);
    console.log("cat appear");
    btn2.onclick = function(){
        let all = document.querySelector(".game");
        disappear(all);
        console.log("should all disappear");
    }
    }
}


function turnElementlightblue(element){
    element.style.backgroundColor = "lightblue";
}

function disappear(element){
    console.log("should disappear");
    element.remove();
}

function randomMove(element){
    element.style.position = "absolute";
    element.style.left = Math.random()*1400 + "px";
    element.style.top = Math.random()*800+ "px";
}

function backgroundChange(){
    let r = Math.random()*255;
    let g = Math.random()*255;
    let b = Math.random()*255;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

function instruction(){
    let ins = document.createElement('p');
    ins.innerHTML = 'A cat want to chase rats, but ... Anyway, click the rat first'
    ins.classList.add("instruction");
    document.querySelector(".game").append(ins);
}