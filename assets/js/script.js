'use strict';



/**
 * navbar toggle
 */
<script src="https://kit.fontawesome.com/3980f875bb.js" crossorigin="anonymous"></script>

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});








// DINAGDAG 

// const scrollContainer = document.querySelector(".rewards-container");
// const scrollLeftBtn = document.querySelector(".scroll-left");
// const scrollRightBtn = document.querySelector(".scroll-right");

// Scroll left
// scrollLeftBtn.addEventListener("click", function () {
//   scrollContainer.scrollBy({
//     left: -200, // Adjust the scroll amount (negative for left)
//    behavior: "smooth"
//   });
// });

// Scroll right
// scrollRightBtn.addEventListener("click", function () {
//  scrollContainer.scrollBy({
//    left: 200,  //Adjust the scroll amount (positive for right)
//    behavior: "smooth"
//  });
// }); 
