function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
//
// Sticky nav
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");
// const ham = document.querySelector("openbtn");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    navbar.classList.add("sticky-color");
    document.querySelector(".openbtn").style.color = "white";
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("sticky-color");
    document.querySelector(".openbtn").style.color = "black";
  }
}
