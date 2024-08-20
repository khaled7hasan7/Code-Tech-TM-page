let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".img-home");
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  document.querySelector(
    ".slides-home"
  ).style.transform = `translateX(${offset}%)`;
}

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});

// Select the toggle input and the body element
const toggle = document.getElementById("toggle");
const body = document.body;

// Check if there's a saved theme in localStorage
const savedTheme = localStorage.getItem("theme");

// Apply the saved theme if it exists, default to light mode otherwise
if (savedTheme) {
  body.classList.add(savedTheme);
  toggle.checked = savedTheme === "dark-mode";
} else {
  body.classList.add("light-mode"); // Default to light mode
}

// Add an event listener to the toggle button
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    localStorage.setItem("theme", "dark-mode");
  } else {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light-mode");
  }
});

const par = document.getElementById("par");

function changemode() {
  body.style.backgroundColor = "black";
}

document.querySelector("#Contact").addEventListener;
