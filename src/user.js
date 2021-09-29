// getting elements from DOM
const qMark = document.querySelector(".about-btn");
const about = document.querySelector(".about-app");
const aboutGrp = document.querySelector(".about-app-txt-grp");
const aboutDev = document.querySelector(".about-dev");
const aboutDevGrp = document.querySelector(".about-dev-txt-grp");

// ------------------

qMark.addEventListener("click", function () {
  debugger;
});

about.addEventListener("click", function () {
  if (aboutGrp.style.display === "none") {
    aboutGrp.style.display = "block";
  } else {
    aboutGrp.style.display = "none";
  }
  //   debugger;
});

aboutDev.addEventListener("click", function () {
  if (aboutDevGrp.style.display === "none") {
    aboutDevGrp.style.display = "block";
  } else {
    aboutDevGrp.style.display = "none";
  }

  //   debugger;
});
