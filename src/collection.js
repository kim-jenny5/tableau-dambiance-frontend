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

    // collectionEl.addEventListener("click", this.clickOnCollection);
  }

  // clickOnCollection = (e) => {
  //   // e.stopPropagation();
  //   e.stopImmediatePropagation();

  //   const foundCollection = Collection.all.find((c) => c.name === this.name);
  //   foundCollection.accessCollection();
  // };

  // accessCollection(collection) {
  accessCollection = () => {
    const self = this;
    // console.log(this);
    // console.log(self);

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

    title.addEventListener("click", (e) => {
      // e.stopImmediatePropagation();
      e.stopPropagation();
      console.log(this);
      console.log(e.target);

      // const foundCollection = Collection.all.find(
      //   (c) => c.name === e.target.innerText
      // );

      // const foundCollection = Collection.all.find((c) => c.name === this.name);

      // console.log(foundCollection);

      // renameTitle.style.display = "block";

      // renameTitle.addEventListener("submit", (e) => {
      //   e.preventDefault();
      //   // e.stopImmediatePropagation();
      //   e.stopPropagation();
      // this.renamingCollection(e);
      // });
    });
  };

  // renamingCollection = (e) => {
  //   console.log(this);
  //   console.log(e.target);
  //   debugger;
  //   // debugger;

  //   // renameTitle.style.display = "block";

  //   // renameTitle.addEventListener("submit", (e) => {
  //   //   e.preventDefault();
  //   //   e.stopImmediatePropagation();
  //   //   // e.stopPropagation();
  //   //   // this.renamingCollection(e);
  //   //   debugger;
  //   //   this.name = e.target.querySelector(".file-rename").value;
  //   //   collectionApiCall.renameCollection(this);
  //   // });

  //   // this.name = e.target.querySelector(".file-rename").value;
  //   // collectionApiCall.renameCollection(this);
  // };
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
