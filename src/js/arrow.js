const arrow = document.querySelector('.arrow')

arrow.addEventListener("click", () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
})