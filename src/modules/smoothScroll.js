const smoothScroll = (targetEvent) => {
  const ID =
    targetEvent.tagName.toLowerCase() == "a"
      ? targetEvent.getAttribute("href").substr(1)
      : targetEvent.closest("a").getAttribute("href").substr(1);

  document.getElementById(ID).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default smoothScroll;
