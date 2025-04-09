
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

showSlide(0);

document.addEventListener("DOMContentLoaded", function () {
  const hamMenu = document.querySelector(".ham-menu");
  const offScreenMenu = document.querySelector(".off-screen-menu");
  
  hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
  });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".slider-container");
  
    function checkScroll() {
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (elementTop < windowHeight - 150) {
          element.classList.add("show");
        }
      });
    }
  
    window.addEventListener("scroll", checkScroll);
    checkScroll();
  });

  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });


  setTimeout(document.addEventListener('DOMContentLoaded', function() {
    const serviceDropdownMobile = document.querySelector('.off-screen-menu .dropdown-mobile > a');
    const dropdownContentMobile = document.querySelector('.off-screen-menu .dropdown-content-mobile');

    if (serviceDropdownMobile && dropdownContentMobile) {
        serviceDropdownMobile.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.off-screen-menu .dropdown-mobile').classList.toggle('open');
        });
    }
}), 1000);
