document.addEventListener("DOMContentLoaded", function () {
  
  //carousel
  let currentIndex = 0;
  const slides = document.querySelectorAll(".feedbacks__item");
  const totalSlides = slides.length;
  const slidesToMove = 3; 
  const slideWidth = slides[0].offsetWidth + 30; 
  const feedbacksContainer = document.querySelector(".feedbacks");

  function moveSlide(direction) {
    currentIndex += direction * slidesToMove;

    if (currentIndex >= totalSlides - slidesToMove) {
      currentIndex = totalSlides - slidesToMove;
    } else if (currentIndex < 0) {
      currentIndex = 0; 
    }

    feedbacksContainer.style.transition = "transform 0.5s ease";

    feedbacksContainer.style.transform = `translateX(-${
      currentIndex * slideWidth
    }px)`; 
  }

  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  prevButton.addEventListener("click", function () {
    moveSlide(-1); 
  });

  nextButton.addEventListener("click", function () {
    moveSlide(1); 
  });

  //swiper

  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewhell: true,
    keyboard: true,
  });

});


