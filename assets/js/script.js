'use strict';



/**
 * navbar toggle
 */

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





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

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

/**
 * Rewards Carousel Functionality
 */
function initRewardsCarousel() {
  const items = document.querySelectorAll('.reward-item');
  let currentIndex = 0;

  // Initially show all items
  items.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add('active');
    }
  });

  function showNextItems() {
    // Hide all items
    items.forEach(item => {
      item.classList.remove('active');
    });

    // Show next set of items with slight delay between each
    setTimeout(() => {
      items[currentIndex].classList.add('active');
    }, 100);

    setTimeout(() => {
      let nextIndex = (currentIndex + 1) % items.length;
      items[nextIndex].classList.add('active');
    }, 200);

    setTimeout(() => {
      let nextIndex = (currentIndex + 2) % items.length;
      items[nextIndex].classList.add('active');
    }, 300);

    // Update current index
    currentIndex = (currentIndex + 1) % items.length;
  }

  // Auto slide every 5 seconds
  setInterval(showNextItems, 5000);
}

/**
 * Showcase Slider Functionality
 */
function initShowcaseSlider() {
  const track = document.querySelector('.showcase-track');
  const slides = document.querySelectorAll('.showcase-slide');
  const nextBtn = document.querySelector('.nav-btn.next');
  const prevBtn = document.querySelector('.nav-btn.prev');
  let currentIndex = 0;

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  });

  prevBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  });

  // Auto-slide every 3 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }, 3000);
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initRewardsCarousel();
  initShowcaseSlider();
});