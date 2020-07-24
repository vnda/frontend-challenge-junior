window.addEventListener("load", () => {
  const load = document.querySelector(".wrap-loader");
  load.className += " hidden";

  const dot1 = document.querySelector(".dot-1");
  const dot2 = document.querySelector(".dot-2");
  const dot3 = document.querySelector(".dot-3");
  const dot4 = document.querySelector(".dot-4");
  const dot5 = document.querySelector(".dot-5");
  const dot6 = document.querySelector(".dot-6");
  dot1.className += " fadeInUp-1";
  dot2.className += " fadeInUp-2";
  dot3.className += " fadeInUp-3";
  dot4.className += " fadeInUp-4";
  dot5.className += " fadeInUp-5";
  dot6.className += " fadeInUp-6";

  // efeito typewriter
  const title = document.querySelector(".typewriter");

  typeWriter(title);

  function typeWriter(element) {
    const arrayText = element.innerHTML.split("");
    element.innerHTML = "";
    setTimeout(() => {
      arrayText.forEach((word, i) => {
        setTimeout(() => {
          element.innerHTML += word;
        }, 50 * i);
      });
    }, 3000);
  }
});
