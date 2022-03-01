export const slider = (settings) => {
  const sliderBlock = document.querySelector(`.${settings.sliderClass}`);
  const sliders = document.querySelectorAll(`.${settings.itemSlideClass}`);
  const dotBlock = document.querySelector(`.${settings.dotsBlock}`);
  const timeInterval = 2000;

  let currentSlide = 0;
  let interval;
  let dots;

  const initSlide = (activeClassSlide, activeClassDot) => {
    console.log(activeClassSlide, activeClassDot);
    dotBlock.innerHTML = "";
    sliders.forEach((slide, index) => {
      const dot = document.createElement("li");
      dot.classList.add("dot");
      if (slide.classList.contains(activeClassSlide)) {
        dot.classList.add(activeClassDot);
        currentSlide = index;
      }
      dotBlock.append(dot);
    });

    // dots = document.querySelectorAll(".dot");
    // if (!currentSlide && sliders.length > 0) {
    //   currentSlide = 0;
    // }
  };

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const motionSlide = (callbackMotion) => {
    prevSlide(sliders, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");

    callbackMotion();

    nextSlide(sliders, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  };

  const autoSlide = () => {
    console.log(currentSlide);
    motionSlide(() => {
      currentSlide = currentSlide < sliders.length - 1 ? currentSlide + 1 : 0;
    });
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
    motionSlide(() => {
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
    });
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

  initSlide(settings.activeSlideClass, settings.activeDotClass);
  startSlide(timeInterval);
};
