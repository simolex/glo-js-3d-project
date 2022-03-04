/**
 * https://learn.javascript.ru/js-animation#bolee-interesnaya-funktsiya-draw
 */

const animateQuad = (timeFraction) => {
  return Math.pow(timeFraction, 2);
};

const animateCirc = (timeFraction) => {
  return 1 - Math.sin(Math.acos(timeFraction));
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

const quadEaseInOut = makeEaseInOut(animateQuad);
const circEaseInOut = makeEaseInOut(animateCirc);

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

export { animate, quadEaseInOut, circEaseInOut };

// animate({
//   duration: 400,
//   timing: circEaseInOut,
//   draw(progress) {
//     modalBlock.style.top = `${
//       percentStartPosition + Math.round((percentStopPosition - percentStartPosition) * progress)
//     }%`;
//   },
// });