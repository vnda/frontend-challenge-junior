var toggleButton = document.querySelector(".toggle-menu");
var navBar = document.querySelector(".header-mobile");
toggleButton.addEventListener("click", function () {
  navBar.classList.toggle("toggle");
});
