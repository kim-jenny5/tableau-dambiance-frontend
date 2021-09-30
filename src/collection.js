const hamburger = document.querySelector(".hamburger");
const xCollectionsBtn = document.querySelector(".close-collections-btn");
const collectionsMenu = document.querySelector(".collections-side-menu");

const collectionsList = document.querySelector(".collections-display");

class Collection {
  constructor({ id, name, pictures, user, created_at }) {
    this.id = id;
    this.name = name;
    this.pictures = pictures;
    this.user = user;
    this.created_at = created_at;
  }

  static setUpUsersPage(user) {
    hamburger.addEventListener("click", function () {
      collectionsMenu.style.display = "block";
      if (xCollectionsBtn.style.display === "none") {
        hamburger.style.display = "none";
        xCollectionsBtn.style.display = "block";
      }
      for (const collection of user.collections) {
        const collectionEl = document.createElement("div");
        collectionEl.className = "each-collection";
        collectionEl.innerText = collection.name;
        collectionsList.append(collectionEl);
        // debugger;
      }
    });

    xCollectionsBtn.addEventListener("click", function () {
      collectionsList.innerHTML = "";
      if (xCollectionsBtn.style.display === "none") {
        xCollectionsBtn.style.display = "block";
        hamburger.style.display = "none";
      } else {
        xCollectionsBtn.style.display = "none";
        hamburger.style.display = "block";
        collectionsMenu.style.display = "none";
      }
    });
  }

  static listCollections(user) {
    const eachCollection = document.querySelectorAll(".each-collection");
    debugger;
  }
}
