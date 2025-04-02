//import Swiper from "swiper";
//import "swiper/swiper-bundle.min.css";

document.addEventListener("DOMContentLoaded", function () {
  //carousel

  let currentIndex = 0;
  const slides = document.querySelectorAll(".feedbacks__item");
  const feedbacksContainer = document.querySelector(".feedbacks");
  const gap = 30;

  function getSlideWidth() {
    const containerWidth = feedbacksContainer.offsetWidth;
    let slideWidth;

    if (window.innerWidth <= 768) {
      slideWidth = containerWidth;
    } else if (window.innerWidth <= 1024) {
      slideWidth = (containerWidth - gap) / 2;
    } else {
      slideWidth = (containerWidth - gap * 2) / 3;
    }

    return slideWidth;
  }

  function updateSlides() {
    const slideWidth = getSlideWidth();
    slides.forEach((slide) => {
      slide.style.width = `${slideWidth}px`;
    });

    feedbacksContainer.style.gap = `${gap}px`;
  }

  function getSlidesToMove() {
    if (window.innerWidth <= 768) {
      return 1;
    } else if (window.innerWidth <= 1024) {
      return 2;
    } else {
      return 3;
    }
  }

  window.addEventListener("resize", () => {
    slidesToMove = getSlidesToMove();
    updateSlides();
  });

  let slidesToMove = getSlidesToMove();

  function moveSlide(direction) {
    const slideWidth = getSlideWidth();
    const totalSlideWidth = slideWidth + gap;

    currentIndex = Math.min(
      Math.max(currentIndex + direction * slidesToMove, 0),
      slides.length - slidesToMove
    );

    feedbacksContainer.style.transition = "transform 0.5s ease";
    feedbacksContainer.style.transform = `translateX(-${
      currentIndex * totalSlideWidth
    }px)`;
  }

  document
    .querySelector(".prev")
    .addEventListener("click", () => moveSlide(-1));
  document.querySelector(".next").addEventListener("click", () => moveSlide(1));

  updateSlides();

  //swiper

  console.log("Swiper initialization started.");

  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });

  console.log("Swiper initialized.");
  //var swiperWrapper = document.querySelector(".swiper-wrapper");
  //swiperWrapper.style.gap = "0";
});
