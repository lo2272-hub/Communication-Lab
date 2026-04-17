function getTheTime(){
    let now = new Date();

    let h = now.getHours();     
    let h1 = String(h).slice(0,1);
    let h2 = String(h).slice(1,2); 
    let m = now.getMinutes();   
    let m1 = String(m).slice(0,1);
    let m2 = String(m).slice(1,2);
    let s = now.getSeconds();    
    let s1 = String(s).slice(0,1);
    let s2 = String(s).slice(1,2);
    console.log( h, m, s );

    let clockh1 = document.querySelector(".clockh1");
    changeColor(h1,clockh1);
    let clockh2 = document.querySelector(".clockh2");
    changeColor(h2,clockh2);
    let clockm1 = document.querySelector(".clockm1");
    changeColor(m1,clockm1);
     let clockm2 = document.querySelector(".clockm2");
    changeColor(m2,clockm2);
    let clocks1 = document.querySelector(".clocks1");
    changeColor(s1,clocks1);
    let clocks2 = document.querySelector(".clocks2");
    changeColor(s2,clocks2);

}


function changeColor(h1,element){
    if(h1 == 1){
        console.log("number is 1");
        element.style.backgroundColor = "#FF0000"
    }else if(h1 == 2){
        console.log("number is 2");
        element.style.backgroundColor = "#FF2A00"
    }else if(h1 == 3){
        console.log("number is 3");
        element.style.backgroundColor = "#FF7A00"
    }else if(h1 == 4){
        console.log("number is 4");
        element.style.backgroundColor = "#FFB200"
    }else if(h1 == 5){
        console.log("number is 5");
        element.style.backgroundColor = "#FFFF00"
    }else if(h1 == 6){
        console.log("number is 6");
        element.style.backgroundColor = "#A6FF00"
    }else if(h1 == 7){
        console.log("number is 7");
        element.style.backgroundColor = "#00FF2A"
    }else if(h1 == 8){
        console.log("number is 8");
        element.style.backgroundColor = "#00E5FF"
    }else if(h1 == 9){
        console.log("number is 9");
        element.style.backgroundColor = "#7A00FF"
    }else if(h1  == 0){
        console.log("number is 0");
        element.style.backgroundColor = "white";
    }
}

function changeColor(h2,element){
    if(h2 == 1){
        console.log("number is 1");
        element.style.backgroundColor = "#FF0000"
    }else if(h2 == 2){
        console.log("number is 2");
        element.style.backgroundColor = "#FF2A00"
    }else if(h2 == 3){
        console.log("number is 3");
        element.style.backgroundColor = "#FF7A00"
    }else if(h2 == 4){
        console.log("number is 4");
        element.style.backgroundColor = "#FFB200"
    }else if(h2 == 5){
        console.log("number is 5");
        element.style.backgroundColor = "#FFFF00"
    }else if(h2 == 6){
        console.log("number is 6");
        element.style.backgroundColor = "#A6FF00"
    }else if(h2 == 7){
        console.log("number is 7");
        element.style.backgroundColor = "#00FF2A"
    }else if(h2 == 8){
        console.log("number is 8");
        element.style.backgroundColor = "#00E5FF"
    }else if(h2 == 9){
        console.log("number is 9");
        element.style.backgroundColor = "#7A00FF"
    }else if(h2 == 0){
        console.log("number is 0");
        element.style.backgroundColor = "white";
    }
}

function changeColor(m1,element){
    if(m1 == 1){
        console.log("number is 1");
        element.style.backgroundColor = "#FF0000"
    }else if(m1 == 2){
        console.log("number is 2");
        element.style.backgroundColor = "#FF2A00"
    }else if(m1 == 3){
        console.log("number is 3");
        element.style.backgroundColor = "#FF7A00"
    }else if(m1 == 4){
        console.log("number is 4");
        element.style.backgroundColor = "#FFB200"
    }else if(m1 == 5){
        console.log("number is 5");
        element.style.backgroundColor = "#FFFF00"
    }else if(m1 == 6){
        console.log("number is 6");
        element.style.backgroundColor = "#A6FF00"
    }else if(m1 == 7){
        console.log("number is 7");
        element.style.backgroundColor = "#00FF2A"
    }else if(m1 == 8){
        console.log("number is 8");
        element.style.backgroundColor = "#00E5FF"
    }else if(m1 == 9){
        console.log("number is 9");
        element.style.backgroundColor = "#7A00FF"
    }else if(m1 == 0){
        console.log("number is 0");
        element.style.backgroundColor = "white";
    }
}



function changeColor(m2,element){
    if(m2 == 1){
        console.log("number is 1");
        element.style.backgroundColor = "#FF0000"
    }else if(m2 == 2){
        console.log("number is 2");
        element.style.backgroundColor = "#FF2A00"
    }else if(m2 == 3){
        console.log("number is 3");
        element.style.backgroundColor = "#FF7A00"
    }else if(m2 == 4){
        console.log("number is 4");
        element.style.backgroundColor = "#FFB200"
    }else if(m2 == 5){
        console.log("number is 5");
        element.style.backgroundColor = "#FFFF00"
    }else if(m2 == 6){
        console.log("number is 6");
        element.style.backgroundColor = "#A6FF00"
    }else if(m2 == 7){
        console.log("number is 7");
        element.style.backgroundColor = "#00FF2A"
    }else if(m2 == 8){
        console.log("number is 8");
        element.style.backgroundColor = "#00E5FF"
    }else if(m2 == 9){
        console.log("number is 9");
        element.style.backgroundColor = "#7A00FF"
    }else if(m2 == 0){
        console.log("number is 0");
        element.style.backgroundColor = "white";
    }
}


function changeColor(s1,element){
    if(s1 == 1){
        console.log("number is 1");
        element.style.backgroundColor = "#FF0000"
    }else if(s1 == 2){
        console.log("number is 2");
        element.style.backgroundColor = "#FF2A00"
    }else if(s1 == 3){
        console.log("number is 3");
        element.style.backgroundColor = "#FF7A00"
    }else if(s1 == 4){
        console.log("number is 4");
        element.style.backgroundColor = "#FFB200"
    }else if(s1 == 5){
        console.log("number is 5");
        element.style.backgroundColor = "#FFFF00"
    }else if(s1 == 6){
        console.log("number is 6");
        element.style.backgroundColor = "#A6FF00"
    }else if(s1 == 0){
        console.log("number is 0");
        element.style.backgroundColor = "white";
    }
}

function changeColor(s2,element){
    if(s2 == 1){
        console.log("number is 1");
        element.style.backgroundColor = "#FF0000"
    }else if(s2 == 2){
        console.log("number is 2");
        element.style.backgroundColor = "#FF2A00"
    }else if(s2 == 3){
        console.log("number is 3");
        element.style.backgroundColor = "#FF7A00"
    }else if(s2 == 4){
        console.log("number is 4");
        element.style.backgroundColor = "#FFB200"
    }else if(s2 == 5){
        console.log("number is 5");
        element.style.backgroundColor = "#FFFF00"
    }else if(s2 == 6){
        console.log("number is 6");
        element.style.backgroundColor = "#A6FF00"
    }else if(s2 == 7){
        console.log("number is 7");
        element.style.backgroundColor = "#00FF2A"
    }else if(s2 == 8){
        console.log("number is 8");
        element.style.backgroundColor = "#00E5FF"
    }else if(s2 == 9){
        console.log("number is 9");
        element.style.backgroundColor = "#7A00FF"
    }else if(s2 == 0){
        console.log("number is 0");
        element.style.backgroundColor = "white";
    }
}
 
setInterval(getTheTime, 1000);


