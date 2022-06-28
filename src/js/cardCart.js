const removeCard = document.querySelectorAll('.card-close'),
    card = document.querySelectorAll('.card'),
    qnt = document.querySelectorAll('.cartqntd')
    
    // Seta logo no inicio a quantidade total de itens no carrinho
    qnt.forEach(e => {
        e.setAttribute("data-qnt", card.length)
    });


for (let i = 0; i < removeCard.length; i++) {
    var x = +removeCard.length
    removeCard[i].addEventListener('click', function () {
        this.parentNode.remove()
        x = x - 1
        let qntdCart = document.querySelectorAll('.cartqntd')
        qntdCart.forEach(e => {
            e.setAttribute("data-qnt", x)
        });
        CartEmpty()
    })
}

function CartEmpty() {
    const img = '<img class="cart-empty" src="src/assets/cart-empty.png" alt="Seu carriho está vázio" title="Seu carriho está vázio">'
    if (x < 1) {
        document.querySelector('.cart-body').insertAdjacentHTML('afterbegin', img)
    }
}