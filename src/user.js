// getting elements from DOM
const qMark = document.querySelector(".open-about-btn");
const xBtn = document.querySelector(".close-about-btn");
const about = document.querySelector(".about-app");
const aboutGrp = document.querySelector(".about-app-txt-grp");
const aboutDev = document.querySelector(".about-dev");
const aboutDevGrp = document.querySelector(".about-dev-txt-grp");
const aboutMenu = document.querySelector(".about-side-menu");

// ------------------

qMark.addEventListener("click", function () {
  if (aboutMenu.style.display === "none") {
    aboutMenu.style.display = "block";
    qMark.style.display = "none";
    xBtn.style.display = "block";
  } else {
    aboutMenu.style.display = "none";
  }
});

xBtn.addEventListener("click", function () {
  if (xBtn.style.display === "block") {
    xBtn.style.display = "none";
    qMark.style.display = "block";
    aboutMenu.style.display = "none";
  } else {
    aboutMenu.style.display = "block";
  }
});

about.addEventListener("click", function () {
  if (aboutGrp.style.display === "none") {
    aboutGrp.style.display = "block";
  } else {
    aboutGrp.style.display = "none";
  }
});

aboutDev.addEventListener("click", function () {
  if (aboutDevGrp.style.display === "none") {
    aboutDevGrp.style.display = "block";
  } else {
    aboutDevGrp.style.display = "none";
  }
});
