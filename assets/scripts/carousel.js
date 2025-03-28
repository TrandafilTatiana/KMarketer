document.addEventListener("DOMContentLoaded", function () {
  //carousel

  let currentIndex = 0;
  const slides = document.querySelectorAll(".feedbacks__item");
  const slideWidth = slides[0].offsetWidth + 30;
  const feedbacksContainer = document.querySelector(".feedbacks");
  let slidesToMove = window.innerWidth <= 768 ? 1 : 3;

  window.addEventListener("resize", () => {
    slidesToMove = window.innerWidth <= 768 ? 1 : 3;
  });

  function moveSlide(direction) {
    currentIndex = Math.min(
      Math.max(currentIndex + direction * slidesToMove, 0),
      slides.length - slidesToMove
    );
    feedbacksContainer.style.transition = "transform 0.5s ease";
    feedbacksContainer.style.transform = `translateX(-${
      currentIndex * slideWidth
    }px)`;
  }

  document
    .querySelector(".prev")
    .addEventListener("click", () => moveSlide(-1));
  document.querySelector(".next").addEventListener("click", () => moveSlide(1));

  //swiper

  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    breakpoints: {
      769: {
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

  var swiperWrapper = document.querySelector(".swiper-wrapper");
  swiperWrapper.style.gap = "0";
});
