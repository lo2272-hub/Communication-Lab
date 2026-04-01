let monkeyEnclosure = document.querySelector("#monkeyEnclosure")

function newMonkey(){
    newAnimal("monkey", monkeyEnclosure)
//   console.log("making new monkey");
//   //make div
//   let div = document.createElement("div");
  
//   //add class name
//   div.className = "monkey";
//   //make position random
//   let randomY = Math.random()*200-100;
//   div.style.top = randomY + "px";
//    let randomX = Math.random()*200-100;
//   div.style.left = randomX + "px";

//   //make a p tag
//   let p = document.createElement("p");
//   //add text
//   p.innerText = "monkey";
  
//   //attach p tag to div
//   div.append(p);
//   monkeyEnclosure.append(div);
}

function newAnimal(name,enclosure){
 console.log("making new" + name);
  //make div
  let div = document.createElement("div");
  
  //add class name
  div.className = name;
  //make position random
  let randomY = Math.random()*200-100;
  div.style.top = randomY + "px";
   let randomX = Math.random()*200-100;
  div.style.left = randomX + "px";

  //make a p tag
  let p = document.createElement("p");
  //add text
  p.innerText = name;
  
  //attach p tag to div
  div.append(p);
  monkeyEnclosure.append(div);
}

function newGiraff(){
    newAnimal("giraff", giraffEnclosure)
}