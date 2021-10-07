const xCollectionsBtn = document.querySelector(".close-collections-btn");
const deleteForm = document.createElement("form");
const deleteBtn = document.createElement("button");

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
    if (deleteBtn) deleteBtn.remove();
    // e.stopPropagation();
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

    mainPg.appendChild(deleteBtn);

    this.deleteCollection();
  };

  deleteCollection() {
    deleteBtn.setAttribute("form", `deleteColl${this.id}`);
    deleteBtn.setAttribute("type", "submit");
    deleteBtn.setAttribute("class", "btn btn-outline-dark delete fw-bold");
    deleteBtn.setAttribute("id", `${this.id}`);

    deleteBtn.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-trash"
        viewBox="0 0 16 16"
      >
        <path
          d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
        />
        <path
          fill-rule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
        />
      </svg>
      Delete Entire Collection
    `;

    // mainPg.appendChild(deleteBtn);
    console.log(deleteBtn);
    // debugger;
    // const correctCollection = e.target.innerText;

    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const foundCollection = Collection.all.find((c) => c.id == e.target.id);
      console.log(foundCollection);
      //   e.stopImmediatePropagation();
      //   console.log(correctCollection);
      debugger;
      //   if (window.confirm("Are you sure you want to delete this collection?")) {
      //     // console.log(this);
      //     console.log(e.target);
      //     debugger;
      //   }
    });
  }

  // deletingForm = (e) => {
  //   e.preventDefault();
  //   // console.log(this);
  //   // debugger;
  //   if (window.confirm("Are you sure you want to delete this collection?")) {
  //     // console.log(this);
  //     console.log(e.target);
  //     debugger;
  //   }
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
