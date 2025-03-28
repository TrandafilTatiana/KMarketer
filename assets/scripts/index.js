document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementsByClassName("contact__form")[0];
  const nameInput = document.getElementById("fullname");
  const resultName = document.getElementById("name_result");
  const emailInput = document.getElementById("email");
  const resultEmail = document.getElementById("email_result");
  const dateSelect = document.getElementById("date");
  const resultDate = document.getElementById("date_result");
  const timeSelect = document.getElementById("time");
  const resultTime = document.getElementById("time_result");
  const messageTextarea = document.getElementById("message");
  const resultMessage = document.getElementById("message_result");
  const submitBtn = document.getElementsByClassName("contact__button")[0];

  submitBtn.addEventListener("click", handleSubmit);
  form.addEventListener("submit", handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const date = dateSelect.value;
    const time = timeSelect.value;
    const message = messageTextarea.value;

    if (name.length < 2) {
      resultName.textContent = `The 'Name' field cannot be empty and must contain at least 2 characters`;
      resultName.style.color = "darkred";
    } else {
      resultName.textContent = `${name} name added`;
      resultName.style.color = "darkgreen";
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      resultEmail.textContent = `Please enter a valid email address`;
      resultEmail.style.color = "darkred";
    } else {
      resultEmail.textContent = `${email} email added`;
      resultEmail.style.color = "darkgreen";
    }

    if (date === "") {
      resultDate.textContent = `Please select a date`;
      resultDate.style.color = "darkred";
    } else {
      resultDate.textContent = `${date} selected`;
      resultDate.style.color = "darkgreen";
    }

    if (time === "") {
      resultTime.textContent = `Please select a time`;
      resultTime.style.color = "darkred";
    } else {
      resultTime.textContent = `${time} selected`;
      resultTime.style.color = "darkgreen";
    }

    if ((message.match(/\w+/g) || []).length < 3) {
      resultMessage.textContent = `The 'Message' field must contain at least 3 words`;
      resultMessage.style.color = "darkred";
    } else {
      resultMessage.textContent = `${message} message added`;
      resultMessage.style.color = "darkgreen";
    }
  }

  //click hamburger on mobile
  const hamburgerBtn = document.getElementById("hamburger");
  hamburgerBtn.addEventListener("click", handleHamburgerClick);

  function handleHamburgerClick() {
    const nav = document.getElementById("nav");
    const menuIcon = document.querySelector(".btn--menu");
    const closeIcon = document.querySelector(".btn--close");
    //nav.style.display = "block";
    nav.classList.toggle("header__nav--open");

    if (menuIcon.style.display === "none") {
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
    } else {
      menuIcon.style.display = "none";
      closeIcon.style.display = "block";
    }
  }
});
