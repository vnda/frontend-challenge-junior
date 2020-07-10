const showOnScroll = (targetId, AnimeClass) => {
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        entry.target.classList.remove(AnimeClass);
      } else {
        entry.target.classList.add(AnimeClass);
      }
    });
  };

  const observer = new IntersectionObserver(callback, { root: null });

  const targets = document.querySelectorAll(targetId);
  targets.forEach((target) => {
    observer.observe(target);
  });
};
export default showOnScroll;
