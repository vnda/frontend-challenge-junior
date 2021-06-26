var x = document.querySelectorAll(".footer-itemtitle")

x.forEach(e => {
    e.addEventListener("click", ()=> {
        var panel = e.nextElementSibling
        panel.classList.toggle('-open')
        
    })
});