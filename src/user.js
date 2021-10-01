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
    // if (returningUsername.value === this.username) {
    //   const username = document.querySelector(".username-display");
    //   username.innerText = this.username;

    //   // Collection.setUpUsersPage(user);

    //   this.setUpUsersPage();
    // } //else {
    // //   alert("Please enter a username");
    // // }
    // debugger;
    // if (User.all.)

    newUser.addEventListener("click", function () {
      startingPg.style.display = "none";
      newUserPg.style.display = "block";
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

      // function returningUserSubmit(e) {
      //   // debugger;
      //   e.preventDefault();

      //   returningUserPg.style.display = "none";
      //   const mainPg = document.querySelector(".main-page");
      //   mainPg.style.display = "block";

      //   const username = document.getElementById(
      //     "returning-user-username"
      //   ).value;

      //   const foundUser = User.all.find((u) => u.username === username);
      //   // debugger;
      //   foundUser.setUpUsersPage();
      //   // userApiCall.getUsersApi();
      // }

      // debugger;
    });
  }

  setUpUsersPage() {
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

    // xCollectionsBtn.addEventListener("click", function () {
    //   collectionsDisplay.innerHTML = "";
    //   hamburger.style.display = "block";
    //   xCollectionsBtn.style.display = "none";
    //   collectionsMenu.style.display = "none";
    //   // if (xCollectionsBtn.style.display === "none") {
    //   //   xCollectionsBtn.style.display = "block";
    //   //   hamburger.style.display = "none";
    //   // } else {
    //   //   xCollectionsBtn.style.display = "none";
    //   //   hamburger.style.display = "block";
    //   //   collectionsMenu.style.display = "none";
    //   // }
    // });
  }

  gettingCollections() {
    // debugger;
    // console.log("HI");

    const usersCollection = Collection.all.filter((collection) => {
      return collection.user.id === this.id;
    });
    // debugger;
    // console.log(usersCollection);
    // const collectionsDisplay = document.querySelector(".collections-display");

    // usersCollection.appendCollections();
    // debugger;

    for (const collection of usersCollection) {
      // console.log(collection);
      collection.appendCollections();
    }

    xCollectionsBtn.addEventListener("click", function () {
      collectionsDisplay.innerHTML = "";
      hamburger.style.display = "block";
      xCollectionsBtn.style.display = "none";
      collectionsMenu.style.display = "none";
    });

    const collectionsList = document.querySelectorAll(".each-collection");

    for (const collectionEl of collectionsList) {
      collectionEl.addEventListener("click", this.clickOnCollection);
    }
  }

  clickOnCollection(e) {
    const foundCollection = Collection.all.find(
      (c) => c.name === e.target.innerText
    );
    foundCollection.accessCollection(e);
  }

  // gettingCollections(collections) {
  //   collections.find(function (c) {
  //     c.created_at;
  //     debugger;
  //   });

  //   // const allCollections = collections;

  //   // debugger;
  //   const filename = document.querySelector(".file-name");
  //   filename.innerText = this.name;
  //   console.log(filename);
  // }
}
