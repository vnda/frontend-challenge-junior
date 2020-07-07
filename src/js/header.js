var toggleButton = document.querySelector(".toggle-menu");
var navBar = document.querySelector(".nav-bar-mobile");
toggleButton.addEventListener("click", function () {
  navBar.classList.toggle("toggle");
});
