export const slider = () => {
  const sliderBlock = document.querySelector(".portfolio-content");
  const sliders = document.querySelectorAll(".portfolio-item");
  const dots = document.querySelectorAll(".dot");
  const timeInterval = 2000;

  let currentSlide = 0;
  let interval;

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };
  const nextlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(sliders, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");

    currentSlide = currentSlide < sliders.length - 1 ? currentSlide + 1 : 0;

    nextlide(sliders, currentSlide, "portfolio-item-active");
    nextlide(dots, currentSlide, "dot-active");
  };
  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };
  const stopSlide = () => {
    clearInterval(interval);
  };
  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();
    if (!e.target.matches(".dot, .portfolio-btn")) {
      return;
    }
    prevSlide(sliders, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");

    if (e.target.matches("#arrow-left")) {
      currentSlide = currentSlide > 0 ? currentSlide - 1 : sliders.length - 1;
    } else if (e.target.matches("#arrow-right")) {
      currentSlide = currentSlide < sliders.length - 1 ? currentSlide + 1 : 0;
    } else if (e.target.classList.contains("dot")) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }
    nextlide(sliders, currentSlide, "portfolio-item-active");
    nextlide(dots, currentSlide, "dot-active");
  });

  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        stopSlide();
      }
    },
    true
  );
  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        startSlide(timeInterval);
      }
    },
    true
  );

  startSlide(timeInterval);
};
