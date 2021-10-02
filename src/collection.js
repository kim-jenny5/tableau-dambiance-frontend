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
    // this.arrangePhotos();
  }

  // arrangePhotos() {
  //   const picBtns = document.querySelectorAll(".board-numbers button");
  //   const picCols = document.querySelectorAll(".picture-board-col");

  //   let clicked = false;

  //   for (const button of picBtns) {
  //     button.addEventListener("click", () => {
  //       if (button.innerText == 1) {
  //         clicked = true;
  //         picCols[0].style.flex = "100%";
  //       } else if (button.innerText == 2) {
  //         clicked = true;
  //         picCols[1].style.flex = "50%";
  //       } else if (button.innerText == 3) {
  //         clicked = true;
  //         picCols[2].style.flex = "33%";
  //       }
  //     });
  //   }

  //   if (clicked === true) {
  //     for (const picture of collectionPictures) {
  //       picture.attachToDom();
  //     }
  //   } else {
  //     for (const picture of collectionPictures) {
  //       picture.attachToDom();
  //     }
  //   }
  // }
}
