let email = document.querySelector(".email");
let text = document.querySelector(".email-text");
let facebook = document.querySelector(".fb");
let textFb = document.querySelector(".fb p");
let iconeFb = document.querySelector(".fb img");
let instagram = document.querySelector(".insta");
let textInsta = document.querySelector(".insta p");
let iconeInsta = document.querySelector(".insta img");
// input email
email.addEventListener("keyup", () => {
  text.innerHTML = "";
});

// facebook e instagram

facebook.addEventListener("mouseover", (e) => {
  iconeFb.src = "../src/assets/facebook-hover.svg";
  iconeFb.style.width = '22px'
  textFb.style.fontSize = "20px";
});

facebook.addEventListener("mouseout", (e) => {
  iconeFb.src = "../src/assets/facebook.svg";
  iconeFb.style.width = '18px'
  textFb.style.fontSize = "16px";

});

instagram.addEventListener("mouseover", (e) => {
  iconeInsta.src = "../src/assets/instagram-hover.svg";
  iconeInsta.style.width = '22px'
  textInsta.style.fontSize = "20px";
});

instagram.addEventListener("mouseout", (e) => {
  iconeInsta.src = "../src/assets/instagram.svg";
  iconeInsta.style.width = '18px'
  textInsta.style.fontSize = "16px";
});
