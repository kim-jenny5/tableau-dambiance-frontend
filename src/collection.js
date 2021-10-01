const hamburger = document.querySelector(".hamburger");
const xCollectionsBtn = document.querySelector(".close-collections-btn");
const collectionsMenu = document.querySelector(".collections-side-menu");

class Collection {
  static all = [];

  constructor({ id, name, pictures, user, created_at }) {
    this.id = id;
    this.name = name;
    this.pictures = pictures;
    this.user = user;
    this.created_at = created_at;

    // const collectionEl = document.createElement("div");
    // collectionEl.className = "each-collection";
    // collectionEl.innerText = this.name;
    // collectionsDisplay.append(collectionEl);

    Collection.all.push(this);
  }

  // static setUpUsersPage(user) {
  //   hamburger.addEventListener("click", function () {
  //     collectionsMenu.style.display = "block";
  //     if (xCollectionsBtn.style.display === "none") {
  //       hamburger.style.display = "none";
  //       xCollectionsBtn.style.display = "block";
  //     }
  //     user.listCollections();
  //   });

  //   xCollectionsBtn.addEventListener("click", function () {
  //     collectionsDisplay.innerHTML = "";
  //     if (xCollectionsBtn.style.display === "none") {
  //       xCollectionsBtn.style.display = "block";
  //       hamburger.style.display = "none";
  //     } else {
  //       xCollectionsBtn.style.display = "none";
  //       hamburger.style.display = "block";
  //       collectionsMenu.style.display = "none";
  //     }
  //   });
  // }

  appendCollections() {
    // debugger;
    const collectionEl = document.createElement("div");
    // const collectionsDisplay = document.querySelector(".collections-display");
    collectionEl.className = "each-collection";
    collectionEl.innerText = this.name;
    collectionsDisplay.append(collectionEl);
    // debugger;
  }

  accessCollection() {
    // debugger;
    for (const picture of this.pictures) {
      debugger;
    }
    Picture.getCollection(this);
    // debugger;
    // const eachCollection = document.querySelectorAll(".each-collection");

    // for (const collection of eachCollection) {
    //   // console.log(collection);
    //   // debugger;
    //   collection.addEventListener("click", function (e) {
    //     // const foundCollection = user.collections.find(
    //     //   (c) => c.name === e.target.innerText
    //     // );
    //     // // console.log(Collection.all);
    //     // console.log(foundCollection);
    //     // debugger;
    //   });
    // }
    // eachCollection.find(function (c) {
    //   debugger;
    // });
    // console.log(eachCollection);
    // debugger;
  }
}
