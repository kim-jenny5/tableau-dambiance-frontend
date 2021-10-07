const xCollectionsBtn = document.querySelector(".close-collections-btn");
// const renameTitle = document.querySelector(".renaming-form");

class Collection {
  static all = [];

  constructor({ id, name, pictures, user, created_at }) {
    this.id = id;
    this.name = name;
    this.pictures = pictures;
    this.user = user;
    this.created_at = created_at;

    Collection.all.push(this);

    const collectionEl = document.createElement("div");
    collectionEl.className = "each-collection";
    collectionEl.id = this.id;
    collectionEl.innerText = this.name;
    collectionsDisplay.appendChild(collectionEl);
  }

  // appendCollections() {
  //   const collectionEl = document.createElement("div");
  //   collectionEl.className = "each-collection";
  //   collectionEl.id = this.id;
  //   collectionEl.innerText = this.name;
  //   collectionsDisplay.appendChild(collectionEl);
  //   // collectionEl.addEventListener("click", this.clickOnCollection);
  // }

  // clickOnCollection = (e) => {
  //   const allCollections = document.querySelectorAll(".each-collection");
  //   console.log(allCollections);
  //   debugger;

  //   for (const collection of allCollections) {
  //     collection.addEventListener("click", (e) => {
  //       e.stopImmediatePropagation();
  //       // e.stopPropagation();
  //       // console.log(collection);
  //       // debugger;
  //       const foundCollection = Collection.all.find(
  //         (c) => c.name === e.target.innerText
  //       );
  //       foundCollection.accessCollection(e);
  //       foundCollection.renamingCollection(e);
  //     });
  //   }

  //   // debugger;
  //   // e.stopPropagation();
  //   // e.stopImmediatePropagation();

  //   // const foundCollection = Collection.all.find((c) => c.name === this.name);
  //   // foundCollection.accessCollection();
  // };

  // accessCollection(collection) {
  accessCollection = (e) => {
    window.scrollTo(0, 0);
    e.stopPropagation();
    // e.stopImmediatePropagation();
    // const self = this;

    pictureBoard.innerHTML = "";

    const scrollBtns = document.querySelectorAll(".scroll-btns");
    for (const btn of scrollBtns) {
      btn.style.display = "block";
    }

    if (collectionsMenu.style.display === "block") {
      hamburger.style.display = "block";
      collectionsMenu.style.display = "none";
    }

    // if (renameTitle.style.display === "block") {
    //   renameTitle.style.display = "none";
    // }

    title.innerText = this.name;

    pictureApiCall.getPicturesApi(this);

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

    this.deleteCollection();
  };

  deleteCollection() {
    const deleteForm = document.querySelector(".delete-form");
    deleteForm.style.display = "block";
    console.log(this);
    const self = this;
    deleteForm.addEventListener("submit", (e) => {
      e.preventDefault();
      debugger;
      if (window.confirm("Are you sure you want to delete this collection?")) {
        console.log(this);
        console.log(e.target);
        debugger;
      }
    });
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
