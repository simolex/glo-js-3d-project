import smoothScroll from "./smoothScroll";
export const menu = () => {
  // const menuButton = document.querySelector(".menu");
  const menuContent = document.querySelector("menu");

  const toggleMenu = (e) => {
    if (e.target.matches("menu ul>li>a")) {
      e.preventDefault();
      smoothScroll(e.target);
    } else if (e.target.classList.contains("close-btn")) {
      e.preventDefault();
    } else if (e.target.closest(".menu")) {
    } else {
      return;
    }
    menuContent.classList.toggle("active-menu");
  };

  document.addEventListener("click", (e) => toggleMenu(e));
  // menuButton.addEventListener("click", (e) => toggleMenu(e));
  // menuContent.addEventListener("click", (e) => toggleMenu(e));
};
