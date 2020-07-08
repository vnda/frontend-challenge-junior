var imageWidth = document.querySelector(".sliding-panel").offsetWidth;
var imageHeight = document.querySelector(".sliding-panel").offsetHeight - 73;

setImageSource("#imageOne", getImageSource(imageWidth, imageHeight));
setImageSource("#imageTwo", getImageSource(imageWidth, imageHeight));
setImageSource("#imageThree", getImageSource(imageWidth, imageHeight));
