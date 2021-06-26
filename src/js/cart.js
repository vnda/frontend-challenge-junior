const openCart = document.getElementById("cartBag")
const closeCart = document.querySelector(".cart-close")
const cart = document.querySelector('.cart')
const fade = document.querySelector('.cart-overlay')

const cartToggle = () => {
    cart.classList.toggle("-open")
    fade.classList.toggle("-open")
}
openCart.addEventListener("click", cartToggle)
closeCart.addEventListener("click", cartToggle)
fade.addEventListener("click", cartToggle)
