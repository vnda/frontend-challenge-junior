
const Gets = () => {
    // Pega os menus com fetch do arquivo infos.json
    fetch(menus,{method: "GET"})
    .then(response => response.json())
    .then(response => {
        Creates(response.header.menus,"header");
        Creates(response.header.icons,"headerIcons");
        Creates(response.header.logo,"logo");
        Creates(response.institutional,"institutional")
        Creates(response.institutional.banner, 'bannerInstitucionalPrince');
        Creates(response.institutional.banner, 'bannerInstitucional2');
        Creates(response.description,'products');
        Creates(response.insta,"insta");
        Creates(response.insta.banner,"instaBanner");
        Creates(response.footer.menus,"footerMenu");
        Creates(response.footer.icons,"footerIcons");
        Creates(response.footer.copyright,"footerCopyright");
    });
};

const Creates = (obj,tag) => {
    let menuListHeader = document.querySelector('.header-container .menu'); 
    let menuListHeaderMobile = document.querySelector('.header-container .menuMobile'); 
    let iconsHeader = document.querySelector('.header-container .icons');
    let menuListFooter = document.querySelector('.footer-container .subMenus');
    let footerIcons = document.querySelector('.footer-container .icons');
    let logo = document.querySelector('.-logo');
    let logoFooter = document.querySelector('.footer-container .-logo');
    let bannerGlobal = document.querySelector('.banner-global .swiper-wrapper');
    let institutional = document.querySelector('.infos-container .description');
    let bannerInstitucional = document.querySelector('.infos-container .infoBanner');
    let bannerInstitucional2 = document.querySelector('.infos-container .infoBanner2');
    let products = document.querySelector('.infos-produtos');
    let insta = document.querySelector('.rede-social');
    let instaBanner = document.querySelectorAll('.rede-social .img');
    let footerCopyright = document.querySelector('.footer-container .copyright');
    let search = document.querySelector('#search');
    let avatar = document.querySelector('#avatar');
    let carrinho = document.querySelector('#carrinho');
    let searchMobile = document.querySelector('#searchMobile');
    let avatarMobile = document.querySelector('#avatarMobile');
    let carrinhoMobile = document.querySelector('#carrinhoMobile');
    let saida = '';
    try {
        for (let i = 0; i < obj.length; i++) {
            if(tag == 'logo'){
                const {src,alt} = obj[i];
                saida +=`<img class="logo" src="${src}" alt="${alt}">`
            }else if(tag == 'header'){
                const {name,link} = obj[i];
                saida +=`<li><a class="link" href="${link}">${name}</a></li>`;
            }else if(tag == 'headerIcons'){
                const {name,src} = obj[i];
                if(name == 'search') {
                    saida = `<img src="${src}" alt="${name}">`;
                    search.innerHTML = saida;
                    searchMobile.innerHTML = saida;
                }else if(name == 'avatar') {
                    saida = `<img src="${src}" alt="${name}">`;
                    avatar.innerHTML = saida;
                    avatarMobile.innerHTML = saida;
                }else if(name == 'carrinho') {
                    saida = `<img src="${src}" alt="${name}">`;
                    carrinho.innerHTML = saida;
                    carrinhoMobile.innerHTML = saida;
                }
            }else if(tag == 'footerMenu'){
                const {name,link} = obj[i];
                saida +=`<li><a class="link" href="${link}">${name}</a></li>`
            }else if(tag == 'footerIcons'){
                const {name,src,link} = obj[i];
                saida +=`<li class="icon"><a class="link" href="${link}" target="_blank" id="${name}"><img class="logo" src="${src}" alt="${name}"><span class="name">${name}</span></a></li>`;
            }else if(tag == 'bannerInstitucionalPrince'){
                if(i==0){
                    const {src,alt,title,desc} = obj[i];
                    saida += `<div class="imgBanner"><img src="${src}" alt="${alt}>"</div>
                    <div class="titleBanner"><h2 class="title">${title}</h2></div>
                    <div class="descBanner"><p class="desc">${desc}</p></div>`;
                }
            }else if(tag == 'bannerInstitucional2'){
                if(i != 0) {
                    const {src,alt,title,desc} = obj[i];
                    saida += `<div class="imgBanner"><img src="${src}" alt="${alt}"></div>
                    <div class="titleBanner"><h2 class="title">${title}</h2></div>
                    <div class="descBanner"><p class="desc">${desc}</p></div>`;
                }
            }else if(tag == 'instaBanner'){
                    const {src,alt} = obj[i];
                    saida = `<img src="${src}" alt="${alt}">`;
                    instaBanner[i].innerHTML = saida;
            }
            
        }
        if(tag == "header"){
            menuListHeader.innerHTML = saida;
            menuListHeaderMobile.innerHTML = saida;
        }else if(tag == "footerMenu"){
            menuListFooter.innerHTML = saida;
        }else if(tag == "footerIcons"){
            footerIcons.innerHTML = saida;
        }else if(tag == "logo"){
            logo.innerHTML = saida;
            logoFooter.innerHTML = saida;
        }else if(tag == 'institutional'){
            const {title,desc} = obj;
            saida +=`<h2 class="title">${title}</h2>
            <p class="desc">${desc}</p>`;
            institutional.innerHTML = saida;
        }else if(tag == 'bannerInstitucionalPrince'){
            bannerInstitucional.innerHTML = saida;
        }else if(tag == 'bannerInstitucional2'){
            bannerInstitucional2.innerHTML = saida;
        }else if(tag == 'products'){
            const {src,alt,title,desc,btn} = obj;
            let imagem = document.querySelector('.infos-produtos .img');
            saida = `<img src="${src}" alt="${alt}">`;
            imagem.innerHTML = saida;
            let descricao = document.querySelector('.infos-produtos .description');
            saida = `<h2 class="title">${title}</h2>
            <p class="desc">${desc}</p>
            <a id="btn-product" href="#emailNews">${btn}</a>`;
            descricao.innerHTML = saida;
            
        }else if(tag == 'insta'){
            const {title,desc} = obj;
                saida += `<h2 class="title">${title}</h2>
                <div class="imgContainer">
                <div class="img"></div>
                <div class="descInsta"><p class="desc">${desc}</p></div>
                <div class="img"></div>
            </div>`;
        
            insta.innerHTML = saida;
        }else if(tag == 'footerCopyright') {
            saida = obj;
            footerCopyright.innerHTML = saida;
        }
        
    } catch (error) {
        saida += 'Erro ao buscar menus';
        if(tag == "header"){
            menuListHeader.nnerHTML = saida;
        }else if(tag == "footer"){
            menuListFooter.innerHTML = saida;
        }else if(tag = "logo"){
            logo.innerHTML = saida;
        }else if(tag == "bannerInstitucionalPrince"){
            bannerGlobal.innerHTML = saida;
        }else if(tag == 'bannerInstitucionalPrince'){
            bannerInstitucional.innerHTML = saida;
        }else if(tag == 'products'){
            products.appendChild(saida);
        }else if(tag == 'insta'){
            insta.innerHTML = saida;
        }else if(tag == "headerIcons"){
            iconsHeader.innerHTML = saida;
        }
    }
}