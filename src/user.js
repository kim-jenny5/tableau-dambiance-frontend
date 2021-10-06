const collectionForm = document.querySelector(".new-collection-form");

const newBtn = document.querySelector(".new-btn");

class User {
  static all = [];

  constructor({ id, username, collections }) {
    this.id = id;
    this.username = username;
    this.collections = collections;
    User.all.push(this);
  }

  // findUser() {
  //   const foundUser = User.all.find((u) => {
  //     return u.username === returningUsername.value;
  //   });

  //   if (foundUser) {
  //     foundUser.setUpUsersPage();
  //   } else {
  //     alert("Sorry! Username not found.");
  //   }
  // }

  setUpUsersPage() {
    this.gettingCollections();

    startingPg.style.display = "none";
    newUserPg.style.display = "none";
    returningUserPg.style.display = "none";
    mainPg.style.display = "block";

    const username = document.querySelector(".username-display");
    username.innerText = this.username;

    hamburger.addEventListener("click", () => {
      collectionsMenu.style.display = "block";
      if (xCollectionsBtn.style.display === "none") {
        hamburger.style.display = "none";
        xCollectionsBtn.style.display = "block";
        // this.gettingCollections();
      }
    });

    newBtn.addEventListener("click", () => {
      collectionForm.style.display = "block";
      collectionForm.addEventListener("submit", (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        collectionApiCall.createCollections(this);
        collectionForm.style.display = "none";
        collectionForm.querySelector(".new-name").value = "";
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
      collectionsMenu.style.display = "none";
      hamburger.style.display = "block";
      if (collectionForm.style.display === "block") {
        collectionForm.style.display = "none";
      }
    });
  }

  gettingCollections() {
    collectionApiCall.getCollectionsApi(this);

    // const usersCollection = Collection.all.filter((collection) => {
    //   return collection.user.id === this.id;
    // });

    // for (const collection of usersCollection) {
    //   collection.appendCollections();
    // }

    xCollectionsBtn.addEventListener("click", function () {
      collectionsDisplay.innerHTML = "";
      hamburger.style.display = "block";
      xCollectionsBtn.style.display = "none";
      collectionsMenu.style.display = "none";
      if (collectionForm.style.display === "block") {
        collectionForm.style.display = "none";
      }
    });

    // const allCollections = document.querySelectorAll(".each-collection");
    // for (const collection of allCollections) {
    //   collection.addEventListener("click", (e) => {
    //     // e.stopImmediatePropagation();
    //     // e.stopPropagation();
    //     const foundCollection = Collection.all.find(
    //       (c) => c.name === e.target.innerText
    //     );
    //     foundCollection.accessCollection();
    //   });
    // }
  }
}
