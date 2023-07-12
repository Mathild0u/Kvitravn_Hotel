const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const container = document.querySelector(".container");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
  }
}

container.addEventListener("click", toggleMenu);

menuItems.forEach(
  function(menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  }
)

function myFunction() {
    container.classList.toggle("change");
  }