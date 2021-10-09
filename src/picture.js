class Picture {
  static all = [];

  constructor({ id, pic_url, collection }) {
    this.id = id;
    this.pic_url = pic_url;
    this.collection = collection;
    Picture.all.push(this);
  }

  attachToDom() {
    // const picDiv = document.createElement("div");
    // picDiv.setAttribute("class", "img-container");
    // const deletePicBtn = document.createElement("span");
    // deletePicBtn.setAttribute("class", "close");
    // deletePicBtn.innerHTML = `<svg
    // xmlns="http://www.w3.org/2000/svg"
    // width="30"
    // height="30"
    // fill="currentColor"
    // class="bi bi-x-circle-fill"
    // style="display: none"
    // viewBox="0 0 16 16">
    // <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
    // </svg>`;

    const picEl = document.createElement("img");
    // picEl.src = `${this.url}`;
    picEl.src = `${this.pic_url}`;

    // picDiv.append(deletePicBtn, picEl);
    // pictureBoard.appendChild(picDiv);

    pictureBoard.appendChild(picEl);

    // const allImgs = document.querySelectorAll(".picture-board-col img");

    // for (const img of allImgs) {
    //   img.addEventListener("mouseover", (e) => {
    //     if (e.target.previousElementSibling.style.display === "none") {
    //       e.target.previousElementSibling.style.display = "block";
    //     }
    //     // deletePicBtn.style.display = "block";
    //   });
    // }
  }
}
