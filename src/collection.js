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
    collectionEl.id = `collection-${this.id}`;
    collectionEl.innerText = this.name;
    collectionsDisplay.appendChild(collectionEl);
  }

  clickOnCollection() {
    const allCollections = document.querySelectorAll(".each-collection");
    for (const collection of allCollections) {
      collection.addEventListener("click", (e) => {
        e.stopImmediatePropagation();
        const foundCollection = Collection.all.find(
          (c) => c.id == parseInt(e.target.id.match(/\d/))
        );
        foundCollection.accessCollection(e);
      });
    }
  }

  accessCollection() {
    // const newPictureForm = document.querySelector(".new-picture-form");
    // newPictureForm.style.display = "block";

    mainPg.style.display = "block";
    home.style.display = "none";
    pictureBoard.innerHTML = "";

    window.scrollTo(0, 0);
    if (deleteBtn) deleteBtn.remove();

    const scrollBtns = document.querySelectorAll(".scroll-btns");
    for (const btn of scrollBtns) {
      btn.style.display = "block";
    }

    if (collectionsMenu.style.display === "block") {
      hamburger.style.display = "block";
      collectionsMenu.style.display = "none";
    }

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

    mainPg.appendChild(deleteBtn);

    this.createDeleteBtn();
    this.createAddBtn();
  }

  createDeleteBtn() {
    deleteBtn.setAttribute("type", "submit");
    deleteBtn.setAttribute("class", "btn btn-outline-dark delete fw-bold");
    deleteBtn.setAttribute("id", `deleteColl-${this.id}`);

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
  }

  createAddBtn() {
    // console.log(this); //correct collection
    const addPicForm = document.createElement("form");
    addPicForm.setAttribute("class", "new-picture-form");
    addPicForm.setAttribute("id", `addPicColl-${this.id}`);

    addPicForm.innerHTML = `
    <label for="picture-upload" class="add-btn-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        class="bi bi-plus-circle-fill add-btn"
        viewBox="0 0 16 16">
        <path
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
        />
      </svg>
    </label>
    <input
      type="file"
      id="picture-upload"
      class="picture-upload"
      style="display: none"
      multiple
      data-direct-upload-url="<%=rails_direct_uploads_url %>"
      />`;

    pictureBoard.append(addPicForm);

    console.log(addPicForm);

    addPicForm.addEventListener("change", (e) => {
      // console.log(this); // correct collection
      // const id = parseInt(e.target.parentElement.id.match(/\d/));
      // console.log(`Collection id: ${id}`);
      // const fileInput = document.getElementById("picture-upload").files;

      const input = document.querySelector("input[type=file]");

      for (const file of input.files) {
        // console.log(this);
        // console.log(file);
        // debugger;
        // this.uploadingPicture(this.id, file);
        // pictureApiCall.uploadPictures(this.id, file);
        // console.log(data);
        // debugger;
        const formData = new FormData();
        formData.append("file", file);
        debugger;
        console.log(formData);
        // pictureApiCall.uploadPictures(formData);
        // const url = input.dataset.directUploadUrl;
        // const upload = new ActiveStorage.DirectUpload(file, url);
        // console.log(url);
        // console.log(data);
        // console.log(upload);
        // debugger;
      }

      // uploadFile(fileInput[0]);
      // const uploadFile = (file) => {
      //   // const url =
      // };

      // console.log(fileInput);
      // debugger;
    });
  }

  // uploadingPicture(input, file) {
  //   const url = input.dataset.directUploadUrl;
  //   const upload = new DirectUpload(file, url);
  //   console.log(url);
  //   console.log(upload);
  //   debugger;
  // }
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
