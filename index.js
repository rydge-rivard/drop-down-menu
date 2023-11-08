const dropMenu = (function () {
  const menuHead = document.querySelector("h3");
  const menu = document.querySelector(".menu");

  const menuHeadTwo = document.querySelector("h4");
  const menuTwo = document.querySelector(".menu-two");

  function toggleMenu(element) {
    element.style.display === "none"
      ? (element.style.display = "")
      : (element.style.display = "none");
  }

  menuHead.addEventListener("click", () => toggleMenu(menu));
  menuHeadTwo.addEventListener("click", () => toggleMenu(menuTwo));
})();
