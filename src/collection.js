const xCollectionsBtn = document.querySelector(".close-collections-btn");
const renameTitle = document.querySelector(".renaming-form");

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
    const foundCollection = Collection.all.find(
      (c) => c.name === e.target.innerText
    );

    foundCollection.accessCollection();
  }

  // accessCollection(collection) {
  accessCollection() {
    pictureBoard.innerHTML = "";

    if (collectionsMenu.style.display === "block") {
      hamburger.style.display = "block";
      collectionsMenu.style.display = "none";
    }

    if (renameTitle.style.display === "block") {
      renameTitle.style.display = "none";
    }

    title.innerHTML = this.name;

    pictureApiCall.getPicturesApi(this);

    // if (collection) {
    //   // pictureApiCall.getPicsForCollection(this);
    //   pictureApiCall.getPicturesApi(this);
    // } else {
    //   const collectionPictures = Picture.all.filter((pic) => {
    //     debugger;
    //     return pic.collection.name === this.name;
    //   });

    //   for (const picture of collectionPictures) {
    //     picture.attachToDom();
    //   }
    // }

    const uparrow = document.querySelector(".uparrow");
    const downarrow = document.querySelector(".downarrow");

    uparrow.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });

    downarrow.addEventListener("click", () => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    addBtn.addEventListener("click", (e) => {
      debugger;
      this.addNewPicture();
    });

    title.addEventListener("click", () => {
      renameTitle.style.display = "block";

      renameTitle.addEventListener("submit", (e) => {
        e.preventDefault();
        // e.stopImmediatePropagation();
        e.stopPropagation();
        this.renamingCollection(e);
      });
    });
  }

  renamingCollection(e) {
    this.name = e.target.querySelector(".file-rename").value;
    // const collection_id = this.id;
    // collectionApiCall.renameCollection(this, collection_id);
    collectionApiCall.renameCollection(this);
  }
}

// addNewPicture() {
//   // const newPictureForm = document.querySelector(".new-picture-form");
//   // newPictureForm.style.display = "block";
//   // debugger;
//   const newPicture = document.querySelector(".picture-upload");
//   newPicture.addEventListener("change", (e) => {
//     // e.target.value.uploadNewPicture();
//     // const newPicture = e.target.value;
//     // const p = new Picture(newPicture)
//     // pictureApiCall.uploadNewPicture(this, e.target.value);
//   });
//   // newPicture.
//   // debugger;
// }
