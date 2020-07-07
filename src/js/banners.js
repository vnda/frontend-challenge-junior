// HELPERS
var hideLoadingOverlay = function () {
  var loadingOverlay = document.querySelector(".loading-overlay");
  loadingOverlay.style.display = "none";
};

var setImageSource = function (selector, source) {
  var image = document.querySelector(selector);
  if (image) {
    image.src = source;
    if (selector === "#imageOne") {
      image.addEventListener("load", hideLoadingOverlay);
      image.addEventListener("error", hideLoadingOverlay);
    }
  } else {
    console.log("ERROR: Element not found");
  }
};

var getImageSource = function (width, height) {
  return (
    "https://picsum.photos/seed/" +
    Math.round(Math.random() * 1000) +
    "/" +
    width +
    "/" +
    height +
    ".jpg"
  );
};

// SHOWCASE ONE
var bigBannerImageWidth = document.querySelector(".big-banner").offsetWidth;
var bigBannerImageHeight = document.querySelector(".big-banner").offsetHeight;

var smallBannerImageWidth = document.querySelector(".small-banner").offsetWidth;
var smallBannerImageHeight = document.querySelector(".small-banner")
  .offsetHeight;

setImageSource(
  "#banner-image-one",
  getImageSource(bigBannerImageWidth, bigBannerImageHeight - 100)
);
setImageSource(
  "#banner-image-two",
  getImageSource(smallBannerImageWidth, smallBannerImageHeight - 100)
);
setImageSource(
  "#banner-image-three",
  getImageSource(bigBannerImageWidth, bigBannerImageHeight - 100)
);

// SHOWCASE TWO

var bannerImageWidth = document.querySelector(".showcase-two-banner-image")
  .offsetWidth;
var bannerImageHeight = document.querySelector(".showcase-two-banner-image")
  .offsetHeight;

var productImageWidth = document.querySelector(".products-swiper-container")
  .offsetWidth;
var productImageHeight = document.querySelector(".products-swiper-container")
  .offsetHeight;

setImageSource(
  "#showcase-two-image-one",
  getImageSource(bannerImageWidth, bannerImageHeight)
);

setImageSource(
  "#productOne",
  getImageSource(productImageWidth, productImageHeight)
);

setImageSource(
  "#productTwo",
  getImageSource(productImageWidth, productImageHeight)
);

setImageSource(
  "#productThree",
  getImageSource(productImageWidth, productImageHeight)
);
