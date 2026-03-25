//define functions
    let container = document.querySelector(".boxContainer");


function addParagraph(){
    //create the element
    let paragraph = document.createElement('p');
    //manipulate it
    paragraph.innerText = "does this work?";

    //make it on the page 
    document.body.append(paragraph);
}



function addBox(){
    let box = document.createElement('div');
    // box.style.width = "100px";
    // box.style.height = "100px";
    // box.style.color = "pink";
    box.className = "box";

    //select container
    // let container = document.querySelector(".boxContainer");

    //apend the box to container
    container.append(box);
}

function removeBox(){
    container.remove();
}

function moveContainer(){
let randomNumber = (Math.random()*200)-100;
    console.log(randomNumber);

    container.style.left = randomNumber + "px";

}