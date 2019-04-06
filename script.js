let imageArray = new Array("Images/img1.jpg", "Images/img2.jpg", "Images/img3.jpg");
let imageIndex = 0;

//Buttons add or deduct 1 from n
function manChangeImage(n) {
    
    pause();
    imageIndex += n;
    
    //If at last image from imageArray when going forward - point to first image
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }

    //If at first image when going back - point back to last image
    if (imageIndex < 0) {
        imageIndex = imageArray.length - 1;
    }

    //Change image in HTML
    document.slideshow.src = imageArray[imageIndex];
            
}

function autoChangeImage() {
    
     imageIndex++;
    
    //If at last image from imageArray when going forward - point to first image
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }

    //If at first image when going back - point back to last image
    if (imageIndex < 0) {
        imageIndex = imageArray.length - 1;
    }

    //Change image in HTML
    document.slideshow.src = imageArray[imageIndex];
    
}

let playing = false;
let slideInterval = undefined;

function play() {
    slideInterval = setInterval("autoChangeImage()", 1000);
    //document.getElementById("playPause").innerHTML = "&#9612;&#9612;";
    playing = true;
    //console.log("playing: " + playing);
}

function pause() {
    clearInterval(slideInterval);
    //document.getElementById("playPause").innerHTML = "&#9658;";
    playing = false;
    //console.log("playing: " + playing);
}

function playPause() {
    
    if (playing) {
        return pause();
    } else {
        return play();
    }
    
}

window.addEventListener("keydown", event => {
    
    //next
    if (event.key === "ArrowRight") manChangeImage(1);
    if (event.key === "ArrowLeft") manChangeImage(-1);
    //prev
    
});