let show = true;

const menuSection = document.querySelector("header .container");
const menuToggle = menuSection.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial";

  menuSection.classList.toggle("on", show);
  show = !show;
});
