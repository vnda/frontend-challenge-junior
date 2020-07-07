window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

var observerBottom = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    entry.target.classList.toggle("fade-from-bottom");
  });
});

var observerLeft = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    entry.target.classList.toggle("fade-from-left");
  });
});

var observerRight = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    entry.target.classList.toggle("fade-from-right");
  });
});

animatedFromBottom = document.querySelectorAll(".fade-object-bottom");
animatedFromBottom.forEach(function (object) {
  observerBottom.observe(object);
});

animatedFromLeft = document.querySelectorAll(".fade-object-left");
animatedFromLeft.forEach(function (object) {
  observerLeft.observe(object);
});

animatedFromRight = document.querySelectorAll(".fade-object-right");
animatedFromRight.forEach(function (object) {
  observerRight.observe(object);
});
