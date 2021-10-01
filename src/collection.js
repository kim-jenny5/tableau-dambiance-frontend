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

    Collection.all.push(this);
  }

  appendCollections() {
    const collectionEl = document.createElement("div");
    collectionEl.className = "each-collection";
    collectionEl.innerText = this.name;
    collectionsDisplay.appendChild(collectionEl);

    collectionEl.addEventListener("click", this.clickOnCollection);
  }

  clickOnCollection(e) {
    pictureBoard.innerHTML = "";
    title.innerText = this.innerText;

    const foundCollection = Collection.all.find(
      (c) => c.name === e.target.innerText
    );
    foundCollection.accessCollection(e);
  }

  accessCollection(e) {
    const collectionPictures = Picture.all.filter((pic) => {
      return pic.collection.name === e.target.innerText;
    });

    for (const picture of collectionPictures) {
      picture.attachToDom();
    }
  }
}
