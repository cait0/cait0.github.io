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

    leftArrow.addEventListener("mouseenter", function() {
        LA_bottom[0].style.fillOpacity = 0.4;
    });

    leftArrow.addEventListener("mouseleave", function() {
        LA_bottom[0].style.fillOpacity = 0.2;  
    });

    leftArrow.addEventListener("mousedown", function() {
        LA_bottom[0].style.fillOpacity = 0.4;
        LA_shadow[0].style.fill = "black";
        leftArrow.style.transform = "scale(0.92)"
    });

    leftArrow.addEventListener("mouseup", function() {
        LA_bottom[0].style.fillOpacity = 0.2;
        LA_shadow[0].style.fill = "none";
        leftArrow.style.transform = "scale(1)";
    });


//RIGHT ARROW

    let rightArrow = document.getElementById("rightArrow");
    let RA_bottom = document.getElementById("rightArrow").getElementsByClassName("bottom");
    let RA_shadow = document.getElementById("rightArrow").getElementsByClassName("shadow");
    let RA_outline = document.getElementById("rightArrow").getElementsByClassName("outline");

    rightArrow.addEventListener("mouseenter", function() {
        RA_bottom[0].style.fillOpacity = 0.4;                        
    });

    rightArrow.addEventListener("mouseleave", function() {
        RA_bottom[0].style.fillOpacity = 0.2;                         
    });

    rightArrow.addEventListener("mousedown", function() {
        RA_bottom[0].style.fillOpacity = 0.4;
        RA_shadow[0].style.fill = "black";
        rightArrow.style.transform = "scale(0.92)";
        man_next();
    })

    rightArrow.addEventListener("mouseup", function() {
        RA_bottom[0].style.fillOpacity = 0.2;
        RA_shadow[0].style.fill = "none";
        rightArrow.style.transform = "scale(1)";
    })


//PLAY PAUSE BUTTON

    //Elements
    let playing = false;

    let playPauseButton = document.getElementById("playPauseButton");

    let pause_bottom = document.getElementById("playPauseButton").getElementsByClassName("bottom pause");
    let play_bottom = document.getElementById("playPauseButton").getElementsByClassName("bottom play");

    let circle_top_shadow = document.getElementById("playPauseButton").getElementsByClassName("shadow circle_top_shadow"); 
    let pause_shadow = document.getElementById("playPauseButton").getElementsByClassName("shadow pause");
    let play_shadow = document.getElementById("playPauseButton").getElementsByClassName("shadow play");

    let pause_top = document.getElementById("playPauseButton").getElementsByClassName("top pause");
    let play_top = document.getElementById("playPauseButton").getElementsByClassName("top play");

    let circle_outline = document.getElementById("playPauseButton").getElementsByClassName("outline circle");
    let pause_outline = document.getElementById("playPauseButton").getElementsByClassName("outline pause");
    let play_outline = document.getElementById("playPauseButton").getElementsByClassName("outline play");

    function showPlay() {
        play_bottom[0].style.fill = "black";
    };

    function hidePlay() {
        circle_outline[0].style.fill = "none";
        play_outline[0].style.fill = "none";
        play_bottom[0].style.fill = "none";
        play_shadow[0].style.fill = "none";
    };

    function showPause() {
        pause_bottom[0].style.fill = "black";
    };

    function hidePause() {
        circle_outline[0].style.fill = "none";
        pause_outline[0].style.fill = "none";
        pause_bottom[0].style.fill = "none";
        pause_shadow[0].style.fill = "none";
    };

    playPauseButton.addEventListener("mouseenter", function() {
        
        if (!playing) {
            play_bottom[0].style.fillOpacity = 0.4;
        }
        else if (playing) {
            pause_bottom[0].style.fillOpacity = 0.4;
        }
        
    });

    playPauseButton.addEventListener("mouseleave", function() {
        
        if (!playing) {
            play_bottom[0].style.fillOpacity = 0.2;
        }
        else if (playing) {
            pause_bottom[0].style.fillOpacity = 0.2;
        }
        
    });

    playPauseButton.addEventListener("mousedown", function() {
        
        if (!playing) {
            play_bottom[0].style.fillOpacity = 0.5;
            play_shadow[0].style.fill = "black";
            circle_top_shadow[0].style.fill = "black";
            playPauseButton.style.transform = "scale(0.92)";
        }
        else if (playing) {
            pause_bottom[0].style.fillOpacity = 0.5;
            pause_shadow[0].style.fill = "black";
            circle_top_shadow[0].style.fill = "black";
            playPauseButton.style.transform = "scale(0.92)";
        }
        
    });

    playPauseButton.addEventListener("mouseup", function() {
        
        if (!playing) {
            play_bottom[0].style.fillOpacity = 0.2;
            play_shadow[0].style.fill = "none";
            circle_top_shadow[0].style.fill = "none";
            playPauseButton.style.transform = "scale(1)";
        }
        else if (playing) {
            pause_bottom[0].style.fillOpacity = 0.2;
            pause_shadow[0].style.fill = "none";
            circle_top_shadow[0].style.fill = "none";
            playPauseButton.style.transform = "scale(1)";
        }
        
    });


//IMAGE CAROUSEL

    let index = 0;
    let slideInterval = undefined;

    function man_next() {
        pause();
        index += 1;
        if (index > 6) {
            index = 0
        }
        switch (index) {
            case 0:
                document.getElementById("slideshow").style.animation = "next-image-one 1s forwards";
                break;
            case 1:
                document.getElementById("slideshow").style.animation = "next-image-two 1s forwards";
                break;
            case 2:
                document.getElementById("slideshow").style.animation = "next-image-three 1s forwards";
                break;
            case 3:
                document.getElementById("slideshow").style.animation = "next-image-four 1s forwards";
                break;
            case 4:
                document.getElementById("slideshow").style.animation = "next-image-five 1s forwards";
                break;
            case 5:
                document.getElementById("slideshow").style.animation = "next-image-six 1s forwards";
                break;
            case 6:
                document.getElementById("slideshow").style.animation = "next-image-seven 1s forwards";
                break;
        }
    }

    function man_prev() {
        pause();
        index -= 1;
        if (index < 0) {
            index = 6;
        }
        switch (index) {
            case 0:
                document.getElementById("slideshow").style.animation = "prev-image-one 1s forwards";
                break;
            case 1:
                document.getElementById("slideshow").style.animation = "prev-image-two 1s forwards";
                break;
            case 2:
                document.getElementById("slideshow").style.animation = "prev-image-three 1s forwards";
                break;
            case 3:
                document.getElementById("slideshow").style.animation = "prev-image-four 1s forwards";
                break;
            case 4:
                document.getElementById("slideshow").style.animation = "prev-image-five 1s forwards";
                break;
            case 5:
                document.getElementById("slideshow").style.animation = "prev-image-six 1s forwards";
                break;
            case 6:
                document.getElementById("slideshow").style.animation = "prev-image-seven 1s forwards";
                break;
        }
    }

    function auto_next() {

        index += 1;
        if (index > 6) {
            index = 0
        }
        switch (index) {
            case 0:
                document.getElementById("slideshow").style.animation = "next-image-one 1s forwards";
                break;
            case 1:
                document.getElementById("slideshow").style.animation = "next-image-two 1s forwards";
                break;
            case 2:
                document.getElementById("slideshow").style.animation = "next-image-three 1s forwards";
                break;
            case 3:
                document.getElementById("slideshow").style.animation = "next-image-four 1s forwards";
                break;
            case 4:
                document.getElementById("slideshow").style.animation = "next-image-five 1s forwards";
                break;
            case 5:
                document.getElementById("slideshow").style.animation = "next-image-six 1s forwards";
                break;
            case 6:
                document.getElementById("slideshow").style.animation = "next-image-seven 1s forwards";
                break;
        }

    }

    function play() {
        slideInterval = setInterval(auto_next, 3000);
        playing = true;
    }

    function pause() {
        clearInterval(slideInterval);
        playing = false;
        hidePause();
        showPlay();
    }

    function playPauseFunction() {
    
        if (!playing) {
            hidePlay();
            showPause();
            play();
        }
        
        else if (playing) {
            hidePause();
            showPlay();
            pause();
        }
        
    }


    //Keyboard event listener
    window.addEventListener("keydown", event => {
    
    if (event.key === "ArrowRight") {
        man_next();
    };
    if (event.key === "ArrowLeft") man_prev();
    
});
