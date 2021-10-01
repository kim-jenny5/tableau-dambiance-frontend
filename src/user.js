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

// ------------------------------

class User {
  static all = [];

  constructor({ id, username, collections }) {
    this.id = id;
    this.username = username;
    this.collections = collections;
    User.all.push(this);
  }

  findUser() {
    newUser.addEventListener("click", function () {
      startingPg.style.display = "none";
      newUserPg.style.display = "block";

      // newUserForm.addEventListener("submit", handleSubmit);

      // function handleSubmit(e) {
      //   debugger;
      //   e.preventDefault();
      //   // userApiCall.createUsers();
      // }

      newUserForm.addEventListener("submit", (e) => {
        debugger;
        e.preventDefault();
        // userApiCall.createUsers();
      });
    });

    returningUser.addEventListener("click", function () {
      startingPg.style.display = "none";
      returningUserPg.style.display = "block";

      // returningUserForm.addEventListener("submit", returningUserSubmit);
      returningUserForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById(
          "returning-user-username"
        ).value;

        const foundUser = User.all.find((u) => u.username === username);

        if (foundUser) {
          foundUser.setUpUsersPage();
        } else {
          alert("Sorry! Username not found.");
        }
      });
    });
  }

  setUpUsersPage() {
    const username = document.querySelector(".username-display");
    username.innerText = this.username;

    returningUserPg.style.display = "none";
    const mainPg = document.querySelector(".main-page");
    mainPg.style.display = "block";

    hamburger.addEventListener("click", () => {
      collectionsMenu.style.display = "block";
      if (xCollectionsBtn.style.display === "none") {
        hamburger.style.display = "none";
        xCollectionsBtn.style.display = "block";
        this.gettingCollections();
      }
    });
  }

  gettingCollections() {
    const usersCollection = Collection.all.filter((collection) => {
      return collection.user.id === this.id;
    });

    for (const collection of usersCollection) {
      collection.appendCollections();
    }

    xCollectionsBtn.addEventListener("click", function () {
      collectionsDisplay.innerHTML = "";
      hamburger.style.display = "block";
      xCollectionsBtn.style.display = "none";
      collectionsMenu.style.display = "none";
    });
  }
}
