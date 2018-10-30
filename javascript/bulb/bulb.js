function toggleBulb() {
    
    var image = document.getElementById('myImage');

    if (image.src.match("bulbon")) {
        console.log('Bulb switched off');
        image.src = "./images/pic_bulboff.gif";
    } else {
        console.log('Bulb switchd on');
        image.src = "./images/pic_bulbon.gif";
    }
}