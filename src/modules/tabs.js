export const tabs = () => {
  const tabPanel = document.querySelector(".service-header");
  const tabHeaders = document.querySelectorAll(".service-header-tab");
  const tabContent = document.querySelectorAll(".service-tab");

  tabPanel.addEventListener("click", (e) => {
    const clickedTab = e.target.closest(".service-header-tab");
    if (clickedTab) {
      tabHeaders.forEach((tab, index) => {
        if (tab === clickedTab) {
          tab.classList.add("active");
          tabContent[index].classList.remove("d-none");
        } else {
          tab.classList.remove("active");
          tabContent[index].classList.add("d-none");
        }
      });
    }
  });
};
