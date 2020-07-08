var image = document.getElementById("image");
var currentPos = 0;
var images = ["indexbkg.jpg", "bckg.png","image.png"]

function volgendefoto() {
    if (++currentPos >= images.length)
        currentPos = 0;

    image.src = images[currentPos];
}

setInterval(volgendefoto, 3000);