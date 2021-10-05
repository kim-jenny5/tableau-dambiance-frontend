const base_url = `http://localhost:3000`;
const collectionApiCall = new CollectionApi(base_url);
const userApiCall = new UserApi(base_url);
const pictureApiCall = new PictureApi(base_url);

const collectionsDisplay = document.querySelector(".collections-display");

const pictureBoardCont = document.querySelector(".picture-board .container");
// const pictureBoard = document.querySelector(".picture-board .row");
// const pictureBoardCol = document.querySelectorAll(".picture-board-col");
const pictureBoard = document.querySelector(".picture-board-col");

const title = document.querySelector(".file-name");
const hamburger = document.querySelector(".hamburger");
const collectionsMenu = document.querySelector(".collections-side-menu");

const addBtn = document.querySelector(".add-btn-container");

const collectionName = document.querySelector(".new-name");

// different pages
const startingPg = document.querySelector(".starting-page");
const newUserPg = document.querySelector(".new-user-page");
const returningUserPg = document.querySelector(".returning-user-page");
const mainPg = document.querySelector(".main-page");

const logo = document.querySelectorAll(".logo");

//new user form
const newUserForm = document.querySelector(".new-user-form");
const newUsername = document.getElementById("new-user-username");

//returning user form
const returningUserForm = document.querySelector(".returning-user-form");
const returningUsername = document.getElementById("returning-user-username");

collectionApiCall.getCollectionsApi();
userApiCall.getUsersApi();
pictureApiCall.getAllPicturesApi();

for (const word of logo) {
  word.addEventListener("click", function () {
    startingPg.style.display = "block";
    mainPg.style.display = "none";
    newUserPg.style.display = "none";
    returningUserPg.style.display = "none";
    returningUsername.value = "";
    pictureBoard.innerHTML = "";
    title.innerText = "untitled";
    // userApiCall.getUsersApi();
  });
}

const qMark = document.querySelector(".open-about-btn");
qMark.addEventListener("click", function () {
  if (aboutMenu.style.display === "none") {
    aboutMenu.style.display = "block";
    qMark.style.display = "none";
    xBtn.style.display = "block";
  } else {
    aboutMenu.style.display = "none";
  }
});

const xBtn = document.querySelector(".close-about-btn");
xBtn.addEventListener("click", function () {
  if (xBtn.style.display === "block") {
    xBtn.style.display = "none";
    qMark.style.display = "block";
    aboutMenu.style.display = "none";
  } else {
    aboutMenu.style.display = "block";
  }
});

const about = document.querySelector(".about-app");
about.addEventListener("click", function () {
  if (aboutGrp.style.display === "none") {
    aboutGrp.style.display = "block";
  } else {
    aboutGrp.style.display = "none";
  }
});

const aboutDev = document.querySelector(".about-dev");
aboutDev.addEventListener("click", function () {
  for (const element of aboutDevGrp) {
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
});

newUser.addEventListener("click", function () {
  startingPg.style.display = "none";
  newUserPg.style.display = "block";

  newUserForm.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    // const usernameInput =
    //   e.target.getElementById("new-user-username").value;
    // if (User.all.find((u) => u.username === usernameInput)) {
    //   alert("This username has already been taken.");
    // } else {
    //   userApiCall.createUsers();
    // }
    userApiCall.createUsers();
  });
});
