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
      // console.log(user);
      collectionsMenu.style.display = "block";
      if (xCollectionsBtn.style.display === "none") {
        hamburger.style.display = "none";
        xCollectionsBtn.style.display = "block";
      }
      const collectionsList = document.querySelector(".collections-display");
      for (const collection of user.collections) {
        const collectionEl = document.createElement("div");
        collectionEl.innerText = collection.name;
        console.log(collectionEl);
        // debugger;
        collectionsList.append(collectionEl);
        // debugger;
      }
    });

    xCollectionsBtn.addEventListener("click", function () {
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
}

const hamburger = document.querySelector(".hamburger");
const xCollectionsBtn = document.querySelector(".close-collections-btn");
const collectionsMenu = document.querySelector(".collections-side-menu");

// hamburger.addEventListener("click", function () {
//   collectionsMenu.style.display = "block";
//   if (xCollectionsBtn.style.display === "none") {
//     hamburger.style.display = "none";
//     xCollectionsBtn.style.display = "block";
//   }
// });

// xCollectionsBtn.addEventListener("click", function () {
//   if (xCollectionsBtn.style.display === "none") {
//     xCollectionsBtn.style.display = "block";
//     hamburger.style.display = "none";
//   } else {
//     xCollectionsBtn.style.display = "none";
//     hamburger.style.display = "block";
//     collectionsMenu.style.display = "none";
//   }
// });
