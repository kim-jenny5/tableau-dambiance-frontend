const collectionForm = document.querySelector(".new-collection-form");
const helloUser = document.querySelector(".hello-user");
const username = document.querySelector(".username-display");

const newBtn = document.querySelector(".new-btn");

class User {
  static all = [];

  constructor({ id, username, collections }) {
    this.id = id;
    this.username = username;
    this.collections = collections;
    User.all.push(this);
  }

  setUpUsersPage() {
    startingPg.style.display = "none";
    newUserPg.style.display = "none";
    returningUserPg.style.display = "none";
    hamburger.style.display = "block";
    home.style.display = "block";

    helloUser.innerHTML = `${this.username}.`;

    username.innerText = this.username;

    hamburger.addEventListener("click", () => {
      collectionsMenu.style.display = "block";
      if (xCollectionsBtn.style.display === "none") {
        hamburger.style.display = "none";
        xCollectionsBtn.style.display = "block";
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
      home.style.display = "none";
      newUserPg.style.display = "none";
      hamburger.style.display = "none";
      collectionsMenu.style.display = "none";
      collectionsDisplay.innerHTML = "";
      returningUsername.value = "";
      pictureBoard.innerHTML = "";
      if (collectionForm.style.display === "block") {
        collectionForm.style.display = "none";
      }
    });

    const blank = document.querySelectorAll(".blank");
    for (const page of blank) {
      page.addEventListener("click", () => {
        collectionsMenu.style.display = "none";
        hamburger.style.display = "block";
        if (collectionForm.style.display === "block") {
          collectionForm.style.display = "none";
        }
      });
    }

    xCollectionsBtn.addEventListener("click", function () {
      hamburger.style.display = "block";
      xCollectionsBtn.style.display = "none";
      collectionsMenu.style.display = "none";
      if (collectionForm.style.display === "block") {
        collectionForm.style.display = "none";
      }
    });
  }

  deletingCollection() {
    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();

      const id = parseInt(e.target.id.match(/\d/));
      if (window.confirm("Are you sure you want to delete this collection?")) {
        collectionApiCall.deleteCollectionApi(id);
        pictureBoard.innerHTML = "";
        mainPg.style.display = "none";
        document
          .querySelector(".collections-display")
          .querySelector(`#collection-${id}`)
          .remove();
        this.setUpUsersPage();
      }
    });
  }
}
