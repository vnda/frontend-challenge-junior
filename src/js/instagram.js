// Fazendo animação ao passar o mouse por cima da section-instagram
const instaArray = document.querySelectorAll(".instagram .image");

// Criando o p que irá dentro da imagem
const paragrafo = document.createElement("p");
const paragrafoText = document.createTextNode(
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
);
paragrafo.appendChild(paragrafoText);

// capturando events de mouseenter e mouseleave
instaArray.forEach((insta) => {
  insta.addEventListener("mouseenter", (e) => {
    const icon = insta.children[0];
    const imageInsta = insta.children[1];

    insta.appendChild(paragrafo);
    paragrafo.style.zIndex = "2";
    paragrafo.style.width = "50%";
    paragrafo.style.height = "50%";
    icon.style.opacity = "0.1";
    imageInsta.style.opacity = "0.1";
  });

  insta.addEventListener("mouseleave", (e) => {
    const icon = insta.children[0];
    const imageInsta = insta.children[1];

    insta.removeChild(paragrafo);
    icon.style.opacity = "1";
    imageInsta.style.opacity = "0.5";
  });
});
