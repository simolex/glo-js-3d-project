const calculate = () => {
  const calcItems = document.querySelectorAll(".calc-item");

  calcItems.forEach((item) => {
    if (!item.classList.contains("calc-type")) {
      item.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D+/gi, "");
      });
    }
  });
};
export default calculate;
