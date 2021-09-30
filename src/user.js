// getting elements from DOM
const qMark = document.querySelector(".open-about-btn");
const xBtn = document.querySelector(".close-about-btn");
const about = document.querySelector(".about-app");
const aboutGrp = document.querySelector(".about-app-txt-grp");
const aboutDev = document.querySelector(".about-dev");
const aboutDevGrp = document.querySelectorAll(".about-dev-txt-grp");
const aboutMenu = document.querySelector(".about-side-menu");
const newUser = document.querySelector(".new-user");
const returningUser = document.querySelector(".returning-user");

// different pages
const startingPg = document.querySelector(".starting-page");
const newUserPg = document.querySelector(".new-user-page");
const returningUserPg = document.querySelector(".returning-user-page");

// new user form
const newUserForm = document.querySelector(".new-user-form");
const newUsername = document.getElementById("new-user-username");
const returningUserForm = document.querySelector(".returning-user-form");
const returningUsername = document.getElementById("returning-user-username");

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
});

returningUser.addEventListener("click", function () {
  startingPg.style.display = "none";
  returningUserPg.style.display = "block";
});

// ------------------------------

class User {
  constructor({ id, username, collections }) {
    this.id = id;
    this.username = username;
    this.collections = collections;
  }

  findUser() {
    if (returningUsername.value === this.username) {
      const user = this;
      const username = document.querySelector(".username-display");
      username.innerText = user.username;

      Collection.setUpUsersPage(user);
      this.listCollections(user.collections);
    }
  }

  listCollections(collections) {
    collections.find(function (c) {
      c.created_at;
      debugger;
    });

    // const allCollections = collections;

    // debugger;
    const filename = document.querySelector(".file-name");
    filename.innerText = this.name;
    console.log(filename);
  }
}

newUserForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  userApiCall.createUsers();
}

returningUserForm.addEventListener("submit", returningUserSubmit);

function returningUserSubmit(e) {
  e.preventDefault();
  returningUserPg.style.display = "none";
  const mainPg = document.querySelector(".main-page");
  mainPg.style.display = "block";

  userApiCall.getUsers();
}
