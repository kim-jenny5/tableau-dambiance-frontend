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
    // for (const col of pictureBoardCol) {
    //   col.innerHTML = "";
    // }

    title.innerText = this.innerText;

    if (collectionsMenu.style.display === "block") {
      hamburger.style.display = "block";
      collectionsMenu.style.display = "none";
    }

    const foundCollection = Collection.all.find(
      (c) => c.name === e.target.innerText
    );

    // addBtn.addEventListener("click", () => {
    //   debugger;
    // });

    foundCollection.accessCollection(e);
  }

  accessCollection(e) {
    const collectionPictures = Picture.all.filter((pic) => {
      return pic.collection.name === e.target.innerText;
    });

    // const picBtns = document.querySelectorAll(".board-numbers button");
    // const picCols = document.querySelectorAll(".picture-board-col");
    // const arr = Array.from(picCols);

    // for (const button of scrollBtns) {
    //   button.style.display = "none";
    // }

    for (const picture of collectionPictures) {
      picture.attachToDom();
      // const arr = Array.from(pictureBoardCol);
      // const picEl = document.createElement("img");

      // picture.attachToDomOneColBase(picEl, arr);

      // const picBtns = document.querySelectorAll(".board-numbers button");

      // for (const button of picBtns) {
      //   button.addEventListener("click", () => {
      //     if (button.innerText == 1) {
      //       picture.attachToDomOneColBase(picEl, arr);
      //     } else if (button.innerText == 2) {
      //       picture.attachToDomTwoCols(picEl, arr);
      //     } else if (button.innerText == 3) {
      //       picture.attachToDomThreeCols(picEl, arr);
      //     }
      //   });
      // }
      // }
    }

    const uparrow = document.querySelector(".uparrow");
    const downarrow = document.querySelector(".downarrow");

    uparrow.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });

    downarrow.addEventListener("click", () => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    // document.addEventListener("scroll", () => {
    //   // if (window.scrollY > 1000) {
    //   //   // const scrollBtns = document.querySelectorAll(".scrollBtns");
    //   //   // for (const button of scrollBtns) {
    //   //   //   button.style.display = "block";
    //   //   // }
    //   //   // scrollBtns.style.display = "block";
    //   //   // const uparrow = document.querySelector(".uparrow");
    //   //   // const downarrow = document.querySelector(".downarrow");
    //   //   // uparrow.addEventListener("click", () => {
    //   //   //   window.scrollTo(0, 0);
    //   //   // });
    //   //   // downarrow.addEventListener("click", () => {
    //   //   //   window.scrollTo(0, document.body.scrollHeight);
    //   //   // });
    //   // }
    // });
  }
}
