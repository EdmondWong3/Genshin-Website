/*
* For the loading screen. Set a timeout before loading screen disappears to give time for the page content to fully load.
*/
document.addEventListener("DOMContentLoaded", function() {
  var loadingScreen = document.getElementById("loading-screen-container");
  var content = document.getElementById("content-container");

  function hideLoadingScreen() {
    loadingScreen.style.display = "none";
    content.style.display = "block";
  }

  setTimeout(hideLoadingScreen, 500);
})
