const base_url = `http://localhost:3000`;
const collectionApiCall = new CollectionApi(base_url);
const userApiCall = new UserApi(base_url);
const pictureApiCall = new PictureApi(base_url);

// different pages
const startingPg = document.querySelector(".starting-page");
const newUserPg = document.querySelector(".new-user-page");
const returningUserPg = document.querySelector(".returning-user-page");
const mainPg = document.querySelector(".main-page");

//about side menu
const about = document.querySelector(".about-app");
const aboutDev = document.querySelector(".about-dev");
const aboutMenu = document.querySelector(".about-side-menu");
const aboutGrp = document.querySelector(".about-app-txt-grp");
const aboutDevGrp = document.querySelectorAll(".about-dev-txt-grp");

//new user form
const newUser = document.querySelector(".new-user");
const newUserForm = document.querySelector(".new-user-form");
const newUsername = document.getElementById("new-user-username");

//returning user form
const returningUser = document.querySelector(".returning-user");
const returningUserForm = document.querySelector(".returning-user-form");
const returningUsername = document.getElementById("returning-user-username");

//back arrows
const backArrowNew = document.querySelector(".back-arrow-new");
const backArrowReturning = document.querySelector(".back-arrow-returning");

//collections side menu
const hamburger = document.querySelector(".hamburger");
const collectionsMenu = document.querySelector(".collections-side-menu");
const collectionsDisplay = document.querySelector(".collections-display");
const collectionName = document.querySelector(".new-name");

//collections
const title = document.querySelector(".file-name");
const pictureBoardCont = document.querySelector(".picture-board .container");
const pictureBoard = document.querySelector(".picture-board-col");
const addBtn = document.querySelector(".add-btn-container");
const deleteForm = document.createElement("form");
const deleteBtn = document.createElement("button");

// collectionApiCall.getCollectionsApi();
// userApiCall.getUsersApi();
// pictureApiCall.getPicturesApi();

const qMark = document.querySelector(".open-about-btn");
qMark.addEventListener("click", function () {
  aboutMenu.style.display = "block";
  qMark.style.display = "none";
  xBtn.style.display = "block";

  aboutGrp.style.display = "none";
  for (const element of aboutDevGrp) {
    element.style.display = "none";
  }
});

const xBtn = document.querySelector(".close-about-btn");
xBtn.addEventListener("click", function () {
  xBtn.style.display = "none";
  qMark.style.display = "block";
  aboutMenu.style.display = "none";
});

function closingAbout() {
  if (aboutGrp.style.display === "none") {
    aboutGrp.style.display = "block";
  } else {
    aboutGrp.style.display = "none";
  }
}

function closingDev() {
  for (const element of aboutDevGrp) {
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
}

about.addEventListener("click", closingAbout);
aboutDev.addEventListener("click", closingDev);

function reset() {
  startingPg.style.display = "none";

  aboutMenu.style.display = "none";
  xBtn.style.display = "none";
  qMark.style.display = "block";
}

newUser.addEventListener("click", function () {
  newUserPg.style.display = "block";

  reset();

  closingAbout();
  closingDev();

  newUserForm.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    const usernameInput = e.target.querySelector("#new-user-username").value;
    if (User.all.find((u) => u.username === usernameInput)) {
      alert("This username has already been taken.");
    } else {
      userApiCall.createUsers();
    }
  });

  backArrowNew.addEventListener("click", () => {
    startingPg.style.display = "block";
    newUserPg.style.display = "none";
  });
});

returningUser.addEventListener("click", function () {
  returningUserPg.style.display = "block";

  reset();

  closingAbout();
  closingDev();

  returningUserForm.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    const usernameInput = e.target.querySelector(
      "#returning-user-username"
    ).value;
    // e.stopImmediatePropagation();
    userApiCall.getUsersApi(usernameInput);
  });

  backArrowReturning.addEventListener("click", () => {
    startingPg.style.display = "block";
    returningUserPg.style.display = "none";
  });
});
