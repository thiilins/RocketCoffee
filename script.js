let mainMenu = document.querySelector(".main-menu");
let menuButton = document.getElementById("mobile-menu-icon");

function openCloseMenu() {
  mainMenu.classList.toggle("close");
  changeIcon();
}
function changeIcon() {
  menuButton.classList.toggle("close");
}
menuButton.addEventListener("click", openCloseMenu);
