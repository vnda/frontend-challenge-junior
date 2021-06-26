const searchIcon = document.getElementById('iconsearch'),
      searchbar = document.getElementById('searchbar'),
      searchIconSubmit = document.getElementById('searchiconSubmit')
      
searchIcon.addEventListener('click', ()=> {
    searchbar.classList.toggle('-open')
    searchbar.querySelector('.searchbar-input').focus()
})
searchIconSubmit.addEventListener('click', ()=> {
    searchbar.submit()
    alert('você tentou pesquisar')
})