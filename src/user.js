// getting elements from DOM
const aboutGrp = document.querySelector(".about-app-txt-grp");
const aboutDevGrp = document.querySelectorAll(".about-dev-txt-grp");
const aboutMenu = document.querySelector(".about-side-menu");
const newUser = document.querySelector(".new-user");
const returningUser = document.querySelector(".returning-user");

// new user form
const newUserForm = document.querySelector(".new-user-form");
const newUsername = document.getElementById("new-user-username");
const returningUserForm = document.querySelector(".returning-user-form");
const returningUsername = document.getElementById("returning-user-username");

const collectionForm = document.querySelector(".new-collection-form");

const newBtn = document.querySelector(".new-btn");

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
        e.preventDefault();
        e.stopImmediatePropagation();
        const usernameInput = e.target.querySelector(".user-username").value;
        if (User.all.find((u) => u.username === usernameInput)) {
          alert("This username has already been taken.");
        } else {
          userApiCall.createUsers();
        }
        // userApiCall.createUsers();
      });
    });

    returningUser.addEventListener("click", function () {
      returningUserForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // const username = returningUsername.value
        const foundUser = User.all.find(
          (u) => u.username === returningUsername.value
        );

        if (foundUser) {
          foundUser.setUpUsersPage();
        } else {
          alert("Sorry! Username not found.");
        }
      });
    });
  }

  setUpUsersPage() {
    // const self = this;
    startingPg.style.display = "none";
    newUserPg.style.display = "none";
    returningUserPg.style.display = "block";

    const username = document.querySelector(".username-display");
    username.innerText = this.username;

    returningUserPg.style.display = "none";
    mainPg.style.display = "block";

    title.addEventListener("click", () => {
      // debugger;
    });

    // mainPg

    hamburger.addEventListener("click", () => {
      collectionsMenu.style.display = "block";
      if (xCollectionsBtn.style.display === "none") {
        hamburger.style.display = "none";
        xCollectionsBtn.style.display = "block";
        this.gettingCollections();
      }
    });

    newBtn.addEventListener("click", () => {
      collectionForm.style.display = "block";
      collectionForm.addEventListener("submit", (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        collectionApiCall.createCollections(this);
        collectionForm.style.display = "none";
      });
    });

    const logout = document.querySelector(".logout");
    logout.addEventListener("click", () => {
      startingPg.style.display = "block";
      mainPg.style.display = "none";
      newUserPg.style.display = "none";
      hamburger.style.display = "block";
      collectionsMenu.style.display = "none";
      returningUsername.value = "";
      pictureBoard.innerHTML = "";
      title.innerText = "untitled";
      if (collectionForm.style.display === "block") {
        collectionForm.style.display = "none";
      }
    });

    const blank = document.querySelector(".blank");
    blank.addEventListener("click", () => {
      // debugger;
      collectionsMenu.style.display = "none";
      hamburger.style.display = "block";
      if (collectionForm.style.display === "block") {
        collectionForm.style.display = "none";
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
      if (collectionForm.style.display === "block") {
        collectionForm.style.display = "none";
      }
    });
  }

  // creatingCollection() {
  //   collectionForm.addEventListener("submit", (e) => {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     // console.log("hello");
  //     // debugger;
  //     collectionApiCall.createCollections(this);
  //   });
  //   // collectionForm.addEventListener("submit", (e) => {
  //   //   e.preventDefault();
  //   // collectionApiCall.createCollections(this);
  //   // });
  // }
}
