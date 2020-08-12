function animate(animate, id) {
  let animatedElement = document.querySelector("." + id);
  const observer = new IntersectionObserver(
    (entries) => {
      const element = entries[0].target;

      if (entries[0].isIntersecting === true) {
        if (!element.classList.contains("")) element.classList.add(animate);
      } else {
        if (element.classList.contains("")) element.classList.remove(animate);
      }
    },
    { threshold: [0] }
  );

  observer.observe(animatedElement);
}

animate("fadeInUp-5", "card-1");
animate("fadeLeft", "card-2");
animate("fadeInUp-5", "card-3");
animate("fadeIn", "section-text");
animate("fadeIn", "section-2-text");
animate("fadeLeft", "section-2-slider");
animate("fadeIn", "background");
animate("fadeRight", "item-1");
animate("fadeInUp-5", "item-2");
animate("fadeLeft", "item-3");
