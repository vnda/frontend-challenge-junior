import{Order}from"../models/Order.js";const CartController=e=>{const t=document.getElementById("cart-items-list"),n=document.getElementById("total"),r=document.getElementById("order-link"),a=Order(),i=()=>{t.innerHTML="",n.innerHTML="",e.getItemsList().map(e=>{const n=document.createElement("li"),r=document.createElement("img"),a=document.createElement("div"),i=document.createElement("h5"),d=document.createElement("span"),s=document.createElement("button");n.classList.add("carditem"),r.classList.add("image"),i.classList.add("name"),d.classList.add("price"),s.classList.add("remove"),a.classList.add("description"),r.src=e.img_url,i.innerText=e.name,d.innerText=e.price.toLocaleString("pt-br",{style:"currency",currency:"BRL"}),s.innerHTML='<i class="fa-solid fa-trash-can"></i>',s.id=e.id,n.appendChild(r),a.appendChild(i),a.appendChild(d),n.appendChild(a),n.appendChild(s),t.appendChild(n)}),d(),(()=>{const t=Array.from(document.querySelectorAll(".remove"));for(let n of t)n.addEventListener("click",()=>{e.removeItem(n.id),i(e.getItemsList())})})()},d=()=>{if(e.getItemsList().length>0){const t=document.createElement("span");return t.innerText=a.totalPrice(e.getItemsList()),n.innerHTML='<span id="total-price" class="total">Preço total:</span>',n.appendChild(t),void(r.href=a.createOrder(e.getItemsList()))}n.innerHTML='<span id="total-price" class="total -empty">Carrinho vazio</span>'};return{createList:i}};export{CartController};