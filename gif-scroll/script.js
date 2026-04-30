// add a event listener to the window
// the event we want to listen to is called "scroll"



function windowWasScrolled() {
    // console.log("scrolled!")
    let wholePagePercentage = getScrollPercentage();
    console.log("percentage", wholePagePercentage);

    // target 16-45%
    let g1_start = 16;
    let g1_end = 45;
    if(wholePagePercentage > g1_start && wholePagePercentage < g1_end){
        let performanceLength = g1_end-g1_start;
        //                              0    -   38        /    38 
        let animationPercentage = (wholePagePercentage-g1_start) / performanceLength

        // console.log("garfield percentage", animationPercentage)

        let numFrames = 17;
        let currentImageNumber = Math.floor(animationPercentage*numFrames);
        // console.log("show image number:", currentImageNumber)
        let frameSource = "garfield-frames/g"+ currentImageNumber +"n.png";
        // console.log("current frame source", frameSource)

        // change image
        let imgElement = document.querySelector(".gifWrapper img");
        imgElement.src = frameSource;

    }

    let g2_start = 49;
    let g2_end = 62;
    if(wholePagePercentage > g2_start && wholePagePercentage < g2_end){
        let performanceLength = g2_end-g2_start;
        //                              0    -   38        /    38 
        let animationPercentage = (wholePagePercentage-g2_start) / performanceLength

        // console.log("garfield percentage", animationPercentage)

        let numFrames = 17;
        let currentImageNumber = Math.floor(animationPercentage*numFrames);
        // console.log("show image number:", currentImageNumber)
        let frameSource = "garfield-frames/g"+ currentImageNumber +"n.png";
        // console.log("current frame source", frameSource)

        // change image
        let imgElement = document.querySelector(".gifWrapper2 img");
        imgElement.src = frameSource;

    }


    let g3_start = 66;
    let g3_end = 68;
    if(wholePagePercentage > g3_start && wholePagePercentage < g3_end){
        let performanceLength = g3_end-g3_start;
        //                              0    -   38        /    38 
        let animationPercentage = (wholePagePercentage-g3_start) / performanceLength

        // console.log("garfield percentage", animationPercentage)

        let numFrames = 17;
        let currentImageNumber = Math.floor(animationPercentage*numFrames);
        // console.log("show image number:", currentImageNumber)
        let frameSource = "garfield-frames/g"+ currentImageNumber +"n.png";
        // console.log("current frame source", frameSource)

        // change image
        let imgElement = document.querySelector(".gifWrapper3 img");
        imgElement.src = frameSource;

    }


    


}
window.addEventListener("scroll", windowWasScrolled);






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