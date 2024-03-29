import { animate } from "./helpers";

const calculate = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const total = document.getElementById("total");

  const calculateResult = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = +calcSquare.value;
    let startAnimateValue, targetAnimateValue;
    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcDay.value && +calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (+calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcType.value && calcSquare.value) {
      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }

    startAnimateValue = +total.textContent;
    targetAnimateValue = totalValue;

    animate({
      duration: 400,
      timing: (timeFraction) => timeFraction,
      draw(progress) {
        total.textContent =
          startAnimateValue + Math.round((targetAnimateValue - startAnimateValue) * progress);
      },
    });
  };

  calcBlock.addEventListener("input", (e) => {
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcCount ||
      e.target === calcDay
    ) {
      if (e.target !== calcType) {
        e.target.value = e.target.value.replace(/\D+/gi, "");
      }
      calculateResult();
    }
  });
};
export default calculate;
