const modal = () => {
  const modalBlock = document.querySelector(".popup");
  const modalContent = modalBlock.querySelector(".popup-content");
  const popupClose = modalBlock.querySelector(".popup-close");
  const buttons = document.querySelectorAll(".popup-btn");

  const modalAnimation = function () {
    let time;
    let offset = -50;

    const step = function () {
      const now = new Date().getTime();
      const dt = now - (time || now);

      time = now;

      offset += 0.5 * dt;
      if (offset < 10) {
        requestAnimationFrame(step);
        modalContent.style.top = `${offset}%`;
      } else {
        modalContent.style.top = "";
      }
    };
    step();
  };

  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      modalBlock.style.display = "block";
      console.dir(window);
      if (window.outerWidth > 768) {
        modalAnimation();
      }
    })
  );

  popupClose.addEventListener("click", () => {
    modalBlock.style.display = "";
  });

  console.log(modalBlock);
};
export default modal;
