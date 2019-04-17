//RANDOM BACKGROUND COLOUR
let rrr = Math.floor(Math.random() * (255 - 170) + 170);
let ggg = Math.floor(Math.random() * (255 - 170) + 170);
let bbb = Math.floor(Math.random() * (255 - 170) + 170);
let rrrgggbbb = "rgb("+rrr+","+ggg+","+bbb+")";

document.documentElement.style.setProperty("--random-background-color", rrrgggbbb);


//BACKGROUND COLOUR + DARK LEVEL 1
let rrr_dark1 = rrr - 20;
let ggg_dark1 = ggg - 20;
let bbb_dark1 = bbb - 20;
let rrrgggbbb_dark1 = "rgb("+rrr_dark1+","+ggg_dark1+","+bbb_dark1+")";


//BACKGROUND COLOUR + DARK LEVEL 2
let rrr_dark2 = rrr - 40;
let ggg_dark2 = ggg - 40;
let bbb_dark2 = bbb - 40;
let rrrgggbbb_dark2 = "rgb("+rrr_dark2+","+ggg_dark2+","+bbb_dark2+")";


//LEFT ARROW CUSTOM STYLING
let leftArrow = document.getElementById("leftArrow");
let LA_bottom = document.getElementById("leftArrow").getElementsByClassName("bottom");
let LA_shadow = document.getElementById("leftArrow").getElementsByClassName("shadow");
let LA_outline = document.getElementById("leftArrow").getElementsByClassName("outline");

LA_bottom[0].style.fill = rrrgggbbb;

leftArrow.addEventListener("mouseenter", function() {
    LA_bottom[0].style.fill = rrrgggbbb_dark1;
});

leftArrow.addEventListener("mouseleave", function() {
    LA_bottom[0].style.fill = rrrgggbbb;  
});

leftArrow.addEventListener("mousedown", function() {
    LA_bottom[0].style.fill = rrrgggbbb_dark2;
    LA_shadow[0].style.fill = "black";
    LA_shadow[0].style.stroke = "black";
})

leftArrow.addEventListener("mouseup", function() {
    LA_bottom[0].style.fill = rrrgggbbb;
    LA_shadow[0].style.fill = "none";
    LA_shadow[0].style.stroke = "none";
})

//RIGHT ARROW CUSTOM STYLING
let rightArrow = document.getElementById("rightArrow");
let RA_bottom = document.getElementById("rightArrow").getElementsByClassName("bottom");
let RA_shadow = document.getElementById("rightArrow").getElementsByClassName("shadow");
let RA_outline = document.getElementById("rightArrow").getElementsByClassName("outline");

RA_bottom[0].style.fill = rrrgggbbb;

rightArrow.addEventListener("mouseenter", function() {
    RA_bottom[0].style.fill = rrrgggbbb_dark1;                        
});

rightArrow.addEventListener("mouseleave", function() {
    RA_bottom[0].style.fill = rrrgggbbb;                         
});

rightArrow.addEventListener("mousedown", function() {
    RA_bottom[0].style.fill = rrrgggbbb_dark2;
    RA_shadow[0].style.fill = "black";
    RA_shadow[0].style.stroke = "black";
})

rightArrow.addEventListener("mouseup", function() {
    RA_bottom[0].style.fill = rrrgggbbb;
    RA_shadow[0].style.fill = "none";
    RA_shadow[0].style.stroke = "none";
})