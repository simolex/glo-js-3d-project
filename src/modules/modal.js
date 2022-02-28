const modal = () => {
  const modalOverlay = document.querySelector(".popup");
  const modalBlock = modalOverlay.querySelector(".popup-content");
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
        modalBlock.style.top = `${offset}%`;
      } else {
        modalBlock.style.top = "";
      }
    };
    step();
  };

  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      modalOverlay.style.display = "block";
      if (window.outerWidth > 768) {
        modalAnimation();
      }
    })
  );

  modalOverlay.addEventListener("click", (e) => {
    if (!e.target.closest(".popup-content") || e.target.classList.contains("popup-close")) {
      modalOverlay.style.display = "";
    }
  });
};
export default modal;
