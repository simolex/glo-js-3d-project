import smoothScroll from "./smoothScroll";

const serviceBlock = () => {
  const serviceButton = document.querySelector(`a[href="#service-block"]`);
  serviceButton.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(e.target);
  });
};

export default serviceBlock;
