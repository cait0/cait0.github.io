let index = 0;
let slideInterval = undefined;
let playing = false;

function man_next() {
    
    pause();
    
    index += 1;
    
    if (index > 2) {
        index = 0
    }
    
    switch (index) {
        case 0:
            document.getElementById("slide").style.animation = "next-image-one 1s forwards";
            break;
        case 1:
            document.getElementById("slide").style.animation = "next-image-two 1s forwards";
            break;
        case 2:
            document.getElementById("slide").style.animation = "next-image-three 1s forwards";
            break;
    }
    
}

function man_prev() {
    
    pause();
    
    index -= 1;
    
    if (index < 0) {
        index = 2;
    }
    
    switch (index) {
        case 0:
            document.getElementById("slide").style.animation = "prev-image-one 1s forwards";
            break;
        case 1:
            document.getElementById("slide").style.animation = "prev-image-two 1s forwards";
            break;
        case 2:
            document.getElementById("slide").style.animation = "prev-image-three 1s forwards";
            break;
    }
    
}

function auto_next() {
    
    index += 1;
    
    if (index > 2) {
        index = 0
    }
    
    switch (index) {
        case 0:
            document.getElementById("slide").style.animation = "next-image-one 1s forwards";
            break;
        case 1:
            document.getElementById("slide").style.animation = "next-image-two 1s forwards";
            break;
        case 2:
            document.getElementById("slide").style.animation = "next-image-three 1s forwards";
            break;
    }
    
}

function play() {
    
    slideInterval = setInterval(auto_next, 1000);
    playing = true;
    document.getElementById("playPause").innerHTML = "pause";
    
}

function pause() {
    
    clearInterval(slideInterval);
    playing = false;
    document.getElementById("playPause").innerHTML = "play";
}

function playPause() {
    
    if (playing) {
        return pause();
    }
    else {
        return play();
    }
    
}