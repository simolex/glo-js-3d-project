import smoothScroll from "./smoothScroll";
const menu = () => {
  const menuButton = document.querySelector(".menu");
  const menuContent = document.querySelector("menu");
  const closeButton = menuContent.querySelector(".close-btn");
  const menuItems = menuContent.querySelectorAll("ul>li>a");

  const toggleMenu = () => {
    menuContent.classList.toggle("active-menu");
  };

  menuButton.addEventListener("click", toggleMenu);
  closeButton.addEventListener("click", toggleMenu);

  menuItems.forEach((item) =>
    item.addEventListener("click", (e) => {
      e.preventDefault();
      toggleMenu();
      smoothScroll(e.target);
    })
  );
};

export default menu;
