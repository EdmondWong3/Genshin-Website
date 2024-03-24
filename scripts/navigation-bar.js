/*
  A function to make the navigation bar always stick to the top. It gets the offset value of the navigation bar 
  and add/remove the sticky class to the navigation bar based on the current position of the navigation bar. 
*/
window.onscroll = function () {
  stickToTop();
};

var navigationBar = document.getElementById("navigation-bar");
var sticky = navigationBar.offsetTop;

function stickToTop() {
  if (window.scrollY >= sticky) {
    navigationBar.classList.add("sticky");
  } else {
    navigationBar.classList.remove("sticky");
  }
}

/*
  Functions to open and close the side navigation bar for smaller screen sizes. Overlay also activates 
  whenever the side navigation bar is out. 
*/
const overlay = document.getElementById("overlay");
const sideNavBar = document.getElementById("side-navigation-bar");
const hamburgerMenuButton = document.getElementById("hamburger-menu-icon");
const currentNavigationItem = document.getElementById("side-navigation-current-item");

/*
  Open side navigation bar function.
*/

hamburgerMenuButton.addEventListener("click", function (event) {
  openSideNav();
});

function openSideNav() {
  sideNavBar.style.width = "250px";
  overlay.style.display = "flex";
}

/*
  Close side navigation bar function.
*/
document.body.addEventListener("click", function(event) {
  if (event.target !== sideNavBar && 
      event.target !== hamburgerMenuButton &&
      event.target !== currentNavigationItem &&
      !event.target.classList.contains("navigation-item-container") &&
      !event.target.classList.contains("side-navigation-item") &&
      !event.target.classList.contains("side-navigation-item-image") 
      ) {
    closeSideNav();
  }
});

function closeSideNav() {
  sideNavBar.style.width = "0px";
  overlay.style.display = "none";
}
