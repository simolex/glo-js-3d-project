const slider = (currentSettings) => {
  const settings = {
    autoInterval: 2000,
    sliderClass: "portfolio-content",
    itemSlideClass: "portfolio-item",
    activeSlideClass: "slide-active",
    dotsBlock: "portfolio-dots",
    itemDotClass: "dot",
    activeDotClass: "dot-active",
    arrowClass: "portfolio-btn",
    prevArrowClass: "prev",
    nextArrowClass: "next",
    ...currentSettings,
  };

  const sliderBlock = document.querySelector(`.${settings.sliderClass}`);
  const sliders = document.querySelectorAll(`.${settings.itemSlideClass}`);
  const dotBlock = document.querySelector(`.${settings.dotsBlock}`);
  const timeInterval = settings.autoInterval;

  let currentSlide = 0;
  let interval;
  let dots;

  const initSlide = (activeClassSlide, activeClassDot) => {
    dotBlock.innerHTML = "";

    sliders.forEach((slide, index) => {
      const dot = document.createElement("li");
      dot.classList.add(settings.itemDotClass);
      if (slide.classList.contains(activeClassSlide)) {
        dot.classList.add(activeClassDot);
        currentSlide = index;
      }
      dotBlock.append(dot);
    });

    dots = document.querySelectorAll(`.${settings.itemDotClass}`);
  };

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };
  //,

  const motionSlide = (callbackMotion) => {
    prevSlide(sliders, currentSlide, settings.activeSlideClass);
    prevSlide(dots, currentSlide, settings.activeDotClass);

    callbackMotion();

    nextSlide(sliders, currentSlide, settings.activeSlideClass);
    nextSlide(dots, currentSlide, settings.activeDotClass);
  };

  const autoSlide = () => {
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

  if (!!sliderBlock && sliders.length > 0) {
    initSlide(settings.activeSlideClass, settings.activeDotClass);

    sliderBlock.addEventListener("click", (e) => {
      e.preventDefault();
      if (!e.target.matches(`.${settings.arrowClass}, .${settings.itemDotClass}`)) {
        return;
      }
      motionSlide(() => {
        if (e.target.matches(`.${settings.arrowClass}.${settings.prevArrowClass}`)) {
          currentSlide = currentSlide > 0 ? currentSlide - 1 : sliders.length - 1;
        } else if (e.target.matches(`.${settings.arrowClass}.${settings.nextArrowClass}`)) {
          currentSlide = currentSlide < sliders.length - 1 ? currentSlide + 1 : 0;
        } else if (e.target.classList.contains(settings.itemDotClass)) {
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
        if (e.target.matches(`.${settings.arrowClass}, .${settings.itemDotClass}`)) {
          stopSlide();
        }
      },
      true
    );

    sliderBlock.addEventListener(
      "mouseleave",
      (e) => {
        if (e.target.matches(`.${settings.arrowClass}, .${settings.itemDotClass}`)) {
          startSlide(timeInterval);
        }
      },
      true
    );

    startSlide(timeInterval);
  }
};
export default slider;
