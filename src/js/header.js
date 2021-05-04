//Não sendo necessário, remove a cor do header
function removeBg(){
    if (window.scrollY == 0 && !searchField.classList.contains("show") && !navBar.classList.contains("nav-open")) {
        header.classList.remove("bg");
    }else{
        header.classList.add("bg");
    }
}

//Header sticky
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
});


//responsive nav
const burger = document.querySelector(".burger");
const navBar = document.querySelector(".navbar");

burger.addEventListener("click", () => {
    navBar.classList.toggle("nav-open");
    burger.classList.toggle("burger-rotate");
    removeBg()
});

//Searchbar
const searchIcon = document.getElementById("search-icon");
const searchField = document.getElementById("search-field");

searchIcon.addEventListener("click", () => {
    searchField.classList.toggle("show");
    removeBg();
})



