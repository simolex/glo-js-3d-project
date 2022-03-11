import { animate, circEaseInOut, enableBodyScroll, disableBodyScroll } from "./helpers";

const modal = () => {
  const modalOverlay = document.querySelector(".popup");
  const modalBlock = modalOverlay.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");

  const percentStartPosition = -50;
  const percentStopPosition = 10;
  window.closeModalForm = () => {};

  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      disableBodyScroll(true);
      modalOverlay.style.display = "block";
      window.closeModalForm = () => {
        modalOverlay.style.display = "";
        enableBodyScroll();
      };
      if (window.outerWidth > 768) {
        animate({
          duration: 400,
          timing: circEaseInOut,
          draw(progress) {
            modalBlock.style.top = `${
              percentStartPosition +
              Math.round((percentStopPosition - percentStartPosition) * progress)
            }%`;
          },
        });
      }
    })
  );
  modalOverlay.addEventListener("click", (e) => {
    if (!e.target.closest(".popup-content") || e.target.classList.contains("popup-close")) {
      modalOverlay.style.display = "";
      enableBodyScroll();
      window.closeModalForm = () => {};
    }
  });
};
export default modal;
