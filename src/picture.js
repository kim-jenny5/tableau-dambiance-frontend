class Picture {
  static all = [];

  constructor({ id, url, collection }) {
    this.id = id;
    this.url = url;
    this.collection = collection;
    Picture.all.push(this);
    // event listener here
  }

  attachToDom() {
    const picEl = document.createElement("img");
    picEl.src = `${base_url}${this.url}`;
    pictureBoard.appendChild(picEl);
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
