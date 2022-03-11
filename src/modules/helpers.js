/**
 * https://learn.javascript.ru/js-animation#bolee-interesnaya-funktsiya-draw
 */

const animateQuad = (timeFraction) => {
  return Math.pow(timeFraction, 2);
};

const animateCirc = (timeFraction) => {
  return 1 - Math.sin(Math.acos(timeFraction));
};

const animateElastic = (timeFraction, x = 5) => {
  return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(((20 * Math.PI * x) / 3) * timeFraction);
};

const makeEaseInOut = (timing) => {
  return function (timeFraction) {
    if (timeFraction < 0.5) {
      return timing(2 * timeFraction) / 2;
    } else {
      return (2 - timing(2 * (1 - timeFraction))) / 2;
    }
  };
};

const makeEaseOut = (timing) => {
  return function (timeFraction) {
    return 1 - timing(1 - timeFraction);
  };
};

const quadEaseInOut = makeEaseInOut(animateQuad);
const circEaseInOut = makeEaseInOut(animateCirc);
const elasticEaseOut = makeEaseOut(animateElastic);

const animate = ({ timing, draw, duration }) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) {
      timeFraction = 1;
    }

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

const enableBodyScroll = (callback) => {
  if (document.readyState === "complete") {
    document.body.style.position = "";
    document.body.style.overflowY = "";
    document.body.style.width = "";
    document.body.setAttribute("data-scroll-disabled", "false");

    if (document.body.style.marginTop) {
      const scrollTop = -parseInt(document.body.style.marginTop, 10);
      document.body.style.marginTop = "";
      window.scrollTo(window.scrollX, scrollTop);
    }

    if (callback !== undefined) callback();
  } else {
    window.addEventListener("load", enableBodyScroll);
  }
};

const disableBodyScroll = (savePosition = false) => {
  if (document.readyState === "complete") {
    document.body.setAttribute("data-scroll-disabled", "true");

    if (document.body.scrollHeight > window.innerHeight) {
      if (savePosition) document.body.style.marginTop = `-${window.pageYOffset}px`;
      document.body.style.position = "fixed";
      document.body.style.overflowY = "scroll";
      document.body.style.width = "100%";
    }
  } else {
    window.addEventListener("load", () => disableBodyScroll(savePosition));
  }
};

const isDisabledBodyScroll = () => {
  const state = document.body.getAttribute("data-scroll-disabled");
  if (!state) return "false";
  return state;
};

export {
  animate,
  quadEaseInOut,
  circEaseInOut,
  elasticEaseOut,
  makeEaseOut,
  enableBodyScroll,
  disableBodyScroll,
  isDisabledBodyScroll,
};

// animate({
//   duration: 400,
//   timing: circEaseInOut,
//   draw(progress) {
//     modalBlock.style.top = `${
//       percentStartPosition + Math.round((percentStopPosition - percentStartPosition) * progress)
//     }%`;
//   },
// });
