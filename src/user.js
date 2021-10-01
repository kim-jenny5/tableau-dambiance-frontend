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
  constructor({ id, username, collections }) {
    this.id = id;
    this.username = username;
    this.collections = collections;
  }

  findUser() {
    if (returningUsername.value === this.username) {
      // const user = this;
      const username = document.querySelector(".username-display");
      // username.innerText = user.username;
      username.innerText = this.username;

      // Collection.setUpUsersPage(user);

      this.setUpUsersPage();
    }
  }

  setUpUsersPage() {
    hamburger.addEventListener("click", () => {
      collectionsMenu.style.display = "block";
      if (xCollectionsBtn.style.display === "none") {
        hamburger.style.display = "none";
        xCollectionsBtn.style.display = "block";
      }
      this.gettingCollections();
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
    const usersCollection = Collection.all.filter((collection) => {
      return collection.user.id === this.id;
    });
    debugger;
    // console.log(usersCollection);
    // const collectionsDisplay = document.querySelector(".collections-display");

    // usersCollection.appendCollections();

    for (const collection of usersCollection) {
      collection.appendCollections();
      // debugger;
      // const collectionEl = document.createElement("div");
      // collectionEl.className = "each-collection";
      // collectionEl.innerText = collection.name;
      // collectionsDisplay.append(collectionEl);
      // debugger;
    }

    xCollectionsBtn.addEventListener("click", function () {
      collectionsDisplay.innerHTML = "";
      hamburger.style.display = "block";
      xCollectionsBtn.style.display = "none";
      collectionsMenu.style.display = "none";
    });

    // debugger;
    const collectionsList = document.querySelectorAll(".each-collection");

    for (const collectionEl of collectionsList) {
      collectionEl.addEventListener("click", this.clickOnCollection);
    }
    // collectionsList.addEventListener("")
  }

  clickOnCollection(e) {
    // e.target.innerText;
    const foundCollection = Collection.all.find(
      (c) => c.name === e.target.innerText
    );
    foundCollection.accessCollection();
    // console.log(foundCollection);

    // debugger;
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
