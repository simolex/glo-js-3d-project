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

    if (callback !== undefined) {
      callback();
    }
  } else {
    window.addEventListener("load", enableBodyScroll);
  }
};

const disableBodyScroll = (savePosition = false) => {
  if (document.readyState === "complete") {
    document.body.setAttribute("data-scroll-disabled", "true");

    if (document.body.scrollHeight > window.innerHeight) {
      if (savePosition) {
        document.body.style.marginTop = `-${window.pageYOffset}px`;
      }
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
  if (!state) {
    return "false";
  }
  return state;
};

const phoneMask = (e) => {
  let keyCode;
  if (e.keyCode) {
    keyCode = e.keyCode;
  }
  let pos = this.selectionStart;
  if (pos < 3) e.preventDefault();
  let matrix = "+_(___)___-__-__",
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, ""),
    newValue = matrix.replace(/[_\d]/g, function (a) {
      return i < val.length ? val[i++] || def[i] : a;
    });
  i = newValue.indexOf("_");
  if (i != -1) {
    if (i < 5) {
      i = 3;
    }
    newValue = newValue.slice(0, i);
  }
  var reg = matrix
    .substring(0, this.value.length)
    .replace(/_+/g, function (a) {
      return "\\d{1," + a.length + "}";
    })
    .replace(/[+()]/g, "\\$&");
  reg = new RegExp(`^${reg}$`);
  if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58)) this.value = new_value;
  if (e.type == "blur" && this.value.length < 5) this.value = "";
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
