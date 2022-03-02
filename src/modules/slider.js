export const slider = () => {
  const sliderBlock = document.querySelector(".portfolio-content");
  const sliders = document.querySelectorAll(".portfolio-item");
  const dotBlock = document.querySelector(".portfolio-dots");
  const timeInterval = 2000;

  let currentSlide = 0;
  let interval;
  let dots;

  const initSlide = (activeClassSlide, activeClassDot) => {
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

    dots = document.querySelectorAll(".dot");
    // if (!currentSlide && sliders.length > 0) {
    //   currentSlide = 0;
    // }
  };

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const motionSlide = (callbackMotion) => {
    prevSlide(sliders, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");

    callbackMotion();

    nextlide(sliders, currentSlide, "portfolio-item-active");
    nextlide(dots, currentSlide, "dot-active");
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
  initSlide("portfolio-item-active", "dot-active");
  startSlide(timeInterval);
};
