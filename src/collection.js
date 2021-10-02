const xCollectionsBtn = document.querySelector(".close-collections-btn");

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

    if (collectionsMenu.style.display === "block") {
      hamburger.style.display = "block";
      collectionsMenu.style.display = "none";
    }

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
    this.arrangePhotos();
  }

  arrangePhotos() {
    // debugger;
    const picBtns = document.querySelectorAll(".board-numbers button");
    for (const button of picBtns) {
      button.addEventListener("click", () => {
        const picBoardEl = document.querySelector(".picture-board-col");
        if (button.innerText == 1) {
          debugger;
          picBoardEl.style.flex = "100%";
        } else if (button.innerText == 2) {
          picBoardEl.style.flex = "50%";
        } else {
          picBoardEl.style.flex = "33%";
        }
      });
    }
  }
}
